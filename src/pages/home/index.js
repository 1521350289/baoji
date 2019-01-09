import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Room from './components/Room';
import {
  RoomWrapper
} from './style';


class Home extends PureComponent {

  render() {
    return (
      <RoomWrapper>
        <Room />
      </RoomWrapper>
    )
  }
  
}


export default connect(null, null)(Home);
