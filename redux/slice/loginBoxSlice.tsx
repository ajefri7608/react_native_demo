import { createSlice } from "@reduxjs/toolkit";

export const loginBoxSlice = createSlice({
    name: 'login',
    initialState: {
        value: null,
    },
    reducers: {

        login: (state, action) => {
            
        },
        loginSuccess: (state, action) => {
            console.log("login success")
        }
    },

})