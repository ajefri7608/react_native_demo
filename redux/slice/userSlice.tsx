import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../../model/response/LoginResponse";
import { UserStateType } from "../../model/stateTypeDefine/UserStateType";


const initialState: UserStateType = {
    memberProfile : null,
    isLogin : null,
    userName: null,
    password: null
};
// const a = (b="dadad")=>{

// }
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login: (state, action: PayloadAction<{userName:string, password: string}>) => {
            console.log(action.payload.userName, action.payload.password)
            console.log("login processing")

        },
        loginSuccess: (state) => {
            
            console.log("login success")
        },
        loginFail:(state) => {
            console.log("login fail")
        }
    },

})

export const { login } = userSlice.actions

export default userSlice.reducer