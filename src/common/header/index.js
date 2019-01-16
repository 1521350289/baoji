import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
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

class Header extends PureComponent {

  getMenu() {
    const { mouseEnter, handleMouseEnter, menu, handleMouseLeave } = this.props;
    const menuList = [];
    menu.map((item) => {
      menuList.push(
        <MenuItem onMouseOver={() => handleMouseEnter(item.get('id'))} onMouseLeave={handleMouseLeave} key={item.get('id')} className={((item.get('id')===1) ? 'bottom-line' : '')}>
          <Link to={item.get('url')} className='menu-cn-title'>
              {item.get('title')}
              <span className='menu-en-title'>{item.get('en')}</span>
          </Link>
          {(mouseEnter === item.get('id')) ? this.getSelect(item.get('id'), item.get('select')) : ''}
        </MenuItem>
      );
      return menuList;
    })
    return (
      <ul className='menu'>
        {menuList}
      </ul>
    )
  }

  getSelect(id, item) {
    return (
      <Select>
        {
          item.map((item) => (
            <SelectItem key={item.get('id')}>
              <Link to={item.get('url')} className='select-a'>{item.get('name')}</Link>
            </SelectItem>
          ))
        }
      </Select>
    )
  }

  render() {
    const { headerImg } = this.props;

    return (
      <HeaderWrapper>
        <TopDiv>
          <Logo>
              <ImgDiv imgUrl={headerImg} />
          </Logo>
        </TopDiv>
        <MenuDiv>
          {this.getMenu()}
        </MenuDiv>
      </HeaderWrapper>
    )
  }

  componentDidMount() {
    this.props.initHeader();
  }

}

const mapStateToProps = (state) => {
  return ({
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    headerImg: state.getIn(['header', 'headerImg']),
    menu: state.getIn(['header', 'menu'])
  })
};

const mapDispathToProps = (dispatch) => {
  return {
    handleMouseEnter(id) {
      dispatch(actionCreators.mouseEnter(id));
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    initHeader() {
      dispatch(actionCreators.initHeaderAction());
    }
  }
};


export default connect(mapStateToProps, mapDispathToProps)(Header);
