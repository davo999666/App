import {useEffect, useState} from "react";

const Profile = () => {
    const [show, setShow] = useState(false);
    const name = localStorage.getItem("Name") || "Guest";


    useEffect(() => {
        // trigger animation after mount
        setTimeout(() => setShow(true), 100);
    }, []);
    return (
        <div className="flex items-center justify-center py-20 px-4 bg-gray-100">
            <div
                className={`p-8 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl shadow-lg text-center text-white max-w-md w-full transform transition-all duration-700 ease-out ${
                    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <h1 className="text-3xl font-bold">Welcome 🌿</h1>
                <p className="text-lg mt-2 font-medium">{name}</p>
            </div>
        </div>
    );
};

export default Profile;