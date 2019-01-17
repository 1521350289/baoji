import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import { constants as headerConstants, actionCreators as headerActionCreators } from '../common/header/store';
import { constants as bannerConstants, actionCreators as bannerActionCreators } from '../common/banner/store';
import axios from 'axios';

// header组件
function* getHeaderData() {
  try {
    const res = yield axios.get('./header.json');
    const result = res.data.data;
    const action = headerActionCreators.initHeaderAction(result);
    yield put(action);
  } catch (e) {
    console.log("header.json网络请求失败");
  }
}

// banner组件
function* getBannerData() {
  try {
    const res = yield axios.get('./banner.json');
    const result = res.data.data;
    const action = bannerActionCreators.initBannerAction(result);
    yield put(action);
  } catch (e) {
    console.log("banner.json网络请求失败");
  }
}

function* mySaga() {
  yield takeLatest(headerConstants.GET_HEADER_DATA, getHeaderData);
  yield takeLatest(bannerConstants.GET_BANNER_DATA, getBannerData);
}

export default mySaga;
