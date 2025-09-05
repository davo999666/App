import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useLoginMutation} from "../../api/apiUser.js";

const SignIn = ({setIsSignIn}) => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginMutation] = useLoginMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginMutation({ login: emailOrUsername, password }).unwrap();
            if (data.token) {
                setIsSignIn(false)
                 localStorage.setItem("token", data.token);
                localStorage.setItem("Name", data.user.fullName);
            }
            setEmailOrUsername("");
            setPassword("");
            navigate("/Profile");
        } catch (err) {
            console.error("Login failed:", err);
            alert(err.message);
        }
    };

    return (
        <div className="fixed h-80 w-80 border border-red-500 bg-white p-4 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
                <input
                    type="text"
                    name="emailOrUsername"
                    placeholder="Email or Username"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </form>

            <div className="mt-4 flex justify-center items-center space-x-1 text-sm">
                <span>Don't have an account?</span>
                <Link
                    to="/registr"
                    className="text-blue-600 hover:underline font-semibold"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default SignIn;
