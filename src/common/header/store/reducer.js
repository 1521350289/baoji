import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  mouseEnter: false,
  headerImg: 'http://www.xabjyy.com/templets/baoji/images/logo20171026.png',
  menu: [{
    id: 1,
    title: '网站首页',
    en: 'HOME',
    select: [],
  },{
    id: 2,
    title: '医院简介',
    en: 'ABOUT US',
    select: [{
      name: '医院简介',
      url: ''
    },{
      name: '医院环境',
      url: ''
    },{
      name: '先进设备',
      url: ''
    }]
  },{
    id: 3,
    title: '特色科室',
    en: 'DEPARTMENT',
    select: [{
      name: '康复科',
      url: ''
    },{
      name: '美容科',
      url: ''
    },{
      name: '妇科',
      url: ''
    },{
      name: '中医科',
      url: ''
    },{
      name: '内科',
      url: ''
    },{
      name: '外科',
      url: ''
    }]
  },{
    id: 4,
    title: '专家团队',
    en: 'EXPERT TEAM',
    select: []
  },{
    id: 5,
    title: '服务指南',
    en: 'SERVICE INFORMAYION',
    select: [{
      name: '门诊指南',
      url: ''
    },{
      name: '入院指南',
      url: ''
    },{
      name: '医保须知',
      url: ''
    },{
      name: '医院地址',
      url: ''
    }]
  },{
    id: 6,
    title: '社会公益',
    en: 'SOCIAL WELFARE',
    select: []
  }]
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.MOUSE_ENTER:
      return state.set('mouseEnter', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseLeave', false);
    default:
      return state;
  }
}
