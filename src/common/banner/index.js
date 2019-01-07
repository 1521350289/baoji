import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  ScroDiv,
  ImgDiv,
  Button
} from './style';

class Banner extends PureComponent {

  changeNum() {
    const { nowImg } = this.props;
    console.log(nowImg);
    //this.props.changeNum(nowImg);
    return true;
  }

  render() {
    const { handleMouseOver, handleMouseLeave, mouseIn, scroImg } = this.props;
    return (
      <ScroDiv onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <ImgDiv>
          {mouseIn ? <Button className='left-btn'><i className="iconfont">&#xe7aa;</i></Button> : null}
            {
              scroImg.map((item) => {
                return (
                  <a href={item.get('link')} className='link' key={item.get('id')}>
                    <img background-position='500px 0' alt='' className='img one' src={item.get('img')} />
                  </a>
                );
              })
            }
        {mouseIn ? <Button className='right-btn'><i className="iconfont">&#xe7ab;</i></Button> : null}
      </ImgDiv>
      </ScroDiv>
    )
  }

  componentDidMount() {
    this.timer = setInterval(this.changeNum,this.props.scroTime);
  }

}

const mapStateToProps = (state) => {
  return ({
    mouseIn: state.getIn(['banner', 'mouseIn']),
    scroImg: state.getIn(['banner', 'scroImg']),
    scroTime: state.getIn(['banner', 'scroTime']),
    nowImg: state.getIn(['banner', 'nowImg'])
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
    changeNum(nowImg) {
      dispatch(actionCreators.changeNum(nowImg));
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(Banner);
