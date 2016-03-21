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
import FightDetail from './fightdetail';

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
    if (name == 'fightdetail') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.push({ name: name, component: FightDetail, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
        }
    } else if (name == 'playerinfo') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
      }
    }
    }
renderfightList(){
  if(this.state.navbar==0){
    return(
      <View style={[styles.fightlist]}>
       <View style={[styles.fightli]}>
          <View style={[styles.fightlicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.fightlistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'VS'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{'2015/05/04'}</Text>
            <View style={styles.fightstate}>
             <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'对方未回应'}</Text>
            </View>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
       </View>

       <View style={[styles.fightli]}>
          <View style={[styles.fightlicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.fightlistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'胜'}<Text>{'VS'}</Text>{'负'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{'2015/05/04'}</Text>
            <View style={[styles.fightstate,{borderColor:'red'}]}>
             <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'+100氦金'}</Text>
            </View>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
       </View>
      </View>
    );
  }
  else{
    return(
      <View style={[styles.fightlist]}>
       <View style={[styles.fightli]}>
          <View style={[styles.fightlicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.fightlistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'VS'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{'2015/05/04'}</Text>
            <TouchableOpacity style={[styles.fightstate,{borderColor:'red'}]} onPress = {() => this.gotoRoute('fightdetail')} >
             <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'确认是否应战'}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.fightlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
       </View>
      </View>
    );
  }
}
render() {
    let fightlist = this.renderfightList();
  return (
    <View style={styles.container}>
     <Header screenTitle="我的约战"   navigator={this.props.navigator}></Header>
    <View style={styles.nav}>
      <View style={styles.navtab}>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
          <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>发出的约战</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
          <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>收到的约战</Text>
        </TouchableOpacity>
      </View>
      </View>
          <View style={[styles.centerbg]}>
          {fightlist}
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
