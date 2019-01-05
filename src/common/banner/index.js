import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScroDiv,
  ImgDiv,
  Button
} from './style';

class Banner extends Component {
  render() {
    return (
      <ScroDiv>
        <ImgDiv>
          <Button className='left-btn'><i className="iconfont">&#xe7aa;</i></Button>
            <a href='/' className='link'>
              <img alt='' className='img' src="http://bj.xabjyy.com/templets/baoji/images/7aaaa3108acd3e.jpg" />
            </a>
          <Button className='right-btn'><i className="iconfont">&#xe7ab;</i></Button>
        </ImgDiv>
      </ScroDiv>
    )
  }
}

const mapStateToProps = (state) => {
  return ({

  })
}

export default connect(mapStateToProps, null)(Banner);
