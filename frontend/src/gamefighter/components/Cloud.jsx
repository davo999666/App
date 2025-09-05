import {useContext, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import { createCloud, rectCollision} from "../utils/function.js";
import {addSentenceKnow, addWordLearn, clearWordData} from "../features/word/wordSlice.js";
import {GameRefContext} from "../utils/gameScreenContext.js";
import {removeFirstItem} from "../features/word/sentencesSlice.js";

const Cloud = ({ clouds, setClouds }) => {
    const dispatch = useDispatch();
    const animationRef = useRef();
    const currentSent = useSelector((state) => state.word.currentSent);
    const gameRef = useContext(GameRefContext);
    const sentences = useSelector(state => state.sentences);
    const processedRef = useRef(false);

    useEffect(() => {
        if (clouds.length === 0 && sentences.currentSent.length > 0 && !processedRef.current) {
            const sentence = sentences.currentSent[0];
            if (sentence) {
                const [know, learn] = Object.entries(sentence)[0];
                dispatch(clearWordData())
                dispatch(addWordLearn(learn));
                dispatch(addSentenceKnow(know));
                dispatch(removeFirstItem());
            }
            processedRef.current = true;
        }

        if (clouds.length > 0) {
            processedRef.current = false;
        }
    }, [clouds.length, sentences.currentSent.length, dispatch]);


    useEffect(() => {
        currentSent.forEach((word) => {
            const x = Math.random() * gameRef.current.offsetWidth;
            const cloudInstance = createCloud(
                Math.floor(x), 0, word, gameRef.current.offsetWidth, gameRef.current.offsetHeight
            );
            setClouds((prev) => [...prev, cloudInstance]);
        });
    }, [currentSent]);
    useEffect(() => {
        setClouds(prev => {
            prev.forEach(cloud => {
                cloud.changeSize(gameRef.current.offsetWidth, gameRef.current.offsetHeight);
            });
            return [...prev];
        });
    }, [gameRef.current?.offsetWidth, gameRef.current?.offsetHeight]);

    useEffect(() => {
        const gameWidth = gameRef.current.offsetWidth;
        const gameHeight = gameRef.current.offsetHeight;
        const animate = () => {
            setClouds((prevClouds) => {
                return prevClouds
                    .map((cloud) => {
                        cloud.moveCloud(gameWidth);
                        prevClouds.forEach((anotherCloud) => {
                            if (cloud !== anotherCloud && rectCollision(cloud, anotherCloud)) {
                                cloud.collision(anotherCloud);
                            }
                        });
                        return cloud;
                    })
                    .filter((cloud) => cloud.y <= gameHeight + cloud.height);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [setClouds]);

    return (
        <>
            {clouds.map((cloud, index) => (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        left: cloud.x,
                        top: cloud.y,
                        width: cloud.width,
                        height: cloud.height,
                        pointerEvents: "none",
                    }}
                >
                    <img
                        src={cloud.image}
                        alt="cloud"
                        className="absolute w-full h-full block"
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                        }}
                    />
                    <span
                        style={{
                            position: "absolute",
                            bottom: "1px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            color: "black",
                            fontWeight: "bold",
                            // fontSize: `${(gameRef.current.offsetWidth / 100) * 2}px`,
                            fontSize: `${
                                gameRef.current.offsetWidth <= 768
                                    ? (gameRef.current.offsetWidth / 100) * 4 // phone
                                    : (gameRef.current.offsetWidth / 100) * 2 // normal
                            }px`,
                        }}
                    >
            {cloud.word}
          </span>
                </div>
            ))}
        </>
    );
};

export default Cloud;
