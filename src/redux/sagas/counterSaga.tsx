import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import delay from 'redux-saga';
import {Action} from 'redux';

function* logAfterAction(action: Action) {
  console.log(action);
}
export function* counterSaga() {
  yield takeEvery('counter/increment', logAfterAction);
}
