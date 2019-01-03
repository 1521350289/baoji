import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  LogoDiv,
  MenuDiv,
  MenuItem,
  Select,
  SelectItem
} from './style';

class Header extends Component {

  render() {
    const { headerImg, menu, handleMouseEnter, handleMouseLeave } = this.props;
    
    return (
      <HeaderWrapper>
        <LogoDiv>
          <Logo>
            <img className='logo' src={headerImg} alt='' />
          </Logo>
        </LogoDiv>
        <MenuDiv>
          <ul className='menu'>
            {
              menu.map((item) => {
                return (
                  <MenuItem onMouseEnter={() => handleMouseEnter(item.get('id'))} onMouseLeave={() => handleMouseLeave(item.get('id'))} key={item.get('id')} className={((item.get('id')===1) ? 'bottom-line' : '')}>
                    <a className='menu-cn-title' href=''>
                      {item.get('title')}
                      <span className='menu-en-title'>{item.get('en')}</span>
                    </a>
                    <Select>
                      <SelectItem>
                        <a>医院简介</a>
                      </SelectItem>
                    </Select>
                  </MenuItem>
                )
              })
            }

          </ul>
        </MenuDiv>
      </HeaderWrapper>
    )
  }
}

// const mapStateToProps = (state) =>  ({
//     headerImg: state.getIn(['header', 'headerImg'])
// });

const mapStateToProps = (state) => {
  return ({
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    headerImg: state.getIn(['header', 'headerImg']),
    menu: state.getIn(['header', 'menu'])
  })
}

const mapDispathToProps = (dispatch) => {
  return {
    handleMouseEnter(item) {
      console.log(item);
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(item) {
      dispatch(actionCreators.mouseLeave());
    }
  }
}


export default connect(mapStateToProps)(Header);
