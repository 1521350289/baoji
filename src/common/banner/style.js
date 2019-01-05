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
`

export const Button = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: rgba(0,0,0,.2);
`
