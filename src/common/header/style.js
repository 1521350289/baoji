import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 200px;
`

export const LogoDiv = styled.div`
  width: 100%;
  height: 110px;
  background-color: #A68461;
`
//291.5
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 5px;
  display: block;
  width: 1000px;
  height: 90.75px;
  background-size: contain;
  .logo {
    width: 1000px;
  }
`

export const MenuDiv = styled.div`
  height: 90px;
  width: 100%;
  text-align: center;
  .menu {
    text-align: center;
    display: flex;
    width:1190px;
    height: 90px;
    margin: 0 auto;
    justify-content: center;
  }
  .bottom-line {
    border-bottom: 3px #A68461 solid;
  }
`

export const MenuItem = styled.li`
  width: 16.6%;
  display: inline;
  float: left;
  .menu-cn-title {
    text-decoration: none;
    color: #494949;
    display: block;
    height:75px;
    line-height: 30px;
    padding-top: 15px;
    align: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #A68461;
    }
  }
  .menu-en-title {
    text-align: center;
    display: block;
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    color: #989898;
    font-weight: normal;
  }
`

export const Select = styled.ul`
  width: 100%;
`

export const SelectItem = styled.li`
  height: 50px;
  line-height: 50px;
  border-bottom: 1px #e6e4e3 solid;
`
