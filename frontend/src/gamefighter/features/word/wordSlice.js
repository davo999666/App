import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    currentSent: [],
    russianSent: null,
    guessedWord: ""
};

const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
        addGuessedWord: (state, action) => {
            const word = action.payload;
            if(word){
                state.guessedWord += word + " "
            }else {
                state.guessedWord = "";
            }
        },
        addWordLearn: (state, action) => {
            state.currentSent = action.payload.split(" ");
        },
        addSentenceKnow: (state, action) => {
            state.russianSent = action.payload;
        },
        clearWordData: () => initialState
    }
});

export const { clearWordData, addWordLearn ,addSentenceKnow, addGuessedWord} = wordSlice.actions;
export default wordSlice.reducer;
