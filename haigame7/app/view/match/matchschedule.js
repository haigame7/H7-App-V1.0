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
var Carousel = require('react-native-carousel');
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
    if (name == 'carouselrule') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
        }
    } else if (name == 'playerinfo') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
      }
    }
    }
rendercarousellist(){
  return(
    <View style={[styles.carouselbody]}>
    <Carousel  hideIndicators={true} animate={true} delay={2000}  loop={true} >
    <View style={styles.carouselcontainer}>
      <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
      <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
      <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
      <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
      <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
      <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
      <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
      </TouchableOpacity>
     </View>
    <View style={styles.carouselcontainer}>
    <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
    <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
    <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
    <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
    <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
    <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
    <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.carouselcontainer}>
    <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
    <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
    <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
    <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
    <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.carouselcontent]} onPress={()=>this.gotoRoute('carouselschedule')}>
    <Image style={[styles.carouselteamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
    <Text style={[styles.carouselcontenttext,{}]}>{'犀利拍冬至'}</Text>
    </TouchableOpacity>
    </View>
   </Carousel>
   </View>

  );
}
renderscheduleList(){
  if(this.state.navbar==0){
    return(
      <View style={[styles.schedulelist]}>
       <View style={[styles.scheduleli]}>

          <View style={[styles.schedulelicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.schedulelistcenter}>
          <View style={[commonstyle.row]}>
            <View style={[commonstyle.btnborderorange, styles.schedulelisttexticon]}>
            <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
            </View>
            <View style={styles.schedulevstext}>
            <Text style={[commonstyle.blue, commonstyle.fontsize18,{fontWeight:'bold'}]}>{'VS'}</Text>
            </View>
            <View style={[commonstyle.btnbordercyan, styles.schedulelisttexticon]}>
              <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
            </View>
          </View>
            <View style={[styles.schedulestate,{borderColor:'red'}]}>
             <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'查看详情'}</Text>
            </View>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
       </View>

       <View style={[styles.scheduleli]}>
          <View style={[styles.schedulelicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
          </View>
          <View style={styles.schedulelistcenter}>
          <View style={[commonstyle.row]}>

            <View style={styles.schedulevstext}>
            <Text style={[commonstyle.gray, commonstyle.fontsize18,{fontWeight:'bold'}]}>{'VS'}</Text>
            </View>

          </View>
            <View style={[styles.schedulestate,]}>
             <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'查看详情'}</Text>
            </View>
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
    let carousel = this.rendercarousellist();
  return (
    <View style={styles.container}>
     <Header screenTitle="Dota2争霸赛赛程"   iconText='我的赛程' callback={this.gotoRoute.bind(this,'carouselrule')} navigator={this.props.navigator}></Header>
   {/*轮播*/}
    {carousel}
   {/*轮播end*/}
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
    marginTop:0,
    backgroundColor: '#000',
  },
  carouselbody:{

    width: Util.size.width-20,
    height:Util.size.height*1/5,
  },
  carouselcontainer:{
    flexDirection:'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  carouselcontent:{
  marginLeft:15,
  marginRight:15
  },
  carouselcontenttext:{
    color:'rgb(150,150,150)',
    top:Util.pixel*20,
     fontSize:15,
     fontWeight:'bold'
  },
  carouselteamimage:{
    width:Util.size.width/5,
    height:Util.size.width/5,
    borderWidth:1,
    borderColor:'rgb(208, 46, 70)',
   borderRadius: 5,
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

 height:Util.size.height*1/5,
 borderBottomColor:'gray',
 borderBottomWidth:1,
 },
 schedulelisttexticon: {
     marginTop: 2,
     width: 32,
     height: 32,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 16,
 },
 schedulevstext:{
   borderBottomWidth:1,
   borderBottomColor:'rgb(120,120,120)',
   marginLeft:5,
   marginBottom:5,
   marginRight:5,
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
 schedulestate:{
  borderWidth:1,
  top:5,
  height:28,
  width:90,
  borderColor:'gray',
  borderRadius:2,
  alignItems:'center',
  justifyContent:'center',
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
    top:-10,
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
