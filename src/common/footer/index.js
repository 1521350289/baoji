import React,{ PureComponent } from 'react';
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
  List
} from './style';

class Footer extends PureComponent {
  render() {
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
                <a href="/" className='weixin'></a>
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
        </FooterBox>
      </FooterWrapper>
    )
  }
}

export default Footer;
