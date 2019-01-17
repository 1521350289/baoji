import { fromJS } from 'immutable';
import * as constants from './constants';

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
  }],
  doctorList: [{
    id:1,
    img: 'http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg',
    name: '吴胜利',
    job: '',
    room: '专家团队',
    detail: '/'
  }, {
    id: 2,
    img: 'http://www.xabjyy.com/uploads/allimg/180207/1-1P20G5362T06.jpg',
    name: '王俊卿',
    job: '',
    room: '康复科专家',
    detail: '/'
  }, {
    id: 3,
    img: 'http://www.xabjyy.com/uploads/allimg/171205/2-1G205114Q3554.jpg',
    name: '张立文',
    job: '主任医师',
    room: '妇科专家',
    detail: '/'
  }, {
    id: 4,
    img: 'http://www.xabjyy.com/uploads/allimg/181116/1-1Q116095619246-lp.jpg',
    name: '韩水莲',
    job: '副主任医师',
    room: '妇科专家',
    detail: '/'
  }, {
    id: 5,
    img: 'http://www.xabjyy.com/uploads/allimg/181116/1-1Q116100542G1-lp.jpg',
    name: '罗荣高',
    job: '副主任医师',
    room: '内科',
    detail: '/'
  }, {
    id: 6,
    img: 'http://www.xabjyy.com/uploads/allimg/181116/1-1Q116100953K1-lp.jpg',
    name: '刘咏楠',
    job: '全科医师',
    room: '全科专家',
    detail: '/'
  }, {
    id: 7,
    img: 'http://www.xabjyy.com/uploads/allimg/171208/1-1G20Q5060C91.jpg',
    name: '吴群强',
    job: '主治医师',
    room: '康复科专家',
    detail: '/'
  }, {
    id: 8,
    img: 'http://www.xabjyy.com/uploads/allimg/171208/1-1G20Q506461R.jpg',
    name: '汤永全',
    job: '主治医师',
    room: '康复科专家',
    detail: '/'
  }, {
    id: 9,
    img: 'http://www.xabjyy.com/uploads/allimg/171215/3-1G215095502231.jpg',
    name: '孟庆斌',
    job: '',
    room: '放射科专家',
    detail: '/'
  }, {
    id: 10,
    img: 'http://www.xabjyy.com/uploads/allimg/171208/1-1G20Q50541J4.jpg',
    name: '张孟利',
    job: '康复治疗师',
    room: '康复科专家',
    detail: '/'
  }],
  news: {
    newsList: [{
      id: 1,
      title: "西安保济医院＆唐都医院“与爱同行”免费康复评估指导患者征集",
      date: "18-04-05"
    },{
      id: 2,
      title: "患者家属送来感谢信，为保济优秀的医疗团队点赞！",
      date: "18-03-24"
    },{
      id: 3,
      title: "汇报|“与爱同行”大型康复评估指导义诊活动圆满结束！赢得患者满堂彩",
      date: "18-12-08"
    },{
      id: 4,
      title: "西安保济医院美容门诊开诊啦",
      date: "18-03-23"
    }]
  },
  mouseIn: false,
  scroDoctorLeftSize: 0,
  scroTime: 3000
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_PIC:
      return state.set('scroDoctorLeftSize', fromJS(action.value));
    case constants.MOUSE_IN:
      return state.set('mouseIn', fromJS(true));
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', fromJS(false));
    case constants.BACK_IMG:
      return state.set('scroDoctorLeftSize', fromJS(action.value));
    case constants.GO_IMG:
      return state.set('scroDoctorLeftSize', fromJS(action.value));
    default:
      return state;
  }
}
