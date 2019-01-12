import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  DoctorWrapper,
  Title,
  TeamTxt,
  Team,
  TeamList,
  LeftPointer
} from '../style';

class Doctor extends PureComponent {

  render() {

    return (
      <DoctorWrapper>
        <Title>
          <b className='line'>&nbsp;</b>
          <span  className='DoctorWrapper'>
            专家教授
            <span>EXPERT PROFESSOR</span>
          </span>
        </Title>
        <TeamTxt>
          <p>我决心竭尽全力除人类之病痛，助健康之完美，维护医术的圣洁和荣誉。救死扶伤，不辞艰辛，执着追求，为祖国医药卫生事业的发展和人类身心健康奋斗终生！</p>
          <p>With our core values of hoesty, hard work, and trust. Our goal is to have these characteristics influence everything we do in business and in life. We sincerely enjoy the work we do, and our clients garner the benefits.</p>
        </TeamTxt>
        <Team>
          <LeftPointer></LeftPointer>
          <TeamList>
            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>

            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>

            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>

            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>

            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>

            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>

            <li>
              <div className='doctor'>
                <div className='doctor-img'>
                  <img src="http://www.xabjyy.com/uploads/allimg/171215/3-1G215095204239.jpg" />
                </div>
                <div className='doctor-name'>
                  <p>吴胜利</p>
                  <span>全科医师</span>
                </div>
                <div className='doctor-years'>
                  <p>
                    科  室：
                    <span>专家团队</span>
                  </p>
                </div>
                <div className='doctor-file'>
                  <a href='/'>点击查看详情</a>
                </div>
              </div>
            </li>
          </TeamList>
        </Team>
      </DoctorWrapper>
    )
  }

}

const mapState = (state) => ({
  roomList: state.getIn(['home', 'roomList'])
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Doctor);
