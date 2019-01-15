import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  HospitalStyleWrapper,
  Title,
  StyleBox,
  BoxLeft,
  BoxRight,
  Clear,
  Button
} from '../style';

class HospitalStyle extends PureComponent {

  render() {

    return (
      <HospitalStyleWrapper>
        <Title>
          <b className='line'>&nbsp;</b>
          <span  className='HospitalStyleWrapper'>
            医院环境
            <span>HOSPITAL ENVIRONMENT</span>
          </span>
        </Title>
        <StyleBox>
          <BoxLeft>
            <img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_010.jpg" />
          </BoxLeft>
          <BoxRight>
            <li><img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_020.jpg" /></li>
            <li><img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_030.jpg" /></li>
            <li className="ref"><img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_040.jpg" /></li>
            <li><img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_060.jpg" /></li>
            <li><img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_070.jpg" /></li>
            <li className="ref"><img src="http://www.xabjyy.com/templets/baoji/images/baojihuangjing_080.jpg" /></li>
          </BoxRight>
        </StyleBox>
        <Clear />
        <Button className='share-button'><a href='/'>预览了解更多环境 →</a></Button>
      </HospitalStyleWrapper>
    )
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(HospitalStyle);
