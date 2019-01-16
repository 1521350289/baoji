import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Title,
  NewsWrapper,
  LeftWrapper,
  Content,
  RightWrapper,
  Dashed,
  NewsList,
  Button,
  Clear
} from '../style';

class News extends PureComponent {

  render() {

    return (
      <NewsWrapper>
        <Title>
          <b className='line'>&nbsp;</b>
          <span  className='NewsWrapper'>
            新闻资讯
            <span>NEWS INFORMATION</span>
          </span>
        </Title>
        <Content>
            <LeftWrapper>
              <Link to='#'></Link>
            </LeftWrapper>
            <RightWrapper>
              <div className="recommend">
                <h2><Link to='/'>第三期“与爱同行”康复评估指导义诊患者征集</Link></h2>
                <p>
                  西安莲湖保济医院充分利用本地康复名院名医的优势，再次携手空军军医大学(第四军医大学)唐都医院特举办第三期“与爱同行”大型康复评估指导义诊活动。...
                  <Link to="/">[详情]</Link>
                </p>
              </div>
              <Dashed />
              <NewsList>
                <li>
                  <span className='prefix'></span>
                  <Link to="/">西安保济医院＆唐都医院“与爱同行”免费康复评估指导患者征集</Link>
                  <span className='dateTime'>18-04-05</span>
                </li>
                <li>
                  <span className='prefix'></span>
                  <Link to="/">患者家属送来感谢信，为保济优秀的医疗团队点赞！</Link>
                  <span className='dateTime'>18-03-24</span>
                </li>
                <li>
                  <span className='prefix'></span>
                  <Link to="/">汇报|“与爱同行”大型康复评估指导义诊活动圆满结束！赢得患者满堂彩</Link>
                  <span className='dateTime'>18-12-08</span>
                </li>
                <li>
                  <span className='prefix'></span>
                  <Link to="/">西安保济医院美容门诊开诊啦</Link>
                  <span className='dateTime'>18-03-23</span>
                </li>
              </NewsList>
            </RightWrapper>
        </Content>
        <Clear />
        <Button><Link to="/">了解更多新闻资讯 →</Link></Button>
      </NewsWrapper>
    )
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(News);
