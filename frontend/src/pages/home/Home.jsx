
import SignIn from "../../accounting/Guest/SignIn.jsx";
import Profile from "../../accounting/Profile/Index.jsx";
import {useEffect, useState} from "react";

const Home = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsSignIn(false);
        }
    }, []);

    return (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
            {isSignIn ? <SignIn setIsSignIn={setIsSignIn}/> : <Profile/>}
        </div>
    );
};

export default Home;
