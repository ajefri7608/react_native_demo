import {all} from '@redux-saga/core/effects';
import {counterSaga} from './counterSaga';
import {loginBoxSaga} from './loginBoxSaga';
export default function* rootSaga() {
  yield all([counterSaga(), loginBoxSaga()]);
}
