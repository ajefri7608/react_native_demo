import { createSlice } from "@reduxjs/toolkit";

export const loginBoxSlice = createSlice({
    name: 'loginBox',
    initialState: {
        value: 0,
    },
    reducers: {

        login: (state, action) => {
            state.value += 1
            console.log("login ")
        },
        loginSuccess: (state) => {
            console.log("login success")
        }
    },

})

export const { login } = loginBoxSlice.actions

export default loginBoxSlice.reducer