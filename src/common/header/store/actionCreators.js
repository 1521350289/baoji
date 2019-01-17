import * as constants from './constants';

export const mouseEnter = (id) => ({
  type: constants.MOUSE_ENTER,
  id
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const initHeaderAction = (result) => ({
  type: constants.INIT_HEADER,
  headerImg: result.headerImg,
  menu: result.menu
});

export const getHeaderData = () => ({
  type: constants.GET_HEADER_DATA
});
