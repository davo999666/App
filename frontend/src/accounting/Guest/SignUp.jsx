import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useRegisterUserMutation} from "../../api/apiUser.js";


const SignUp = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();
    const [registerUser] = useRegisterUserMutation();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const data = await registerUser({login, password, fullName, email, country, birthday}).unwrap();

            if (data){
                navigate("/Verification", { state: { email } });
            }

            // Clear form
            setLogin("");
            setPassword("");
            setConfirmPassword("");
            setFullName("");
            setEmail("");
            setCountry("");
            setBirthday("");

            // Navigate after successful register

        } catch (err) {
            console.error("Registration failed:", err);
            alert(err.message || "Something went wrong!");
        }
    };

    return (
        <div className="flex justify-center p-4 pt-24"> {/* pt-24 = 6rem padding top for header */}
            <div
                className="w-96 max-h-[calc(100vh-6rem)] border border-green-500 bg-white p-4 flex flex-col space-y-4 overflow-y-auto">
                <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-3">
                    <input type="text" name="login" placeholder="Login" className="border rounded px-3 py-2"
                           value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"
                           className="border rounded px-3 py-2" value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <input type="text" name="fullName" placeholder="Full Name" className="border rounded px-3 py-2"
                           value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                    <input type="email" name="email" placeholder="Email" className="border rounded px-3 py-2"
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" name="country" placeholder="Country" className="border rounded px-3 py-2"
                           value={country} onChange={(e) => setCountry(e.target.value)}/>
                    <input type="date" name="birthDate" className="border rounded px-3 py-2" value={birthday}
                           onChange={(e) => setBirthday(e.target.value)}/>
                    <button type="submit"
                            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                        Register
                    </button>
                </form>
            </div>
        </div>


    );
};

export default SignUp;
