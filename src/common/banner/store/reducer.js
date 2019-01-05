import { fromJS } from 'immutable';

const defaultState = fromJS({
  mouseIn: true;
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case expression:

      break;
    default:
      return state;
  }
}
