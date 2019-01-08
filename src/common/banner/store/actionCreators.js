import * as constants from './constants';

export const mouseIn = (value) => ({
  type: constants.MOUSE_IN,
  value
});

export const changeNum = (nowImgNum) => ({
  type: constants.CHANGE_NUM,
  nowImgNum
});

export const initImgNum = () => ({
  type: constants.INIT_IMG_NUM
})
