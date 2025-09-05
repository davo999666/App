import userRepository from '../repositories/userRepository.js';
import jwt from 'jsonwebtoken';
import {sendVerificationEmail} from "./emailSerivices.js";
const tempUsers = new Map();

class UserService {
    async login(data) {
        const success = await userRepository.login(data);
        if (success) {
            const {login} = data;
            const token = await jwt.sign({login}, process.env.SECRET_KEY, {expiresIn: '30d'})
            const user = success
            return {token, user}
        }
        return false;
    }
    async verifyEmail(data) {
        const existingUser = await userRepository.findUser(data);

        if (existingUser) {
            return { success: false, message: 'User already exists' };
        }
        const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
        await sendVerificationEmail(data.email, verificationCode);
        tempUsers.set(data.email, { data, code: verificationCode });

        return { success: true, message: 'Verification code sent' };
    }

    async register(data) {
        const { email, code } = data;
        const temp = tempUsers.get(email);

        if (!temp) {
            return { success: false, message: "No verification found for this email" };
        }

        if (temp.code !== code) {
            tempUsers.delete(email);
            return { success: false, message: "Invalid verification code" };
        }

        // Create user
        const createdUser = await userRepository.createUser(temp.data);

        // Remove temporary verification
        tempUsers.delete(email);

        // Generate JWT
        const token = jwt.sign(
            { login: createdUser.login, email: createdUser.email },
            process.env.SECRET_KEY,
            { expiresIn: '30d' }
        );

        return { success: true, token, user: createdUser };
    }

}


export default new UserService();