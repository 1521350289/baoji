import * as constants from './constants';

export const mouseIn = (value) => ({
  type: constants.MOUSE_IN,
  value
});

export const scroNum = (nowImgNum) => ({
  type: constants.SCRO_NUM,
  nowImgNum
});

export const initImgNum = () => ({
  type: constants.INIT_IMG_NUM
});

export const changeNum = (num) => ({
  type: constants.CHANGE_NUM,
  num
});

export const getBannerData = () => ({
  type: constants.GET_BANNER_DATA
});

export const initBannerAction = (result) => ({
  type: constants.INIT_BANNER_ACTION,
  scroImg: result.scroImg
});
