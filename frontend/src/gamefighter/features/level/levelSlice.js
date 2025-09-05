import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedLevel: null,
};

const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        setLevel(state, action) {
            state.selectedLevel = action.payload;
        },
    },
});

export const { setLevel } = levelSlice.actions;
export default levelSlice.reducer;
