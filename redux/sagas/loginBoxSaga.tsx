import { login } from '../../webService/webServices';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Action } from 'redux';

 function* loginApi(action: Action) {
   try {
    const { response, error } = yield login("A","b")
   } catch (error) {
     console.log(error)
   }
  //const { response, error } = yield call(login('a', 'b'))
  // if (response){
  //   console.log(response)
  //   yield put({ type: 'login/login', payload: 2})
  //   //yield put({ type: 'LOGIN_SUCCESS', products: response })
  // }
  // else
  //   yield put({ type: 'LOGIN_FAIL', error })
  console.log("loginApi")
}

export function* loginBoxSaga(){
  yield takeEvery("loginBox/login", loginApi);
}