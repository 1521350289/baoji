import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  RoomDiv,
  RoomWrapper
} from '../style';

class News extends PureComponent {

  render() {

    return (
      <div>News</div>
    )
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(News);
