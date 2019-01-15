import * as constants from './constants';

export const changePic = (value) => ({
  type: constants.CHANGE_PIC,
  value
});

export const mouseIn = () => ({
  type: constants.MOUSE_IN
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
