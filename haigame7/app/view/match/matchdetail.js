'use strict';
/**
 * APP 赛事详情
 * @return {[SplashScreen Component]}
 * @author Drex
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

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/matchstyle';
import Header from '../common/headernav'; 
import Icon from 'react-native-vector-icons/Iconfont';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
     steamname:'',
     eteamname:'',
     money:0,
     }
    }
  componentDidMount(){
    this.setState({
      steamname:this.props.steamname,
      eteamname:this.props.eteamname,
      money:this.props.money,
    });
  }
  render() {
    return (
      <View>
        <Header screenTitle="赛事详情" iconName='share' navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View style={commonstyle.row}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}><Text style={commonstyle.cream}>{'结束时间'}</Text><Text style={commonstyle.red}>{'1小时前'}</Text></View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}><Text style={commonstyle.cream}>{'持续时间'}</Text><Text style={commonstyle.red}>{'25：00'}</Text></View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}><Text style={commonstyle.cream}>{'赛事规格'}</Text><Text style={commonstyle.red}>{'联赛'}</Text></View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}><Text style={commonstyle.cream}>{'比赛模式'}</Text><Text style={commonstyle.red}>{'BO3'}</Text></View>
          </View>
          <View>
            
          </View>
        </View>
      </View>
    );
  }
}