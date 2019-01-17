import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  mouseIn: false,
  isMouseInControlBtn: false,
  scroTime: 4000,
  nowImgNum: 1,
  isScroll: true,
  scroImg: []

});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.MOUSE_IN:
      return state.set('mouseIn', fromJS(action.value));
    case constants.SCRO_NUM:
      return state.set('nowImgNum', fromJS(action.nowImgNum));
    case constants.INIT_IMG_NUM:
      return state.set('nowImgNum', fromJS(1));
    case constants.CHANGE_NUM:
      return state.set('nowImgNum', fromJS(action.num));
    case constants.INIT_BANNER_ACTION:
      return state.set('scroImg', fromJS(action.scroImg));
    default:
      return state;
  }
}
