'use strict';
/**
 * APPs我的赛事
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */

import React, {
    View,
    Text,
    Image,
    StyleSheet,
    Component,
    TouchableOpacity,
    Navigator,
    ScrollView,
    TouchableHighlight,
    } from 'react-native';
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navbar: 0,
      data:{
          subnavbar:1,
          subnavbarname:'热度',
      },
    }
  }

  rendertaskList(){
    return(
      <View>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8}>
          <View style={styles.listviewiconleft}>
            <Icon name="modify" size={30} color={'#D31B25'} />
          </View>
          <Text style={styles.listviewtext}>{'完善资料  '}<Text style={commonstyle.red}>{'+50氦金'}</Text></Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8}>
          <View style={styles.listviewiconleft}>
            <Icon name="task" size={30} color={'#D31B25'} />
          </View>
          <Text style={styles.listviewtext}>{'通过认证  '}<Text style={commonstyle.red}>{'+50氦金'}</Text></Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    let tasklist = this.rendertaskList();
    return (
      <View>
        <Header screenTitle="我的任务"   navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          {tasklist}
        </View>
      </View>
    );
  }
}