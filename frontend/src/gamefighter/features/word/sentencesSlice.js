import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    currentSent: [],
};

const sentencesSlice = createSlice({
    name: "sentencesSlice",
    initialState,
    reducers: {
        removeFirstItem: (state) => {
            if (state.currentSent.length === 0) return;
            state.currentSent.shift();
        },
        // Add sentences safely
        addSentences: (state, action) => {
            let sentencesArray = [];
            sentencesArray = Object.entries(action.payload).map(
                ([key, value]) => ({ [key]: value })
            );
            state.currentSent.push(...sentencesArray);
        },
        // Clear all sentences
        clearSentences: (state) => {
            state.currentSent = [];
        },

        // Internal reducer to remove first sentence
        removeFirstSentence: (state) => {
            state.currentSent.shift();
        }
    }
});

export const { addSentences,removeFirstItem, clearSentences, removeFirstSentence } = sentencesSlice.actions;
export default sentencesSlice.reducer;
