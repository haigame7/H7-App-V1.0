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
var Util = require('../common/util');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var commonstyle = require('../../styles/commonstyle');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import MatchRule from './matchrule';

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
    _openModa() {
      this.setState({isOpen: true});
    }
    _closeModa() {
      console.log('******');
       this.setState({isOpen: false});
    }
  _switchNavbar(nav){
   this.setState({
   navbar:nav,
   });
   return;
   }
   gotoRoute(name) {
    if (name == 'matchrule') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.push({ name: name, component: MatchRule, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
        }
    } else if (name == 'playerinfo') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
      }
    }
    }
renderscheduleList(){
  if(this.state.navbar==0){
    return(
      <View style={[styles.schedulelist]}>
       <View style={[styles.scheduleli]}>
          <View style={[styles.schedulelititle]}><Text style={[styles.schedulelititletext]}>{'什么什么鱼塘大赛'}</Text></View>
          <View style={[styles.schedulelicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.schedulelistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'胜'}<Text>{'VS'}</Text>{'负'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{'2015/05/04'}</Text>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
       </View>

       <View style={[styles.scheduleli]}>
          <View style={[styles.schedulelititle]}><Text style={[styles.schedulelititletext]}>{'什么什么鱼塘大赛'}</Text></View>
          <View style={[styles.schedulelicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.schedulelistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'胜'}<Text>{'VS'}</Text>{'负'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{'2015/05/04'}</Text>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
       </View>
      </View>
    );
  }
  else{
    return(
      <View></View>
    );
  }
}
render() {
    let schedulelist = this.renderscheduleList();
  return (
    <View style={styles.container}>
     <Header screenTitle="Dota2争霸赛赛程"   iconText='我的赛程' callback={this.gotoRoute.bind(this,'matchrule')} navigator={this.props.navigator}></Header>
    <View style={styles.nav}>
      <View style={styles.navtab}>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
          <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>05/12</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.navbar==1?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
          <Text style={this.state.navbar==1?commonstyle.red:commonstyle.white}>05/13</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.navbar==2?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(2)}>
          <Text style={this.state.navbar==2?commonstyle.red:commonstyle.white}>05/14</Text>
        </TouchableOpacity>
      </View>
      </View>
          <View style={[styles.centerbg]}>
          {schedulelist}
          </View>
        </View>
    );
  }
}
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
 schedulelist:{
   flex:1,
   paddingLeft:10,
   paddingRight:10,
 },
 scheduleli:{
 width: Util.size.width-20,
 marginTop:10,
 height:Util.size.height*9/40,
 backgroundColor: '#232220',
 borderColor:'gray',
 borderWidth:1,
 },
 schedulelititle:{
   backgroundColor:'rgb(120,120,120)',
   height:Util.pixel*50,
   alignItems:'center',
   justifyContent:'center',
 },
 schedulelititletext:{
   fontSize:14,
 },
 schedulelicontent:{
   paddingTop:20,
   flexDirection:'row',
   alignItems:'center',
  justifyContent:'center',
 },
 schedulelistimg: {
     width: 70,
     height: 70,
     borderRadius: 35,
     borderWidth: 2,
     borderColor: 'rgba(255, 255, 255, 0.6)',
     marginRight: 10,
 },
 schedulelistcenter: {
    width:Util.size.width/3,
    alignItems:'center',
   justifyContent:'center',
 },
 schedulelisttext: {
     marginTop: 5,
     marginBottom: 5,
 },
  nav:{
  height: 40,
  },
  navtab:{
    flexDirection: 'row',
    height: 40,
    width: Util.size.width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#232220',
  },
  navbtn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#C3C3C3',
  },
  navbtnactive: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#D31B25',
  },
 });
