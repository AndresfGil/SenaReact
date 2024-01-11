import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    
    name: "auth",
    initialState: {
        status: "checking",
        uid: null,
        email: null,
        password: null,
        fullName: null,
        numberPhone: null,
        address: null,
        photoURL: null,
        errorMessage: null,
    },

    reducers: {
        login: (state) => {

        },

        setActiveUser: (state) => {

        },

        logout: (state) => {

        },
    },
});

export const { login, logout, setActiveUser } = authSlice.actions;