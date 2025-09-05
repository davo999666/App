import { configureStore } from '@reduxjs/toolkit';
import levelReducer from './gamefighter/features/level/levelSlice';
import wordReducer from './gamefighter/features/word/wordSlice';
import sentencesSlice from "./gamefighter/features/word/sentencesSlice.js";
import userSlice from "./gamefighter/features/user/userSlice.js";

import {accountApi} from "./api/apiUser.js";
import {gameApi} from "./api/apiGame.js";

export const store = configureStore({
    reducer: {
        level: levelReducer,
        word: wordReducer,
        sentences: sentencesSlice,
        user: userSlice,
        [gameApi.reducerPath]: gameApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return  getDefaultMiddleware()
        .concat(gameApi.middleware)
        .concat(accountApi.middleware)
    }
});
