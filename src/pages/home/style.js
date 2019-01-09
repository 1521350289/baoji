import styled from 'styled-components';

export const RoomWrapper = styled.div`
  width: 100%;
  height: 118px;
  padding: 20px 0;
  background: #F1F1F1;
  float: left;
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
