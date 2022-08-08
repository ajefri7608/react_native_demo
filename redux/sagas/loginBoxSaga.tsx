import { login } from '../../webService/webServices';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosGernalResponse } from '../../model/response/axiosGeneralResponse';

function* loginApi(action: PayloadAction<{ userName: string, password: string }>) {

  try{
    const { response, error }: AxiosGernalResponse = yield call(login, action.payload.userName, action.payload.password)

    if (response && response.data?.apiMsg.rspCode == 1000) {
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