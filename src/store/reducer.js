import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as bannerReducer } from '../common/banner/store';

const reducer = combineReducers({
  header: headerReducer,
  banner: bannerReducer
});

export default reducer;
