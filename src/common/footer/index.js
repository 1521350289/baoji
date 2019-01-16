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
  ContactBox
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
              </ContactBox>
            </MainMid>
            <Clear />
          </FooterMain>
        </FooterBox>
      </FooterWrapper>
    )
  }
}

export default Footer;
