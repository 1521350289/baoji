import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  RoomDiv,
  RoomWrapper
} from '../style';

class Room extends PureComponent {

  render() {

    return (
      <RoomWrapper>
        <div className='roombox'>
          {
            this.props.roomList.map((item) => (
              <Link to={item.get('link')} key={item.get('id')}>
                <RoomDiv>
                  <img src={item.get('imgUrl')} alt=''/>
                </RoomDiv>
              </Link>
            ))
          }
        </div>
      </RoomWrapper>
    )
  }

}

const mapState = (state) => ({
  roomList: state.getIn(['home', 'roomList'])
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Room);
