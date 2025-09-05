import { API_URL } from "../config.js";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
    reducerPath: "account",
    tagTypes: ["profile"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token"); // читаем токен
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["profile"],
        }),

        registerUser: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["profile"],
        }),

        sendVerifyCode: builder.mutation({
            query: ({email, code}) => ({
                url: "/verifyCode",
                method: "POST",
                body: { email, code },
            }),
            invalidatesTags: ["profile"],
        }),

        // пример запроса профиля
        getProfile: builder.query({
            query: () => "/user/profile",
            providesTags: ["profile"],
        }),
    }),
});

export const {useLoginMutation, useRegisterUserMutation, useSendVerifyCodeMutation, useGetProfileQuery,} = accountApi;
