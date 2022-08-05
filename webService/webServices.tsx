import { AxiosError, AxiosResponse } from "axios";
import { GernalResponse } from "../model/response/GeneralResponse";
import { LoginResponse } from "../model/response/LoginResponse";
import axiosInstance from "./axiosInstance";


export function login(userName: string, password: string) {
    return axiosInstance.post('users/login', {
        "userName": "root1",
        "email": "ajefri76108@gmail.com",
        "password": "root",
        "name": "jefri",
        "userRole": "admin",
    }).then((response: AxiosResponse) => {
        //TODO login api response logic
        return ({ response })
    }).catch((error: Error) => {
        //TODO login api response error
        return ({ error })
    })
}