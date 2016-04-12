'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
import Button from 'react-native-button';
import Header from '../common/headernav';
import Icon from 'react-native-vector-icons/Iconfont';

export default class extends React.Component {
  /**
   * @param role 队长 captain | 队员：teamuser | 非本队成员: user
   * @return {[type]} [description]
   */
  constructor() {
    super();
    this.state = {
        navigator: undefined,
  defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
             role: 'user',
    }
  }
  componentWillMount(){
      this.state = {
        navigator: this.props.navigator,
      }
  }
  render() {
    return(
      <View>
        <Header screenTitle='个人信息' isPop={true} navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <View style={styles.headportraitv}><Icon name="certified" size={15} color={'#484848'} style={commonstyle.iconnobg}/></View>
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>我的名字</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  1234  '}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  1234  '}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>个性签名:生命不息电竞不止生命不息电竞不止生命不息电竞不止</Text>
              </View>
            </View>
          </Image>

          <View style={styles.listblock}>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>性别</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>男</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>地区</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>北京-西城区</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>擅长位置</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>辅助</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>注册时间</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>2016/01/23</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>擅长英雄</Text></View>
              <View style={[styles.listviewright, styles.listviewhero]}>
                <Image style={styles.listviewheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.listviewheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.listviewheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              </View>
            </View>
          </View>

          <TouchableHighlight style = {styles.btn} underlayColor = {'#FF0000'} >
            <Text style = {styles.btnfont}> {'移出战队' } </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
