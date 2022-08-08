import { AxiosResponse } from "axios";
import { GernalResponse } from "./GeneralResponse";


export type AxiosGernalResponse = {
    response: AxiosResponse<GernalResponse<Object>>
    error: Error
}