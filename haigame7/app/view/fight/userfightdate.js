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

           this.props.navigator.push({ name: params.name, component: FightDetail, params:params,sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
       }
   } else if (params.name == 'playerinfo') {
     if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != params.name) {
     }
   }
 },
 rendercurrent(){
   if(this.state.rowData.CurrentState=='已认怂'){
     return(
       <TouchableOpacity style={[styles.fightstate,{borderColor:'gray'}]} >
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }
   else{
     return(
       <TouchableOpacity style={[styles.fightstate,{borderColor:'red'}]} onPress = {this.gotoRoute.bind(this,{"name":"fightdetail","steamname":this.props.rowData.STeamName,"eteamname":this.props.rowData.ETeamName,'money':this.props.rowData.Money})} >
        <Text style={[commonstyle.red, commonstyle.fontsize14]}>{this.props.rowData.CurrentState}</Text>
       </TouchableOpacity>
     );
   }

 },
  render: function() {
    var fightcurrentstate = this.rendercurrent();

    return(
      <View style={[styles.fightlist]}>
       <View style={[styles.fightli]}>
          <View style={[styles.fightlicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{this.props.rowData.STeamName}</Text>
          </View>
          <View style={styles.fightlistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'VS'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{this.props.rowData.StateTimeStr}</Text>
          {fightcurrentstate}
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{this.props.rowData.ETeamName}</Text>
         </View>
         </View>
       </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },

  flexrow:{
    flexDirection:'row',
  },
  flexcolumn:{
    flexDirection:'column',
    alignItems:'center',
   justifyContent:'center',
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },
 fightlist:{
   flex:1,
   paddingLeft:10,
   paddingRight:10,
 },
 fightli:{
 width: Util.size.width-20,
 height:Util.size.height*1/5,
 backgroundColor: '#232220',
 borderBottomColor:'gray',
 borderBottomWidth:1,
 },
 fightlititle:{
   backgroundColor:'rgb(120,120,120)',
   height:Util.pixel*50,
   alignItems:'center',
   justifyContent:'center',
 },
 fightlititletext:{
   fontSize:14,
 },
 fightlicontent:{
   paddingTop:20,
   flexDirection:'row',
   alignItems:'center',
  justifyContent:'center',
 },
 fightlistimg: {
     width: 70,
     height: 70,
     borderRadius: 35,
     borderWidth: 2,
     borderColor: 'rgba(255, 255, 255, 0.6)',
     marginRight: 10,
 },
 fightlistcenter: {
    width:Util.size.width/3,
    alignItems:'center',
   justifyContent:'center',
 },
 fightlisttext: {
     marginTop: 5,
     marginBottom: 5,
 },
 fightstate:{
  borderWidth:1,
  top:10,
  height:28,
  width:90,
  borderColor:'gray',
  borderRadius:2,
  alignItems:'center',
  justifyContent:'center',
 },
 });

 module.exports = UserFightList;
