import * as constants from './constants';

export const mouseIn = (value) => ({
  type: constants.MOUSE_IN,
  value
});

export const changeNum = (nowImg) => ({
  type: constants.CHANGE_NUM,
  nowImg
})
