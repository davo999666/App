import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        level: "",
        know: "",
        learn: "",
        token: ""
    },
};

const sentencesSlice = createSlice({
    name: "sentencesSlice",
    initialState,
    reducers: {
        // Set or update the current sentence info
        setUserData: (state, action) => {
            const { level, know, learn, token } = action.payload;
            state.currentUser.level = level;
            state.currentUser.know = know;
            state.currentUser.learn = learn;
            state.currentUser.token = token;
        },
        clearUserData: (state) => {
            state.currentUser = {
                level: "",
                know: "",
                learn: "",
                token: ""
            };
        }
    }
});

export const { setUserData, clearUserData } = sentencesSlice.actions;
export default sentencesSlice.reducer;
