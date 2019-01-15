import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ShareWrapper,
  Title,
  ShareTxt
} from '../style';

class Share extends PureComponent {

  render() {

    return (
      <ShareWrapper>
        <Title className='sharetitle'>
          <b className='line'>&nbsp;</b>
          <span  className='ShareWrapper'>
            康复分享
            <span>REHABILITATION SHARING</span>
          </span>
        </Title>
        <ShareTxt>
          <p>我们的幸福，就是你能早点康复。我们的祈盼,就是你能永远安康。</p>
          <p>Our happiness is that you can recover soon. We hope, is that you can always well-being.</p>
        </ShareTxt>
      </ShareWrapper>
    )
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Share);
