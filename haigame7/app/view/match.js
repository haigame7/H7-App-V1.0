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
var Util = require('./common/util');
var Icon = require('react-native-vector-icons/FontAwesome');
var MatchStyle = require('../styles/matchstyle');
var commonstyle = require('../styles/commonstyle');
import MatchRule from './match/matchrule';
import MatchSchedule from './match/matchschedule';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

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
    } else if (name == 'matchschedule') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
        this.props.navigator.push({ name: name, component: MatchSchedule, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    }
    }
rendermatchList(){
  if(this.state.navbar==0){
    return(
      <View style={[styles.matchlist]}>
      <TouchableOpacity  style={[styles.matchimagecontainer,]} onPress={()=>this.gotoRoute('matchrule')}>
      <Image  style={[styles.matchimage,]}source={{uri:'http://a4.att.hudong.com/57/68/20300533970223133722680195303.jpg'}}  resizeMode={"stretch"} />
      </TouchableOpacity>
       <View style={[styles.matchcontentcontainer]}>
        <View style={[styles.matchrowcontent]}>
        <TouchableOpacity style={[styles.matchcontent]} onPress={()=>this.gotoRoute('matchschedule')}>
        <Image style={[styles.matchteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[styles.matchcontenttext,{}]}>{'犀利拍冬至'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.matchcontent]} onPress={this._openModa.bind(this)}>
        <Image style={[styles.matchteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[styles.matchcontenttext,{}]}>{'犀利拍冬至'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.matchcontent]} onPress={this._openModa.bind(this)}>
        <Image style={[styles.matchteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[styles.matchcontenttext,{}]}>{'犀利拍冬至'}</Text>
        </TouchableOpacity>
        </View>
        {/*machcontent*/}
        <View style={[styles.matchrowcontent]}>
        <View style={[styles.matchcontent]}>
        <Image style={[styles.matchteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[styles.matchcontenttext,{}]}>{'犀利拍冬至'}</Text>
        </View>
        <View style={[styles.matchcontent]}>
        <Image style={[styles.matchteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[styles.matchcontenttext,{}]}>{'犀利拍冬至'}</Text>
        </View>
        <View style={[styles.matchcontent]}>
        <Image style={[styles.matchteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[styles.matchcontenttext,{}]}>{'犀利拍冬至'}</Text>
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
    let matchlist = this.rendermatchList();
  return (
    <View style={styles.container}>
    <View style={styles.nav}>
      <View style={styles.navtab}>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
          <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>加入战队</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
          <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>招募队员</Text>
        </TouchableOpacity>
      </View>
      </View>
          <View style={[styles.centerbg]}>
          {matchlist}
          </View>
          {/*modal*/}
          <Modal isOpen={this.state.isOpen}  forceToFront={true} onClosed={this._closeModa.bind(this)}style={[styles.modal]}  >
             <View style={styles.modalttitle}>

             <Image style={[styles.modalteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[styles.modalttitletext,{}]}>{'犀利拍冬至'}</Text>
             <Text style={[styles.modalttitletext,{}]}>{'生命不息电竞不止,来吧加入我的战队'}</Text>
               <Text style={[styles.modalttitletext,{color:'rgb(230, 193, 39)'}]}>{'主播名额'}<Text style={{color:'rgb(208, 46, 70)'}}>{'5/20'}</Text></Text>
             </View>
             <ScrollView style={styles.modalscrollcontainer} showsVerticalScrollIndicator={true} >
               <Text style={styles.scrolltext}>{'ID:  '} <Text>{'12312423'}</Text></Text>
               <Text style={styles.scrolltext}>{'ID:  '} <Text>{'12312423'}</Text></Text>
               <Text style={styles.scrolltext}>{'ID:  '} <Text>{'12312423'}</Text></Text>
               <Text style={styles.scrolltext}>{'ID:  '} <Text>{'12312423'}</Text></Text>
               <Text style={styles.scrolltext}>{'ID:  '} <Text>{'12312423'}</Text></Text>
               <Text style={[styles.scrolltext,{color:'rgb(208, 46, 70)',fontSize:12, position:'absolute',top:Util.size.height*11/32,}]}>{'您已加入[xxxx],报名结束后为您生成信息,请关注'}</Text>
             </ScrollView>
             <View style={styles.modalbuttoncontainer}>
               <Button style={styles.modalbutton} onPress={this._closeModa.bind(this)} >关闭</Button>
                <Button style={styles.modalbutton} onPress={this._closeModa.bind(this)} >加入</Button>
             </View>
           </Modal>
        </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },
  infosplit:{
    position:'absolute',
    left:0,
    marginTop:Util.size.height/9-1,
    height:Util.pixel,
    width:Util.size.width,
    backgroundColor:'rgb(50,50,50)',
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },
 matchlist:{
   flexDirection:'column',
 },
 matchteamimage:{
   width:Util.size.width/5,
   height:Util.size.width/5,

   borderWidth:1,

   borderColor:'rgb(208, 46, 70)',
  borderRadius: 5,
 },
 matchimage:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
 },
 matchimagecontainer:{
   width:Util.size.width,
   height:120,
 },
 modal: {
   position:'absolute',
   top:5,
   height: Util.size.height-10,
   width:Util.size.width-20,
   borderRadius:5,
   backgroundColor: "#292929",
 },
 modalttitle:{
   alignItems:'center',
   height:Util.size.height*20/63,
   top:Util.pixel*10,
 },
modalttitletext:{
  color:'rgb(200,200,200)',
  fontSize:16,
  top:Util.pixel*20,
  textAlign:'center',
},
modalteamimage:{
  width:Util.size.width/4,
  height:Util.size.width/4,
  top:Util.pixel*20,
  borderWidth:1,
  borderColor:'rgb(208, 46, 70)',
 borderRadius: 5,
},
 modalscrollcontainer:{
  backgroundColor:'rgb(50,50,50)',
   height:10,
 },
 modalbuttoncontainer:{
   position:'absolute',
   flexDirection:'row',
   top:Util.size.height*11/16+20,
   height:Util.pixel*50,
   justifyContent:'center',
 },
 modalbutton:{
   backgroundColor:'#D31B25',
   width:Util.size.width/2-10,
   borderRadius:2,
   textAlign:'center',
  height:Util.pixel*90,
 },
 scrolltext:{
    color:'rgb(100,100,100)',
    margin:Util.pixel*10,
    marginLeft:Util.pixel*30,
    fontSize:16,
    lineHeight:20,
 },
 matchcontentcontainer:{
   flexDirection:'column',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 matchcontent:{
 marginLeft:15,
marginRight:15
 },
 matchrowcontent:{
   flexDirection:'row',
   marginBottom:Util.pixel*50,
 },
 matchcontenttext:{
   color:'rgb(150,150,150)',
   top:Util.pixel*20,
    fontSize:15,
    fontWeight:'bold'
 },
 matchrowtext:{
   flexDirection:'row',
 },
 matchsplit:{
   position:'absolute',
   left:0,
   height:Util.pixel,
   width:Util.size.width,
   backgroundColor:'rgb(50,50,50)',
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


 sub_nav_item_icon:{
   marginLeft:Util.pixel*6,
   color:'rgb(150,150,150)'
 },
 sub_nav_item_icon_active:{
   marginLeft:Util.pixel*6,
   color:'red'
 },
 sub_nav_item_line:{
   position:'absolute',
   width:Util.pixel,
   height:Util.pixel*30,

   left:Util.size.width/5,
   backgroundColor:'rgb(150,150,150)',
 }

 });
