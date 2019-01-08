import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  mouseIn: false,
  scroTime: 3000,
  nowImgNum: 1,
  isScroll: true,
  scroImg: [{
    id: 1,
    img: 'http://bj.xabjyy.com/templets/baoji/images/7aaaa3108acd3e.jpg',
    link: '/',
    position: 0
  },{
    id: 2,
    img: 'http://bj.xabjyy.com/templets/baoji/images/7dbc81d6b25896.jpg',
    link: '/',
    position: 0
  },{
    id: 3,
    img: 'http://bj.xabjyy.com/templets/baoji/images/19c29b586cd594.jpg',
    link: '/',
    position: 0
  }]

});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.MOUSE_IN:
      return state.set('mouseIn', fromJS(action.value));
    case constants.CHANGE_NUM:
      return state.set('nowImgNum', fromJS(action.nowImgNum));
    case constants.INIT_IMG_NUM:
      return state.set('nowImgNum', fromJS(1));
    default:
      return state;
  }
}
