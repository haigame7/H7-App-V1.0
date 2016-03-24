'use strict';
/**
 * APPs我的赛事
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */

import React, {
    View,
    Text,
    TextInput,
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
      isOpen:false,
      modalnum:0,
      money:0,
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
  rendermodaldetail(){
     if(this.state.navbar==0){
         return(
           <Modal isOpen={this.state.isOpen}  swipeToClose={false}  onClosed={this._closeModa.bind(this)} style={[commonstyle.modal,commonstyle.modalbig]}  position={"top"} >
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
                <Text style={[styles.scrolltext,{color:'rgb(208, 46, 70)',fontSize:12}]}>{'您已加入[xxxx],报名结束后为您生成信息,请关注'}</Text>
              </ScrollView>
              <View style={[commonstyle.row, commonstyle.modalbtn]}>
              <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} style={commonstyle.black} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >关闭</Button>
              <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >已阅读</Button>
              </View>
            </Modal>
         );
     }else{
      return(
        <Modal isOpen={this.state.isOpen}  swipeToClose={false} onClosed={this._closeModa.bind(this)} style={[commonstyle.modal, commonstyle.modalbig]} position={"top"} >
        <View style={[styles.modalheader]}>

            <Text style={[commonstyle.cream, {fontSize:16}]}>{'您的选择：犀利拍立冬至 获胜'}</Text>
            <View  style = {styles.modalinput }>
                <TextInput placeholder={'押注最小氦金为10氦金,请输入押注金额'} placeholderTextColor='rgb(120,120,120)' style={styles.modalinputfont}  onChangeText = {(text) => this.state.money = text }/>
            </View>
            <View style ={styles.modalgainmoney}>
            <Text style={commonstyle.cream}>{'  可用氦金:  '}</Text>
            <Text style={commonstyle.yellow}>{'1000'}</Text>

            <Text style={commonstyle.cream}>{'  预估收益:  '}</Text>
            <Text style={commonstyle.yellow}>{'1500'}</Text>
            </View>
        </View>
          <View style={[commonstyle.row]}>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} style={commonstyle.black} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >取消关闭</Button>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >确认下注</Button>
          </View>
          <View style={styles.modalfooter}>
          <View style={[commonstyle.row, styles.modalheadtab]}>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
                <Text style={[styles.modalheadtabnumber, commonstyle.red,commonstyle.fontsize12]}>{'时间'}</Text>
            </View>
            <View style={styles.modalheadtabline} ></View>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
                <Text style={[styles.modalheadtabnumber, commonstyle.red,commonstyle.fontsize12]}>{'押注项'}</Text>
            </View>
            <View style={styles.modalheadtabline} ></View>
            <View style={[commonstyle.col1, styles.modalheadtabli]} activeOpacity={0.8} >
                <Text style={[styles.modalheadtabnumber, commonstyle.red,commonstyle.fontsize12]}>{'金额'}</Text>
            </View>
            <View style={styles.modalheadtabline} ></View>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
              <Text style={[styles.modalheadtabnumber, commonstyle.red,commonstyle.fontsize12]}>{'赔率'}</Text>
            </View>
            <View style={styles.modalheadtabline} ></View>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
              <Text style={[styles.modalheadtabnumber, commonstyle.red,commonstyle.fontsize12]}>{'预估收益'}</Text>
            </View>
          </View>
          <View style={[commonstyle.row, styles.modalcontenttab]}>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
                <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'19:04'}</Text>
            </View>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
                <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'犀利拍立冬至'}</Text>
            </View>

            <View style={[commonstyle.col1, styles.modalheadtabli]} activeOpacity={0.8} >
                <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'100'}</Text>
            </View>

            <View style={[commonstyle.col1, styles.modalheadtabli]}>
              <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'1:1.1'}</Text>
            </View>

            <View style={[commonstyle.col1, styles.modalheadtabli]}>
              <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'150'}</Text>
            </View>
          </View>
          <View style={[commonstyle.row, styles.modalcontenttab]}>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
                <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'19:04'}</Text>
            </View>
            <View style={[commonstyle.col1, styles.modalheadtabli]}>
                <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'犀利拍立冬至'}</Text>
            </View>

            <View style={[commonstyle.col1, styles.modalheadtabli]} activeOpacity={0.8} >
                <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'100'}</Text>
            </View>

            <View style={[commonstyle.col1, styles.modalheadtabli]}>
              <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'1:1.1'}</Text>
            </View>

            <View style={[commonstyle.col1, styles.modalheadtabli]}>
              <Text style={[styles.modalheadtabnumber, commonstyle.cream,commonstyle.fontsize12]}>{'150'}</Text>
            </View>
          </View>
          {/*footer*/}
          </View>
        </Modal>
      );
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
   <View>
      <View style={[styles.matchli]}>
         <View style={[styles.matchlititle]}><Text style={[commonstyle.fontsize14,commonstyle.white]}>{'什么什么鱼塘大赛'}</Text></View>
         <View style={[styles.matchlicontent]}>
          <TouchableOpacity style={[styles.matchflexcolumn]} onPress={this._openModa.bind(this)}>
         <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
           <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率 1 : 1.11'}</Text>
         </TouchableOpacity>
         <View style={styles.matchlistcenter}>
           <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'VS'}</Text>
           <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{'2015/05/04'}</Text>
            <Text style={[commonstyle.yellow ]}>{'猜胜负'}</Text>
         </View>
         <TouchableOpacity style={[styles.matchflexcolumn]} onPress={this._openModa.bind(this)}>
        <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率 1 : 1.11'}</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={[commonstyle.row, styles.headtab]}>
        <View style={[commonstyle.col1, styles.headtabli]}>
    <Icon name="user" size={20} style={[styles.headtabtitle, commonstyle.red]} />
            <Text style={[styles.headtabnumber, commonstyle.cream]}>{'08:20:49'}</Text>
        </View>
        <View style={styles.headtabline} ></View>
        <TouchableOpacity style={[commonstyle.col1, styles.headtabli]} activeOpacity={0.8} >
   <Icon name="user" size={20} style={[styles.headtabtitle, commonstyle.red]} />
            <Text style={[styles.headtabnumber, commonstyle.red]}>{'5000氦金'}</Text>
        </TouchableOpacity>
        <View style={styles.headtabline} ></View>
        <View style={[commonstyle.col1, styles.headtabli]}>
          <Icon name="user" size={20} style={[styles.headtabtitle, commonstyle.red]} />
          <Text style={[styles.headtabnumber, commonstyle.red]}>{'333人押注'}</Text>
        </View>
      </View>

  </View>
    );
  }
}
render() {
    let matchlist = this.rendermatchList();
    let modal = this.rendermodaldetail();
  return (
    <View style={styles.container}>
    <View style={styles.nav}>
      <View style={styles.navtab}>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
          <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>比赛赛事</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
          <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>赛事竞猜</Text>
        </TouchableOpacity>
      </View>
      </View>
          <View style={[styles.centerbg]}>
          {matchlist}
          </View>
          {/*modal*/}
          {modal}
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
  headtab: {
      marginTop: 10,
  },
  headtabli: {
      alignItems: 'center',
      width: Util.size.width/3-1,
      height: 40,
  },
  headtabtitle: {
      alignItems: 'center',
      height: 20,
      marginBottom:3,
  },
  headtabnumber: {
      alignItems: 'center',
      height: 20,
  },
  modalfooter:{
    backgroundColor:'#000',
    width:Util.size.width-40,
    height:Util.size.height/2,
  },
  modalheadtab: {
      marginTop: 10,
  },
  modalcontenttab: {
  borderBottomWidth:1,
  marginTop:5,
  top:-15,
  height:25,
  borderBottomColor:'rgb(50,50,50)',
  },
  modalheadtabli: {
      alignItems: 'center',
      height: 40,
  },
  modalheadtabtitle: {
      alignItems: 'center',
      height: 20,
      marginBottom:3,
  },
  modalheadtabnumber: {
      alignItems: 'center',
      height: 20,
  },
  modalheadtabline: {


      backgroundColor:'#FFFFFF',
      width:Util.pixel,
      height: 15,

  },
  modalheader:{
    height:Util.size.height/4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  modalinput:{
    height: 40,
    width: Util.size.width - 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D31B25',
    borderRadius: 3,
    marginTop: 20,
    marginLeft: 36,
    marginRight: 36,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalinputfont: {
      color: '#FFFFFF',
  },
  modalgainmoney:{
     flexDirection:'row',
     paddingTop:15,
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
 matchflexcolumn:{
     flexDirection:'column',
     alignItems:'center',
    justifyContent:'center',
   },
 matchli:{
 width: Util.size.width,
 marginTop:10,
 height:Util.size.height*11/40,
 backgroundColor: '#232220',
 },
 matchlititle:{
   top:Util.pixel*20,
   height:Util.pixel*50,
   alignItems:'center',
   justifyContent:'center',
 },

 matchlicontent:{
   paddingTop:20,
   flexDirection:'row',
   alignItems:'center',
  justifyContent:'center',
 },
 matchlistimg: {
     width: 70,
     height: 70,
     borderRadius: 35,
     borderWidth: 2,
     borderColor: 'rgba(255, 255, 255, 0.6)',
     marginRight: 10,
 },
 matchlistcenter: {
    width:Util.size.width/3,
    alignItems:'center',
   justifyContent:'center',
 },
 matchlisttext: {
     marginTop: 5,
     marginBottom: 5,
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

 modalttitle:{
   alignItems:'center',
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
   padding: 5,
   marginBottom: 40,
   marginTop:10,
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
