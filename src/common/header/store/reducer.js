import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  mouseEnter: 0,
  headerImg: '',
  menu: []
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.MOUSE_ENTER:
      return state.set('mouseEnter', fromJS(action.id));
    case constants.MOUSE_LEAVE:
      return state.set('mouseEnter', 0);
    case constants.INIT_HEADER:
      return state.merge({
        headerImg: fromJS(action.headerImg),
        menu: fromJS(action.menu)
      });
    default:
      return state;
  }
}
