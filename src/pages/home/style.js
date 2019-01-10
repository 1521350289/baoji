import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
`

export const RoomWrapper = styled.div`
  width: 100%;
  height: 118px;
  padding: 20px 0;
  background: #F1F1F1;
  .roombox {
    padding: 0 0 0 27px;
    width: 870px;
    height: 100%;
    margin: auto;
  }
`

export const NewsWrapper = styled.div`
  width: 100%;
  background: #FFFBF7;
  margin: 2% 0 0 0;
`

export const RoomDiv = styled.div`
  display: block;
  width: 118px;
  height: 100%;
  margin: 0 27px 0 0;
  float: left;
  :hover {
    opacity: 0.75;
    mix-blend-mode: darken;
  }
`

export const Title = styled.div`
  width: 1190px;
  height: 70px;
  text-align: center;
  margin: auto;
  color: #494949;
  background-color: #FFFBF7;
  padding: 25px 0 40px 0;
  .line {
    position: relative;
    display: block;
    text-align: center;
    margin: 0 auto;
    width: 1190px;
    height: 1px;
    background: #4E4E4E;
    left: 0;
    top: 55%;
  }
  span {
    position: relative;
    display: block;
    margin: auto;
    background: #FFFBF7;
    width: 142px;
    height: 100%;
    font-size: 26px;
    line-height: 35px;
    span {
      height: 30px;
      font-size: 13px;
      line-height: 30px;
      padding-top: 5px;
    }
  }
`

export const Content = styled.div`
  width: 1190px;
  margin: auto;
`

export const LeftWrapper = styled.div`
  width: 40%;
  height: 300px;
  background: url('http://www.xabjyy.com/templets/baoji/images/yyhj20171025.jpg');
  background-size: contain;
  float: left;
  a {
    display: block;
    width: 100%;
    height: 300px;
  }
`

export const RightWrapper = styled.div`
  width: 60%;
  height: 268px;
  float: right;
  .recommend {
    width: 93%;
    margin-left: 7%;
    margin-bottom: 15px;
    p　{
      text-indent: 2em;
      line-height: 26px;
      font-size: 14px;
    }
    h2 {
      font-weight: bold;
      font-size: 18px;
      padding-bottom: 10px;
      line-height: 26px;
    }
    a {
      color: #A68461;
      text-decoration: none;
      font-size: 100%;
    }
  }
`

export const Dashed = styled.div`
  font-size: 14px;
  color: #4e4e4e;
  line-height: 26px;
  width: 93%;
  border-bottom: 1px #5f5f5f dashed;
  height: 1px;
  margin: 15px 0 15px 7%;
`
