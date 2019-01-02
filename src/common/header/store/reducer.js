import { fromJS } from 'immutable';

const defaultState = fromJS({
  headerImg: ''
});

export default (state = defaultState, action) => {
  return state;
}
