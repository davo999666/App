import { API_URL } from "../config.js";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gameApi = createApi({
    reducerPath: "gameApi",
    tagTypes: ['profile'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,  // ← must point to backend
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchSentences: builder.query({
            query: ({ level, know, learn }) => {
                if (!level || !know || !learn) return "";
                return `/games/sentence?level=${level}&know=${know}&learn=${learn}`;
            },
            providesTags: ["profile"],
        }),
    }),
});

export const { useLazyFetchSentencesQuery } = gameApi;