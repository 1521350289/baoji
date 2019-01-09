import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Room from './components/Room';


class Home extends PureComponent {

  render() {
    return (
      <Room />
    )
  }

}


export default connect(null, null)(Home);
