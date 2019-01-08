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
    const { handleMouseOver, handleMouseLeave, mouseIn, scroImg, nowImgNum, changeNum } = this.props;
    return (
      <ScroDiv onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <ImgDiv>
          {mouseIn ? <Button className='left-btn'><i className="iconfont">&#xe7aa;</i></Button> : null}
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
                        <li className='pointer' key={item.get('id')} onClick={changeNum(key)}></li>
                      )
                    }else {
                      return (
                        <li key={item.get('id')} onClick={changeNum(key)}></li>
                      )
                    }
                  })
                }
              </ScrollPointer>
            </div>
        {mouseIn ? <Button className='right-btn'><i className="iconfont">&#xe7ab;</i></Button> : null}
      </ImgDiv>
      </ScroDiv>
    )
  }

  componentDidMount() {
      this.timer = setInterval(() => this.changeNum(),this.props.scroTime);
  }

  changeNum(flag) {
    console.log(flag);
    const { nowImgNum, scroImg, mouseIn } = this.props;
    if (!flag && !mouseIn) {
      console.log(nowImgNum, scroImg.size);
      if (nowImgNum >= scroImg.size) {
        console.log(123);
        this.props.initImgNum();
      }else{
        console.log(456);
        this.props.changeNum(nowImgNum+1);
      }
    }else {

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
    nowImgNum: state.getIn(['banner', 'nowImgNum'])
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
    changeNum(nowImgNum) {
      dispatch(actionCreators.changeNum(nowImgNum));
    },
    initImgNum() {
      dispatch(actionCreators.initImgNum());
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(Banner);
