import { fromJS } from 'immutable';

const defaultState = fromJS({
  roomList: [{
    id: 1,
    imgUrl: "http://www.xabjyy.com/templets/baoji/images/ye-r1.jpg",
    link: '/'
  },{
    id: 2,
    imgUrl: "http://www.xabjyy.com/templets/baoji/images/ye-r7.jpg",
    link: '/'
  },{
    id: 3,
    imgUrl: "http://www.xabjyy.com/templets/baoji/images/ye-r2.jpg",
    link: '/'
  },{
    id: 4,
    imgUrl: "http://www.xabjyy.com/templets/baoji/images/ye-r4.jpg",
    link: '/'
  },{
    id: 5,
    imgUrl: "http://www.xabjyy.com/templets/baoji/images/ye-r5.jpg",
    link: '/'
  },{
    id: 6,
    imgUrl: "http://www.xabjyy.com/templets/baoji/images/ye-r6.jpg",
    link: '/'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
