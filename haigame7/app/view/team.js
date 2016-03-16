'use strict';
/**
 * 组队模块
 * 整体包括
 *
 * 加入战队组件，战队招募组件
 * @return {[Team Component]}
 * @author aran.hu
 */
var CommonStyle = require('../styles/commonstyle');
var TeamStyle = require('../styles/teamstyle');
var Loading = require('./common/loading');
var FindTeam = require('./team/findteam');
var Util = require('./common/util');
var Icon = require('react-native-vector-icons/FontAwesome');

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Component,
  TouchableOpacity,
  TouchableHighlight,
  } from 'react-native';

  export default class extends Component{
    constructor(props) {
      super(props);
      this.state = {
        navbar: 0,
        subnavbar:1,
        invite:0,
        data:{
            subnavbarone:'我的申请',
            subnavbartwo:'我的受邀',
        },
      }
    }
  renderteamList(){
    if(this.state.navbar==0){
      return(
        <View>
        <View style={[styles.teamlist]}>
        <Image style={[styles.teamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <View style={[styles.teamcontent]}>
         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
          <Text style={[styles.teamcontenttext,{color:'red',margin:2}]}>{'2小时前'}</Text>
         </View>
         <Text style={[styles.teamcontenttext,]}>{'生命不息,电竞不止'}</Text>
         <Text style={[styles.teamcontenttext,{fontSize:13,color:'rgb(200,200,200)',lineHeight:15}]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
         </View>
         <TouchableOpacity style = {this.state.invite==0 ? styles.teambuttoninvite : styles.teambuttoninvited}  >
              <Text style = {this.state.invite==0 ? styles.btnfontinvite:styles.btnfontinvited}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
         </TouchableOpacity>
        </View>
         <View style={[styles.teamsplit]}></View>
         <View style={[styles.teamlist]}>
         <Image style={[styles.teamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <View style={[styles.teamcontent]}>
         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
          <Text style={[styles.teamcontenttext,{color:'red',margin:2}]}>{'2小时前'}</Text>
         </View>
          <Text style={[styles.teamcontenttext,]}>{'生命不息,电竞不止'}</Text>
         <Text style={[styles.teamcontenttext,{fontSize:13,color:'rgb(200,200,200)',lineHeight:15}]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
         </View>
         <TouchableOpacity style = {this.state.invite==0 ? styles.teambuttoninvite : styles.teambuttoninvited}  >
              <Text style = {this.state.invite==0 ? styles.btnfontinvite:styles.btnfontinvited}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
         </TouchableOpacity>
         </View>
         <View style={[styles.teamsplit]}></View>
         <View style={[styles.teamlist]}>
         <Image style={[styles.teamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <View style={[styles.teamcontent]}>
         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
          <Text style={[styles.teamcontenttext,{color:'red',margin:2}]}>{'2小时前'}</Text>
         </View>
         <Text style={[styles.teamcontenttext,]}>{'生命不息,电竞不止'}</Text>
         <Text style={[styles.teamcontenttext,{fontSize:13,color:'rgb(200,200,200)',lineHeight:15}]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
         </View>
         <TouchableOpacity style = {this.state.invite==1 ? styles.teambuttoninvite : styles.teambuttoninvited}  >
              <Text style = {this.state.invite==1 ? styles.btnfontinvite:styles.btnfontinvited}> { this.state.invite==1 ? '申请加入' : '已申请' } </Text>
         </TouchableOpacity>
         </View>
          <View style={[styles.teamsplit]}></View>
       </View>
      );
    }else{
      return(
       <View style={styles.item}>
       </View>
      );
    }
  }
  render()
  {
    let teamlist = this.renderteamList();
    return (
      <View style={styles.container}>

        <View style={styles.nav}>
          <TouchableOpacity style={styles.nav_item}  onPress = {() => this._switchNavbar(0)}>
          <Text style={this.state.navbar==0?styles.nav_item_text_active:styles.nav_item_text}>加入战队</Text>
          <View style={this.state.navbar==0?styles.nav_item_line_active:styles.nav_item_line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nav_item}  onPress = {() => this._switchNavbar(1)}>
          <Text style={this.state.navbar==1?styles.nav_item_text_active:styles.nav_item_text}>招募队员</Text>
          <View style={this.state.navbar==1?styles.nav_item_line_active:styles.nav_item_line}></View>
          </TouchableOpacity>
           <View style={styles.sub_nav}>
           <TouchableOpacity style={styles.sub_nav_item} >
           <Text style={styles.sub_nav_item_text}>{this.state.data.subnavbarone}</Text>
          <Text style={[styles.sub_nav_item_text,{color:'rgb(208, 46, 70)',fontSize:14,top:-3}]}>{'(10)'}</Text>
           <View style={styles.sub_nav_item_line}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.sub_nav_item}>
           <Text style={styles.sub_nav_item_text}>{this.state.data.subnavbartwo}</Text>
          <Text style={[styles.sub_nav_item_text,{color:'rgb(208, 46, 70)',fontSize:14,top:-3}]}>{'(10)'}</Text>
           </TouchableOpacity>
           </View>
          <View style={[styles.infosplit]}></View>
          </View>
          <View style={[styles.centerbg]}>
             {teamlist}
          </View>
     </View>
    );
  }
  _switchNavbar(nav){
 var nameone ='我的申请';
 var nametwo = '我的受邀';
  if(nav==1){
    nameone = '发出邀请';
    nametwo = '申请加入';
  }
 this.setState({
   navbar:nav,
   data:{subnavbarone:nameone,subnavbartwo:nametwo},
 });
 return;
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
 teamlist:{
   height:Util.size.height*13/84,
   flexDirection:'row',
 },
 teamimage:{
   width:80,
   height:80,
   margin:10,
   borderRadius: 40,
 },
 teamcontent:{
   flexDirection:'column',
   width:Util.size.width/2,
 },
 teamcontenttext:{
   color:'rgb(150,150,150)',
   fontSize:12,
   top:Util.pixel*30,
   marginBottom:Util.pixel*8,
 },

 teamrowtext:{
   flexDirection:'row',
 },
 teamsplit:{
   position:'absolute',
   left:0,
   height:Util.pixel,
   width:Util.size.width,
   backgroundColor:'rgb(50,50,50)',
 },
 teambuttoninvite:{
  width:Util.size.width*19/100,
  height:Util.pixel*65,
  top:Util.pixel*80,
  left:Util.pixel*10,
  borderRadius:5,
  backgroundColor:'rgb(208, 46, 70)',
 },
 teambuttoninvited:{
   width:Util.size.width*19/100,
   height:Util.pixel*65,
   top:Util.pixel*80,
   left:Util.pixel*10,
   borderRadius:5,
   backgroundColor:'rgb(150, 150, 150)',
 },
 btnfontinvite:{
 textAlign:'center',
 top:Util.pixel*16,
 fontSize:13,
 color:'#fff',
 fontWeight:'bold'
 },
 btnfontinvited:{
   textAlign:'center',
   top:Util.pixel*16,
   fontSize:13,
   color:'#000',
   fontWeight:'bold'
 },
  nav:{
  height:Util.size.height/9,
   flexDirection:'row',
   backgroundColor:'rgb(0, 0, 0)'
  },
  sub_nav:{
    position:'absolute',
    flexDirection:'row',
    left:0,
    marginTop:Util.size.height/18,
    width:Util.size.width,
    height:Util.size.height/18,
  },
  nav_item:{

  left:Util.size.width/5,
  top:Util.pixel*25,
  marginRight:Util.size.width*3/10,
  },
  sub_nav_item:{
      flexDirection:'row',
    left:Util.size.width/6,
    top:Util.pixel*30,
    marginRight:Util.size.width*1/5,
  },
  nav_item_line:{
    position:'absolute',
    left:-Util.size.width/6,
    marginTop:Util.pixel*30,
    height:Util.pixel*4,
    width:Util.size.width*7/15,
    backgroundColor:'rgb(120,120,120)',
  },
  nav_item_line_active:{
    position:'absolute',
    left:-Util.size.width/6,
    marginTop:Util.pixel*30,
    height:Util.pixel*4,
    width:Util.size.width*7/15,
    backgroundColor:'red',
  },
  nav_item_text:{
   fontSize:15,
   color:'rgb(150,150,150)'
 },
 nav_item_text_active:{
  fontSize:15,
  color:'red'
},
  sub_nav_item_text:{
   fontSize:12,
  marginRight:Util.pixel*20,
   color:'rgb(150,150,150)'
 },

 sub_nav_item_line:{
   position:'absolute',
   width:Util.pixel,
   height:Util.pixel*30,

   left:Util.size.width/3,
   backgroundColor:'rgb(150,150,150)',
 }

 });
