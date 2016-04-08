'use strict';
/**
 * 团队排行组件
 * @return {[teamranklist Component]}
 * @author aran.hu
 */

var Icon = require('react-native-vector-icons/Iconfont');

import React, {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Navigator,
    Component,
    TouchableOpacity,
    TouchableHighlight,
    } from 'react-native';

//引用样式文件
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/fightstyle';
import FightDetail from '../user/fightdetail';
var Util = require('../common/util');


var UserFightList = React.createClass({
  getInitialState() {
    return {
      rowData: this.props.rowData,
      navigator:this.props.navigator,
      _onPress: null,
    }
  },
  componentDidMount(){
  },
  gotoRoute(params) {
   if (params.name == 'fightdetail') {
       if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != params.name) {

           this.props.navigator.push({ name: params.name, component: FightDetail, params:{...this.props},sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
       }
   } else if (params.name == 'playerinfo') {
     if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != params.name) {
     }
   }
 },
 rendercurrent(){
   if(this.state.rowData.CurrentState=='已认怂'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnbordergray]} >
         <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }
   else{
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnborderred]} onPress = {this.gotoRoute.bind(this,{"name":"fightdetail"})} >
         <Text style={[commonstyle.red, commonstyle.fontsize12]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }

 },
  render: function() {
    var fightcurrentstate = this.rendercurrent();
    return(
      <View>
        <View style={[commonstyle.row, styles.fightlist]}>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{this.props.rowData.STeamName}</Text>
          </View>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Text style={[commonstyle.blue, commonstyle.fontsize22]}>{'VS'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.fightlistdate]}>{this.props.rowData.StateTimeStr}</Text>
            {fightcurrentstate}
          </View>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{this.props.rowData.ETeamName}</Text>
          </View>
        </View>
      </View>
    );
  }
});

 module.exports = UserFightList;
