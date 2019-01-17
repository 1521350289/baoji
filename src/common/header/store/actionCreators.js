import * as constants from './constants';

export const mouseEnter = (id) => ({
  type: constants.MOUSE_ENTER,
  id
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const initHeaderAction = (data) => ({
  type: constants.INIT_HEADER,
  headerImg: data.headerImg,
  menu: data.menu
});

export const getHeaderData = () => ({
  type: constants.GET_HEADER_DATA
});
