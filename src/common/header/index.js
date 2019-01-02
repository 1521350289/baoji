import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  LogoDiv
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderWrapper>
        <LogoDiv>
          <Logo />
        </LogoDiv>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    headerImg: state.getIn(['header', 'headerImg']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);
