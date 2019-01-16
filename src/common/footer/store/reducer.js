import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  mouseIn: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.MOUSE_IN:
      return state.set('mouseIn', fromJS(true));
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', fromJS(false));
    default:
      return state;
  }
}
