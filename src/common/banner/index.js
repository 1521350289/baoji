import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  ScroDiv,
  ImgDiv,
  Button,
  ScrollPointer
} from './style';

class Banner extends PureComponent {

  render() {
    const { handleMouseOver, handleMouseLeave, mouseIn, scroImg, nowImgNum, handleChangeNum } = this.props;
    return (
      <ScroDiv onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <ImgDiv>
          {mouseIn ? <Button className='left-btn' onClick={
            () => {
              if (nowImgNum <= 1) {
                handleChangeNum(scroImg.size);
              }else {
                handleChangeNum(nowImgNum-1);
              }
            }
          }><i className="iconfont">&#xe7aa;</i></Button> : null}
            {
              scroImg.map((item, key) => {
                if (nowImgNum === key+1) {
                  return (
                    <a href={item.get('link')} className='link' key={item.get('id')}>
                      <img background-position='500px 0' alt='' className='img one' src={item.get('img')} />
                    </a>
                  );
                }else {
                  return null;
                }
              })
            }
            <div className='div-pointer'>
              <ScrollPointer>
                {
                  scroImg.map((item, key) => {
                    if (nowImgNum === key+1) {
                      return (
                        <li className='pointer' key={item.get('id')} onClick={() => {handleChangeNum(key + 1)}}></li>
                      )
                    }else {
                      return (
                        <li key={item.get('id')} onClick={() => {handleChangeNum(key + 1)}}></li>
                      )
                    }
                  })
                }
              </ScrollPointer>
            </div>
        {mouseIn ? <Button className='right-btn' onClick={
          () => {
            if (nowImgNum >= scroImg.size) {
              this.props.initImgNum();
            }else {
              handleChangeNum(nowImgNum+1);
            }
          }
        }><i className="iconfont">&#xe7ab;</i></Button> : null}
      </ImgDiv>
      </ScroDiv>
    )
  }

  componentDidMount() {
      this.timer = setInterval(() => this.scroNum(), this.props.scroTime);
  }

  scroNum() {
    const { nowImgNum, scroImg, mouseIn } = this.props;
    if (!mouseIn) {
      if (nowImgNum >= scroImg.size) {
        this.props.initImgNum();
      }else{
        this.props.scroNum(nowImgNum+1);
      }
    }else {
      return null;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

const mapStateToProps = (state) => {
  return ({
    mouseIn: state.getIn(['banner', 'mouseIn']),
    scroImg: state.getIn(['banner', 'scroImg']),
    scroTime: state.getIn(['banner', 'scroTime']),
    nowImgNum: state.getIn(['banner', 'nowImgNum']),
    isMouseInControlBtn: state.getIn(['banner', 'isMouseInControlBtn'])
  })
}

const mapDispatch = (dispatch) => {
  return {
    handleMouseOver() {
      dispatch(actionCreators.mouseIn(true));
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseIn(false));
    },
    scroNum(nowImgNum) {
      dispatch(actionCreators.scroNum(nowImgNum));
    },
    initImgNum() {
      dispatch(actionCreators.initImgNum());
    },
    handleChangeNum(num) {
      dispatch(actionCreators.changeNum(num));
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(Banner);
