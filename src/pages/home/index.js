import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Room from './components/Room';
import News from './components/News';
import {
  HomeWrapper,
  Title
 } from './style';

class Home extends PureComponent {

  render() {
    return (
      <HomeWrapper>
        <Room />
        <Title>
          <div className='title'>
            <div className='left'><b></b></div>
            <div className='center'></div>
            <div className='right'><b></b></div>
          </div>
        </Title>
      </HomeWrapper>
    )
  }

}


export default connect(null, null)(Home);
