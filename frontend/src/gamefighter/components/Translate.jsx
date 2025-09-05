import { useSelector } from "react-redux";

const Translate = () => {
    const translate = useSelector(state => state.word.russianSent);
    const sentence = useSelector((state)=>state.word.guessedWord)

    return (
        <div className="text-3xl">
            <p className="absolute top-0 left-0 w-full text-red-500 text-center z-30 pointer-events-none">
                {translate}
            </p >
            <p className="absolute bottom-0 left-0 w-full text-red-500 text-center z-30 pointer-events-none">
                {sentence}
            </p>
        </div>
    );
};

export default Translate;