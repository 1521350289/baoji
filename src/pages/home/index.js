import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Room from './components/Room';
import News from './components/News';
import {
  HomeWrapper,
  Title,
  NewsWrapper,
  LeftWrapper,
  Content,
  RightWrapper
 } from './style';

class Home extends PureComponent {

  render() {
    return (
      <HomeWrapper>
        <Room />
        <NewsWrapper>
          <Title>
            <b className='line'>&nbsp;</b>
            <span>
              新闻资讯
              <span>NEWS INFORMATION</span>
            </span>
          </Title>
          <Content>
              <LeftWrapper>
                <a href="#"></a>
              </LeftWrapper>
              <RightWrapper>
                <div className="recommend">
                  <h2><a href="/">第三期“与爱同行”康复评估指导义诊患者征集</a></h2>
                  <p>
                    西安莲湖保济医院充分利用本地康复名院名医的优势，再次携手空军军医大学(第四军医大学)唐都医院特举办第三期“与爱同行”大型康复评估指导义诊活动。...
                    <a href="/">[详情]</a>
                  </p>
                </div>
              </RightWrapper>
          </Content>
        </NewsWrapper>
      </HomeWrapper>
    )
  }

}


export default connect(null, null)(Home);
