import { AxiosResponse ,AxiosError} from "axios";
import { GernalResponse } from "./GeneralResponse";


export type AxiosGernalResponse<T> = {
    response: AxiosResponse<GernalResponse<T>>
    error: AxiosError
}