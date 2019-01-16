import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  DoctorWrapper,
  Title,
  TeamTxt,
  Team,
  TeamBox,
  TeamList,
  LeftPointer,
  RightPointer,
  Clear
} from '../style';

class Doctor extends PureComponent {

  render() {
    const { scroDoctorLeftSize, handleMouseIn, handleMouseLeave, handleBackImg, handleGoImg } =this.props;

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
          <LeftPointer onClick={()=>{
              if (this.props.scroDoctorLeftSize<=0) {
                handleBackImg(this.props.doctorList.size*186-1116);
              }else{
                handleBackImg(this.props.scroDoctorLeftSize-186);
              }
            }} onMouseOver={handleMouseIn} onMouseLeave={handleMouseLeave}>
            <i className="iconfont">&#xe605;</i>
          </LeftPointer>
          <div className='team-box'>
            <TeamBox>
              <TeamList  left={this.props.scroDoctorLeftSize} onMouseOver={handleMouseIn} onMouseLeave={handleMouseLeave}>
                {
                  this.props.doctorList.map((item) => (
                    <li key={item.get('id')}>
                      <div className='doctor'>
                        <div className='doctor-img'>
                          <img src={item.get('img')} />
                        </div>
                        <div className='doctor-name'>
                          <p>{item.get('name')}</p>
                          <span>{item.get('job')}</span>
                        </div>
                        <div className='doctor-years'>
                          <p>
                            科  室：
                            <span>{item.get('room')}</span>
                          </p>
                        </div>
                        <div className='doctor-file'>
                          <Link to={item.get('detail')}>点击查看详情</Link>
                        </div>
                      </div>
                    </li>
                  ))
                }

              </TeamList>
            </TeamBox>
          </div>
          <RightPointer onClick={()=>{
              if (this.props.scroDoctorLeftSize>=(this.props.doctorList.size*186-1116)) {
                handleGoImg(0);
              }else {
                handleGoImg(this.props.scroDoctorLeftSize+186);
              }
            }}  onMouseOver={handleMouseIn} onMouseLeave={handleMouseLeave}>
            <i className="iconfont">&#xe64a;</i>
          </RightPointer>
        </Team>
        <Clear />
      </DoctorWrapper>
    )
  }

  componentDidMount() {
    this.timer = setInterval(() => this.scroNum(), this.props.scroTime);
  }

  scroNum() {
    if (!this.props.mouseIn) {
      if (this.props.scroDoctorLeftSize>=(this.props.doctorList.size*186-1116)) {
        this.props.changePic(0);
      }else {
        this.props.changePic(this.props.scroDoctorLeftSize+186);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

const mapState = (state) => ({
  scroDoctorLeftSize: state.getIn(['home','scroDoctorLeftSize']),
  scroTime: state.getIn(['home', 'scroTime']),
  doctorList: state.getIn(['home', 'doctorList']),
  mouseIn: state.getIn(['home', 'mouseIn'])
})

const mapDispatch = (dispatch) => {
  return {
    changePic(value) {
      dispatch(actionCreators.changePic(value));
    },
    handleMouseIn() {
      dispatch(actionCreators.mouseIn());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleBackImg(value) {
      dispatch(actionCreators.backImg(value));
    },
    handleGoImg(value) {
      dispatch(actionCreators.goImg(value));
    }
  }
}

export default connect(mapState, mapDispatch)(Doctor);
