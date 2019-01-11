import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  RoomShowWrapper,
  Title,
  Content,
  ShowList,
  Button,
  Clear
} from '../style';

class RoomShow extends PureComponent {

  render() {

    return (
      <RoomShowWrapper>
        <Title>
          <b className='line'>&nbsp;</b>
          <span  className='RoomShowWrapper'>
            科室分布
            <span>DEPARTMENT SHOW</span>
          </span>
        </Title>
        <Content>
          <ShowList>
            <li className='item'>
              <div className="item-top">
                <div className="plan">
                  <a>
                    <img src="http://bj.xabjyy.com/templets/baoji/images/kfk171105.jpg" />
                  </a>
                </div>
                <div className='txt'>
                  <ul>
                    <li><a href='/'>言语吞咽障碍</a></li>
                    <li><a href='/'>康复评定</a></li>
                    <li><a href='/'>物理因子</a></li>
                    <li><a href='/'>心理康复</a></li>
                  </ul>
                </div>
                <div className='more'><a href='/'>MORE</a></div>
              </div>
            </li>

            <li className='item'>
              <div className="item-top">
                <div className="plan">
                  <a>
                    <img src="http://bj.xabjyy.com/templets/baoji/images/kfk171105.jpg" />
                  </a>
                </div>
                <div className='txt'>
                  <ul>
                    <li><a href='/'>言语吞咽障碍</a></li>
                    <li><a href='/'>康复评定</a></li>
                    <li><a href='/'>物理因子</a></li>
                    <li><a href='/'>心理康复</a></li>
                  </ul>
                </div>
                <div className='more'><a href='/'>MORE</a></div>
              </div>
            </li>

            <li className='item'>
              <div className="item-top">
                <div className="plan">
                  <a>
                    <img src="http://bj.xabjyy.com/templets/baoji/images/kfk171105.jpg" />
                  </a>
                </div>
                <div className='txt'>
                  <ul>
                    <li><a href='/'>言语吞咽障碍</a></li>
                    <li><a href='/'>康复评定</a></li>
                    <li><a href='/'>物理因子</a></li>
                    <li><a href='/'>心理康复</a></li>
                  </ul>
                </div>
                <div className='more'><a href='/'>MORE</a></div>
              </div>
            </li>

            <li className='item'>
              <div className="item-top">
                <div className="plan">
                  <a>
                    <img src="http://bj.xabjyy.com/templets/baoji/images/kfk171105.jpg" />
                  </a>
                </div>
                <div className='txt'>
                  <ul>
                    <li><a href='/'>言语吞咽障碍</a></li>
                    <li><a href='/'>康复评定</a></li>
                    <li><a href='/'>物理因子</a></li>
                    <li><a href='/'>心理康复</a></li>
                  </ul>
                </div>
                <div className='more'><a href='/'>MORE</a></div>
              </div>
            </li>

            <li className='item'>
              <div className="item-top">
                <div className="plan">
                  <a>
                    <img src="http://bj.xabjyy.com/templets/baoji/images/kfk171105.jpg" />
                  </a>
                </div>
                <div className='txt'>
                  <ul>
                    <li><a href='/'>言语吞咽障碍</a></li>
                    <li><a href='/'>康复评定</a></li>
                    <li><a href='/'>物理因子</a></li>
                    <li><a href='/'>心理康复</a></li>
                  </ul>
                </div>
                <div className='more'><a href='/'>MORE</a></div>
              </div>
            </li>

            <li className='item'>
              <div className="item-top">
                <div className="plan">
                  <a>
                    <img src="http://bj.xabjyy.com/templets/baoji/images/kfk171105.jpg" />
                  </a>
                </div>
                <div className='txt'>
                  <ul>
                    <li><a href='/'>言语吞咽障碍</a></li>
                    <li><a href='/'>康复评定</a></li>
                    <li><a href='/'>物理因子</a></li>
                    <li><a href='/'>心理康复</a></li>
                  </ul>
                </div>
                <div className='more'><a href='/'>MORE</a></div>
              </div>
            </li>
          </ShowList>
        </Content>
        <Clear />
        <Button className='room-button'><a href='/'>了解更多科室详情 →</a></Button>
      </RoomShowWrapper>
    )
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(RoomShow);
