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
          <Button className='left-btn' />
            <a href='/' className='link'>
              <img className='img' src="http://bj.xabjyy.com/templets/baoji/images/7aaaa3108acd3e.jpg" className='img' />
            </a>
          <Button className='right-btn' />
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
