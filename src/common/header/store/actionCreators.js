import * as constants from './constants';

export const mouseEnter = (id) => ({
  type: constants.MOUSE_ENTER,
  id
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
