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
      fightstate:this.props.fightstate,
      userData:this.props.userdata,
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
 formatDate(strTime){
   if(strTime!=''||strTime!=undefined){

     return strTime.substring(0,10);
   }else{
     return '';
   }
 },
 rendercurrent(){
   if(this.props.rowData.CurrentState=='已认怂'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnbordergray]} >
         <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }
   else if(this.props.rowData.CurrentState=='发起挑战'&&this.props.fightstate=='send'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnbordergray]}  >
         <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'等待回复'}</Text>
       </TouchableOpacity>
     );
   }else if(this.props.rowData.CurrentState=='已拒绝'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnbordergray]}  >
         <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }
   else if(this.props.rowData.CurrentState=='挑战成功'&&this.props.fightstate=='send'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnborderred]}  >
         <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'+'}{this.props.rowData.Money}{'氦金'}</Text>
       </TouchableOpacity>
     );
   }
   else if(this.props.rowData.CurrentState=='挑战成功'&&this.props.fightstate=='receive'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnbordergray]}  >
         <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'-'}{this.props.rowData.Money}{'氦金'}</Text>
       </TouchableOpacity>
     );
   }else if(this.props.rowData.CurrentState=='守擂成功'&&this.props.fightstate=='send'){
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnbordergray]}  >
         <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'-'}{this.props.rowData.Money}{'氦金'}</Text>
       </TouchableOpacity>
     );
   }else if(this.props.rowData.CurrentState=='守擂成功'&&this.props.fightstate=='receive'){
     <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnborderred]}  >
       <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'+'}{this.props.rowData.Money}{'氦金'}</Text>
     </TouchableOpacity>
   }
   else{
     return(
       <TouchableOpacity style={[styles.fightlistbtn,commonstyle.btnborderred]} onPress = {this.gotoRoute.bind(this,{"name":"fightdetail"})} >
         <Text style={[commonstyle.red, commonstyle.fontsize12]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }

 },
 renderresulttitle(){
   var fightcurrentstate = this.rendercurrent();
   var formatDate = this.formatDate(this.props.rowData.StateTimeStr);
  if(this.props.rowData.CurrentState=='挑战成功'){
    return(
      <View style={[commonstyle.col1, commonstyle.viewcenter]}>
      <View style={commonstyle.row}>
       <View style={[commonstyle.btnborderorange, styles.fightlisttexticon]}>
        <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
       </View>
        <Text style={[commonstyle.blue, commonstyle.fontsize22]}>{'VS'}</Text>
        <View style={[commonstyle.btnbordercyan, styles.fightlisttexticon]}>
          <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
        </View>
      </View>
        <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.fightlistdate]}>{formatDate}</Text>
        {fightcurrentstate}
      </View>
    );
  }else if(this.props.rowData.CurrentState=='守擂成功'){
    return(
      <View style={[commonstyle.col1, commonstyle.viewcenter]}>
      <View style={commonstyle.row}>
      <View style={[commonstyle.btnbordercyan, styles.fightlisttexticon]}>
        <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
      </View>
        <Text style={[commonstyle.blue, commonstyle.fontsize22]}>{'VS'}</Text>
        <View style={[commonstyle.btnborderorange, styles.fightlisttexticon]}>
         <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
        </View>
      </View>
        <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.fightlistdate]}>{formatDate}</Text>
        {fightcurrentstate}
      </View>
    );
  }else{
    return(
      <View style={[commonstyle.col1, commonstyle.viewcenter]}>
        <Text style={[commonstyle.blue, commonstyle.fontsize22]}>{'VS'}</Text>
        <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.fightlistdate]}>{formatDate}</Text>
        {fightcurrentstate}
      </View>
    );
  }
 },
  render: function() {
    var fightresulttitle = this.renderresulttitle();
    return(
      <View>
        <View style={[commonstyle.row, styles.fightlist]}>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{this.props.rowData.STeamName}</Text>
          </View>
           {fightresulttitle}
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
