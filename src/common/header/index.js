import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  TopDiv,
  ImgDiv,
  MenuDiv,
  MenuItem,
  Select,
  SelectItem
} from './style';

class Header extends Component {
  getMenu() {
    const { handleMouseEnter, menu, handleMouseLeave } = this.props;
    const menuList = [];
    menu.map((item) => {
      menuList.push(
        <MenuItem onMouseOver={() => handleMouseEnter(item.get('id'))} onMouseLeave={handleMouseLeave} key={item.get('id')} className={((item.get('id')===1) ? 'bottom-line' : '')}>
          <a className='menu-cn-title' href='/'>
            {item.get('title')}
            <span className='menu-en-title'>{item.get('en')}</span>
          </a>
          {this.getSelect(item.get('id'), item.get('select'))}
        </MenuItem>
      );
    })
    return (
      <ul className='menu'>
        {menuList}
      </ul>
    )
  }

  getSelect(id, item) {
    const { mouseEnter, handleMouseEnter } = this.props;
    const selectList = [];
    if (mouseEnter === id) {
      item.map((item) => {
        selectList.push(
          <SelectItem key={item.get('id')}>
            <a href={item.get('url')} className='select-a'>{item.get('name')}</a>
          </SelectItem>
        )
      });
      return (
        <Select onMouseOver={handleMouseEnter(id)}>
          {selectList}
        </Select>
      )
    }else {
      return null;
    }
  }

  render() {
    const { headerImg } = this.props;


    return (
      <HeaderWrapper>
        <TopDiv>
          <Logo>
              <ImgDiv imgUrl={headerImg}>
              </ImgDiv>
          </Logo>
        </TopDiv>
        <MenuDiv>
          {() => {this.getMenu()}}
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
    handleMouseEnter(id) {
      dispatch(actionCreators.mouseEnter(id));
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);
