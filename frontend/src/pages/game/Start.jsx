import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {clearUserData, setUserData} from "../../gamefighter/features/user/userSlice.js";
import {clearSentences} from "../../gamefighter/features/word/sentencesSlice.js";
import {clearWordData} from "../../gamefighter/features/word/wordSlice.js";


const levels = ['A1', 'A2', 'B1', 'B2'];
const languages = [
    { name: "Armenian", code: "am" },
    { name: "Russian", code: "ru" },
    { name: "Hebrew", code: "hw" },
    { name: "English", code: "en" }
];

const Start = () => {
    const dispatch = useDispatch();
    const [Level, setLevel] = useState('');
    const [isGameStarted, setIsGameStarted] = useState(false);
    const navigate = useNavigate();
    const [learnLang, setLearnLang] = useState('');
    const [knowLang, setKnowLang] = useState('');
    const token = localStorage.getItem("token");


    const handleStartGame = () => {
        dispatch(clearSentences());
        dispatch(clearUserData());
        dispatch(clearWordData())

        if (Level && learnLang && knowLang && token && learnLang !== knowLang) {
            dispatch(setUserData({
                level: Level,
                know: knowLang,
                learn: learnLang,
                token: token
            }));
            setIsGameStarted(true);
        } else {
            alert("Please select a level and languages");
        }
    };
    useEffect(() => {
        if (isGameStarted) {
            navigate('/games/started');
        }
    }, [isGameStarted, navigate]);

    return (
        <div>
            <div id="start-screen" className="md:w-[800px] lg:w-[900px] xl:w-[1000px] text-center space-y-4">
                <div id="buttonLevel" className="space-x-2">
                    {levels.map((level) => (
                        <button
                            key={level}
                            onClick={() => setLevel(level)}
                            className={`my-button px-6 py-2 rounded 
            ${level === Level ? 'bg-yellow-500' : 'bg-blue-500'} 
            text-white hover:opacity-90`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
                <div className="space-x-2">
                    <button
                        id="start-game"
                        onClick={handleStartGame}
                        className="px-8 py-4 bg-green-500 text-white rounded hover:bg-green-800"
                    >
                        Start Game
                    </button>
                    <button
                        id="end-game"
                        className="px-8 py-4 bg-red-500 text-white rounded hover:bg-red-800"
                    >
                        End Game
                    </button>
                </div>
                <div className="space-y-2 mt-2">
                    <div className="space-y-4 mt-4">
                        {/* Know Language */}
                        <div className="flex flex-col items-start">
                            <label htmlFor="knowLanguage" className="mb-1 font-semibold text-gray-700">
                                Know Language:
                            </label>
                            <select
                                id="knowLanguage"
                                value={knowLang}
                                onChange={(e) => setKnowLang(e.target.value)}
                                className="px-4 py-2 border-2 border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                <option value="">Select Language</option>
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Learn Language */}
                        <div className="flex flex-col items-start">
                            <label htmlFor="learnLanguage" className="mb-1 font-semibold text-gray-700">
                                Learn Language:
                            </label>
                            <select
                                id="learnLanguage"
                                value={learnLang}
                                onChange={(e) => setLearnLang(e.target.value)}
                                className="px-4 py-2 border-2 border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                            >
                                <option value="">Select Language</option>
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Start;
