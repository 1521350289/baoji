import { takeEvery, put } from 'redux-saga/effects';
import { INIT_HEADER } from './constants';
import { initHeaderAction } from './actionCreators';
import axios from 'axios';

function* getInitHeader() {
  try {
    const res = yield axios.get('./header.json');
    const action = initHeaderAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("header.json网络请求失败");
  }
}

function* mySaga() {
  yield takeEvery(INIT_HEADER, getInitHeader);
}

export default mySaga;
