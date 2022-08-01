import { login } from '../../webService/webServices'
import { call, put } from 'redux-saga/effects'



function* loginApi(userName: String, password: String) {
  const { response, error } = yield call(login('a', 'b'))
  if (response){
    console.log(response)
    yield put({ type: 'counter/increment', payload: 2})
    //yield put({ type: 'LOGIN_SUCCESS', products: response })
  }
  else
    yield put({ type: 'LOGIN_FAIL', error })
}

export {
  loginApi
}