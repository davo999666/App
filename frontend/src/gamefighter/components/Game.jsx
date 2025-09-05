import { useEffect, useRef, useState } from "react";
import starBackground from "../assets/images/screen/star_background_1000x5000.png";
import { handleFullScreen } from "../handlers/fullscreenHandlers.js";
import Cloud from "./Cloud.jsx";
import Boom from "./Boom.jsx";
import Translate from "./Translate.jsx";
import Fighter from "./Fighter.jsx";
import Bullet from "./Bullet.jsx";
import { GameRefContext } from "../utils/gameScreenContext.js";
import { useDispatch, useSelector } from "react-redux";
import { useLazyFetchSentencesQuery } from "../../api/apiGame.js";
import { addSentences } from "../features/word/sentencesSlice.js";

const Game = () => {
    const backgroundRef = useRef(null);
    const heightRef = useRef(0);
    const [bullets, setBullets] = useState([]);
    const [clouds, setClouds] = useState([]);
    const currentSent = useSelector((state) => state.sentences.currentSent);
    const currentUser = useSelector((state) => state.user.currentUser);
    const [fetchSentences] = useLazyFetchSentencesQuery();
    const dispatch = useDispatch();

    // Background scrolling
    useEffect(() => {
        const speed = 0.2;
        const loop = () => {
            heightRef.current += speed;
            if (heightRef.current >= 5000) heightRef.current = 0;
            if (backgroundRef.current) {
                backgroundRef.current.style.backgroundPosition = `0px ${heightRef.current}px`;
            }
            requestAnimationFrame(loop);
        };
        loop();
    }, []);

    // Fetch sentences if less than 5
    useEffect(() => {
        if (!currentUser || currentSent.length >= 5) return;

        const loadSentences = async () => {
            try {
                const result = await fetchSentences({
                    level: currentUser.level,
                    know: currentUser.know,
                    learn: currentUser.learn,
                });

                if (result.data) {
                    dispatch(addSentences(result.data));
                } else if (result.error) {
                    console.error("Fetch error:", result.error);
                }
            } catch (err) {
                console.error(err);
            }
        };

        loadSentences();
    }, [currentUser, currentSent.length, fetchSentences, dispatch]);

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-900 overflow-hidden select-none">
            <GameRefContext.Provider value={backgroundRef}>
                <div
                    ref={backgroundRef}
                    className="h-full w-full md:w-[600px] lg:w-[800px] xl:w-[1000px] relative select-none"
                    style={{
                        backgroundImage: `url(${starBackground})`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "cover",
                        userSelect: "none",
                    }}
                >
                    <Cloud clouds={clouds} setClouds={setClouds} />
                    <Boom />
                    <Translate />
                    <Fighter setBullets={setBullets} />
                    <Bullet
                        bullets={bullets}
                        clouds={clouds}
                        setBullets={setBullets}
                        setClouds={setClouds}
                    />
                    <button
                        onClick={() => handleFullScreen(backgroundRef)}
                        className="absolute bottom-[0.5px] right-[0.5px] text-blue-500 text-xl px-2 z-10 rounded-sm"
                        title="Toggle Fullscreen"
                    >
                        ⛶
                    </button>
                </div>
            </GameRefContext.Provider>
        </div>
    );
};

export default Game;
