'use strict';
/**
 * 组队模块
 * 整体包括
 *
 * 加入战队组件，战队招募组件
 * @return {[Team Component]}
 * @author aran.hu
 */
var Loading = require('./common/loading');
var FindTeam = require('./team/findteam');
var Util = require('./common/util');
var Icon = require('react-native-vector-icons/FontAwesome');

import React, {
  View,
  Text,
  Image,
  StyleSheet,
  Navigator,
  Component,
  TouchableOpacity,
  TouchableHighlight,
  } from 'react-native';

import commonstyle from '../styles/commonstyle';
import styles from '../styles/teamstyle';
import TeamRecruit from './team/teamrecruit';
import PlayerInfo from './team/playerinfo';
import TeamInfo from './team/teaminfo';
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
    gotoRoute(name) {
        if (name == 'teamrecruit') {
            if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
                this.props.navigator.push({ name: name, component: TeamRecruit, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
            }
        } else if (name == 'playerinfo') {
          if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
              this.props.navigator.push({ name: name, component: PlayerInfo, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
          }
        }else if (name == 'teaminfo') {
          if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
              this.props.navigator.push({ name: name, component: TeamInfo, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
          }
        }
    }
  renderteamList(){
    if(this.state.navbar==0){
      return(
        <View>
      <TouchableOpacity style={[styles.teamlist]}  onPress={()=>this.gotoRoute('teaminfo')}>
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
        </TouchableOpacity>
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
        <View>
        <View style={[styles.teamrecruit]}>
          <TouchableOpacity>
        <Image style={[styles.teamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
      </TouchableOpacity>
        <View style={[styles.teamcontent]}>
         <View style={[styles.teamrowtext,{marginTop:Util.pixel*20}]}>
         <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
         </View>
         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{marginTop:20,fontSize:14,fontWeight:'bold',color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
         <Text style={[styles.teamcontenttext,{marginTop:20,fontSize:14,fontWeight:'bold',color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
         <Text style={[styles.teamcontenttext,{marginTop:20,fontSize:14,fontWeight:'bold',color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
         <Text style={[styles.teamcontenttext,{marginTop:20,fontSize:14,fontWeight:'bold',color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
         </View>

         <Text style={[styles.teamcontenttext,{fontSize:13,color:'rgb(200,200,200)',lineHeight:15}]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
         <TouchableOpacity style = {[styles.teambuttoninvite,{top:Util.pixel*50,left:0,width:Util.size.width*1/4}]} onPress={()=>this.gotoRoute('teamrecruit')} >
              <Text style = {styles.btnfontinvite}> {'发布招募'} </Text>
         </TouchableOpacity>
         </View>
         <Icon name='angle-right' size={25} style={styles.teamangleright}/>
        </View>
         <View style={[styles.teamsplit]}></View>
         <TouchableOpacity style={[styles.teamlist]}  onPress={()=>this.gotoRoute('playerinfo')}>
         <Image style={[styles.teamrecruitimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <View style={[styles.teamcontent]} >

         <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]} onPress={()=>this.gotoRoute('playerinfo')}>{'犀利拍立冬至'}</Text>

         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
         <Text style={[styles.teamcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
         <Text style={[styles.teamcontenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
         <Text style={[styles.teamcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
         </View>
          <View style={[styles.teamrowtext]}>
          <Text style={[styles.teamcontenttext,{color:'rgb(150, 150, 150)'}]}>{'擅长英雄:'}</Text>
          <View style={[styles.teamheroimagecontainer]}>
          <Image style={[styles.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Image style={[styles.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Image style={[styles.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          </View>
          </View>

        </View>
         <TouchableOpacity style = {this.state.invite==0 ? styles.teambuttonrecruit : styles.teambuttonrecruited}  >
              <Text style = {this.state.invite==0 ? styles.btnfontinvite:styles.btnfontinvited}> { this.state.invite==0 ? '邀请' : '已邀请' } </Text>
         </TouchableOpacity>
         </TouchableOpacity>
         <View style={[styles.teamsplit,{marginTop:Util.pixel*10}]}></View>
         <View style={[styles.teamlist]}>
         <Image style={[styles.teamrecruitimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <View style={[styles.teamcontent]}>
         <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
         <Text style={[styles.teamcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
         <Text style={[styles.teamcontenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
         <Text style={[styles.teamcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
         </View>
         <View style={[styles.teamrowtext]}>
         <Text style={[styles.teamcontenttext,{color:'rgb(150, 150, 150)'}]}>{'擅长英雄:'}</Text>
         <View style={[styles.teamheroimagecontainer]}>
         <Image style={[styles.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Image style={[styles.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Image style={[styles.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />

          </View>
          </View>
        </View>
         <TouchableOpacity style = {this.state.invite==1 ? styles.teambuttonrecruit: styles.teambuttonrecruited}  >
              <Text style = {this.state.invite==1 ? styles.btnfontinvite:styles.btnfontinvited}> { this.state.invite==1 ? '邀请' : '已邀请' } </Text>
         </TouchableOpacity>
         </View>
          <View style={[styles.teamsplit,{marginTop:Util.pixel*10}]}></View>
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
