import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';

const defaultState = combineReducers({
  header: headerReducer
});

export default (state = defaultState, action) => {
  return state;
}
