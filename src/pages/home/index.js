import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Room from './components/Room';
import News from './components/News';
import RoomShow from './components/RoomShow';
import Doctor from './components/Doctor';
import {
  HomeWrapper,
  Title,
  NewsWrapper,
  LeftWrapper,
  Content,
  RightWrapper,
  Dashed,
  NewsList
 } from './style';

class Home extends PureComponent {

  render() {
    return (
      <HomeWrapper>
        <Room />
        <News />
        <RoomShow />
        <Doctor />
      </HomeWrapper>
    )
  }

}


export default connect(null, null)(Home);
