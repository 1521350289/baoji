import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as bannerReducer } from '../common/banner/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as footerReducer } from '../common/footer/store';

const reducer = combineReducers({
  header: headerReducer,
  banner: bannerReducer,
  home: homeReducer,
  footer: footerReducer
});

export default reducer;
