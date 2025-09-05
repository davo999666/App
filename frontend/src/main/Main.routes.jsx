import About from "../pages/about/About.jsx";
import Home from "../pages/home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Games from "../pages/game/Games.jsx";
import Game from "../gamefighter/components/Game.jsx";
import SignUp from "../accounting/Guest/SignUp.jsx";
import Verification from "../pages/Verification.jsx";



const MainRoutes = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/registr" element={<SignUp/>}/>
                    <Route path="/games" element={<Games/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/games/started" element={<Game />} />
                    <Route path="/profile" element={<Home/>}/>
                    <Route path="/verification" element={<Verification />} />
                </Routes>
        </div>
    );
};

export default MainRoutes;
