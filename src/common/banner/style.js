import styled from 'styled-components';

export const ScroDiv = styled.div`
  width: 100%;
  height: 500px;
`

export const ImgDiv = styled.div`
  width: 100%;
  .left-btn {
    float: left;
    position: absolute;
    left: 40px;
    top: 432px;
    border-radius: 50%;
  }
  .right-btn {
    float: right;
    position: absolute;
    right: 40px;
    top: 432px;
    border-radius: 50%;
  }
  .link {
    height: 500px;
    display: block;
    cursor: pointer;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .iconfont {
    font-size: 35px;
  }
  .div-pointer {
    width: 100%;
    height: 20px;
    position: relative;
    top: -35px;
    text-align: center;
    z-index:10;
  }
`

export const Button = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: rgba(0,0,0,.2);
`

export const ScrollPointer = styled.ul`
  border-radius: 10px;
  display: inline-block;
  margin: 0;
  padding: 5px;
  border: 1px soild black;
  background-color: rgba(0,0,0,.2);
  li {
    float: left;
    margin: 0 3px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: rgba(255,255,255,.5);
    cursor: pointer;
  }
  .pointer {
    background-color: #fff;
  }
`
