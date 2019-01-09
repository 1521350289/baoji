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
  width: 100%;
  height: 70px;
  margin: 40px 0 30px 0;
  border: 1px solid black;
  text-align: center;
  font-size: 26px;
  color: #494949;
  line-height: 70px;
  .title {
    height: 100%;
    width: 1190px;
    border: 1px solid red;
    margin: auto;
  }
  .left {
    height: 100%;
    width: 480px;
    border: 1px solid green;
    line-height: 70px;
  }
`
