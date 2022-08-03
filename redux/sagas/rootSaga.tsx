import { all } from "@redux-saga/core/effects";
import { SagaMiddleware } from "redux-saga";
import { counterSaga } from './counterSaga'
import { loginBoxSaga } from "./loginBoxSaga";
export default function* rootSaga(){
    yield all ([
        counterSaga(),
        loginBoxSaga()
      
      ])
}