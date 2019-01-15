import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ShareWrapper,
  Title,
  ShareTxt,
  ShareBox,
  ShareList,
  Clear,
  Button
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
        <ShareBox>
          <ShareList>
            <li>
              <a href="/">
                <img src="http://www.xabjyy.com/uploads/allimg/181208/1-1Q20P910220-L.jpg" />
                <h3><span>【康复分享】脊髓损伤的</span></h3>
                <p>脊髓损伤是由于各种原因引起的脊髓结构、功能损害，造成损伤水平以下正常运动、感觉、自主功能的障碍。脊髓损伤往往造成不同程度的四肢瘫或截瘫，是一种严重致残性的创伤。
                  据调查，2002年北京地区脊髓损伤发病率为56/百万；最常见的致伤原因是高处坠落，其...</p>
              </a>
            </li>

            <li>
              <a href="/">
                <img src="http://www.xabjyy.com/uploads/180714/4-1PG4153612503.jpg" />
                <h3><span>小创伤,大温暖:你的健康</span></h3>
                <p>　　能够为患者解除痛苦并受到患者的肯定，永远是西安保济医院所有医务人员砥砺前行的动力之源!医生远远不止是一种职业的称谓，良医必然要用尽一生的忠诚，去治愈、帮助、安慰!那些笃定善良的医者、患者，终将会被温柔以待!
                  ...</p>
              </a>
            </li>

            <li className="th">
              <a href="/">
                <img src="http://www.xabjyy.com/uploads/180714/4-1PG4153F63B.jpg" />
                <h3><span>遇见你是最美的“相遇”</span></h3>
                <p>　　在保济康复科，每天都发生着许多让人感动的故事……你相信奇迹吗?今天，小编要讲的，是一个爱让奇迹发生的康复故事。2018年5月16日，保济医院的康复大厅又多了两面红艳艳的锦旗。8年前的一场意外，让平时活泼开朗、热情善良的美姑娘张影陷入截瘫的魔窟之...</p>
              </a>
            </li>
          </ShareList>
        </ShareBox>
        <Clear />
        <Button className='share-button'><a href='/'>了解更多康复知识 →</a></Button>
      </ShareWrapper>
    )
  }

}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Share);
