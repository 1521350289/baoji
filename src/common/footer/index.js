import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  FooterWrapper,
  FooterBox,
  FooterMain,
  MainLeft,
  Logo,
  Clear,
  MainMid,
  Lqrcode,
  Rqrcode,
  Line,
  FollowList,
  ContactBox,
  MainRight,
  Title,
  List,
  ICPbox
} from './style';

class Footer extends PureComponent {
  render() {
    const { handleMouseIn, handleMouseLeave } = this.props;
    return (
      <FooterWrapper>
        <FooterBox>
          <FooterMain>
            <MainLeft>
              <Logo>
                <img src="http://www.xabjyy.com/templets/baoji/images/foot_logo.png" />
              </Logo>
              <Lqrcode>
                <img src="http://www.xabjyy.com/templets/baoji/images/qrcode_qjfcyy_fwh.jpg" />
                <h6>西安保济医院服务号</h6>
              </Lqrcode>
              <Rqrcode>
                <img src="http://www.xabjyy.com/templets/baoji/images/qrcode_qjfcyy_dyh.jpg" />
                <h6>西安保济医院订阅号</h6>
              </Rqrcode>
            </MainLeft>
            <MainMid>
                &nbsp;关注我们
              <span>follow us</span>
              <Line />
              <FollowList>
                <a href="/"></a>
                <a href="/" className='weixin' onMouseOver={handleMouseIn} onMouseLeave={handleMouseLeave}></a>
                {this.props.mouseIn?<div><img src="http://www.xabjyy.com/templets/baoji/images/qrcode_qjfcyy_dyh.jpg" /></div>:null}
              </FollowList>
              &nbsp;联系我们
              <span> contact us</span>
              <Line />
              <ContactBox>
                <a href="tel:02988633566"></a>
                <h2>
                  咨询电话 <br />
                  029-8863-3566 <br />
                  <br />
                  &nbsp;地址：中国 ▪ 西安丰庆路东段86号
                </h2>
              </ContactBox>
            </MainMid>
            <MainRight>
              <Title>
                &nbsp;联系我们
                <span> contact us</span>
              </Title>
              <List>
                <li><a href="/">网站首页</a></li>
                <li><a href="/">康复科</a></li>
                <li><a href="/">医院简介</a></li>
                <li><a href="/">美容科</a></li>
                <li><a href="/">先进设备</a></li>
                <li><a href="/">外科</a></li>
                <li><a href="/">康复科专家</a></li>
                <li><a href="/">入院指南</a></li>
                <li><a href="/">门诊指南</a></li>
                <li><a href="/">信息反馈</a></li>
              </List>
            </MainRight>
            <Clear />
          </FooterMain>
          <ICPbox>
            <div>
              Copyright © 2002-2017. 西安保济医院 版权所有  陕ICP备17019784号-1
              <br />
              本网站刊登的医院及产品各种信息、图片和资料均为西安莲湖保济医院版权所有，未经授权禁止下载使用。
              <a href="https://www.cnzz.com/stat/website.php?web_id=1273152554" target="_blank" title="站长统计">站长统计</a>
            </div>
          </ICPbox>
        </FooterBox>
      </FooterWrapper>
    )
  }
}

const mapState = (state) => {
  return ({
    mouseIn: state.getIn(['footer', 'mouseIn'])
  })
}

const mapDispath = (dispatch) => {
  return {
    handleMouseIn() {
      dispatch(actionCreators.mouseIn());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  }
}

export default connect(mapState, mapDispath)(Footer);
