import { login } from '../../webService/webServices';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Action } from 'redux';

function* loginApi() {
  try{
    const { response, error } = yield call(login, "a","b")

    if (response) {
      console.log(response.data)

      yield put({ type: 'user/loginSuccess', products: response })
    }
    else {
      console.log(error)
      yield put({ type: 'user/loginFail', products: error })
    }
  }catch(error){
    console.error( error)
  }

}

export function* loginBoxSaga() {
  yield takeEvery("user/login", loginApi);
}