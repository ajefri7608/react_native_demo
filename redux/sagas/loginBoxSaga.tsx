import { login } from '../../webService/webServices';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";

function* loginApi(action: PayloadAction<{ userName: string, password: string }>) {

  try{
    const { response, error } = yield call(login, action.payload.userName, action.payload.password)

    if (response) {
      console.log(response.data)

      yield put({ type: 'user/loginSuccess', payload: response.data.data })
    }
    else {
      console.log(error)
      yield put({ type: 'user/loginFail', payload: error })
    }
  }catch(error){
    console.error( error)
    yield put({ type: 'user/loginFail', payload: error })
  }

}

export function* loginBoxSaga() {
  yield takeEvery("user/login", loginApi);
}