import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import { constants, actionCreators } from '../common/header/store';
import axios from 'axios';

function* getInitHeader() {
  try {
    const res = yield axios.get('./header.json');
    const action = actionCreators.initHeaderAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("header.json网络请求失败");
  }
}

function* mySaga() {
  yield takeLatest(constants.GET_HEADER_DATA, getInitHeader);
}

export default mySaga;
