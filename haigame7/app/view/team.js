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
  ScrollView,
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
          <TouchableOpacity style={styles.teamlist} activeOpacity={0.8} onPress={()=>this.gotoRoute('teaminfo')}>
            <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.teamlistcenter}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止'}</Text>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
            </View>
            <View style={styles.teamlistright}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'2小时前'}</Text>
              <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.teamlistbtn]} activeOpacity={0.8}>
                <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.teamlist} activeOpacity={0.8} onPress={()=>this.gotoRoute('teaminfo')}>
            <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.teamlistcenter}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止'}</Text>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
            </View>
            <View style={styles.teamlistright}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'2小时前'}</Text>
              <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.teamlistbtn]} activeOpacity={0.8}>
                <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.teamlist} activeOpacity={0.8} onPress={()=>this.gotoRoute('teaminfo')}>
            <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.teamlistcenter}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止'}</Text>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
            </View>
            <View style={styles.teamlistright}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'2小时前'}</Text>
              <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.teamlistbtn]} activeOpacity={0.8}>
                <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.teamlist} activeOpacity={0.8} onPress={()=>this.gotoRoute('teaminfo')}>
            <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.teamlistcenter}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止'}</Text>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
            </View>
            <View style={styles.teamlistright}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'2小时前'}</Text>
              <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.teamlistbtn]} activeOpacity={0.8}>
                <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.teamlist} activeOpacity={0.8} onPress={()=>this.gotoRoute('teaminfo')}>
            <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.teamlistcenter}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止'}</Text>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
            </View>
            <View style={styles.teamlistright}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'2小时前'}</Text>
              <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.teamlistbtn]} activeOpacity={0.8}>
                <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '申请加入' : '已申请' } </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
       </View>
      );
    }else{
      return(
        <View>
        <View style={styles.userlist}>
          <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={styles.userlistteam}>
            <TouchableOpacity style={styles.userlistteamname} activeOpacity={0.8}>
              <Text style={commonstyle.cream}>{'犀利拍立冬至'}</Text>
              <Icon name="angle-right" size={25} color={'#C3C3C3'} style={styles.userlistteamicon} />
            </TouchableOpacity>
            <View style={styles.userlistteambox}>
              <Text style={commonstyle.yellow}>{'战斗力:'}</Text>
              <Text style={commonstyle.red}>{'12345'}</Text>
              <Text style={commonstyle.yellow}>{'氦金:'}</Text>
              <Text style={commonstyle.red}>{'12345'}</Text>
            </View>
            <Text style={commonstyle.cream}>{'本队需要辅助1名,擅长XX英雄,战队福利优厚，报名从速'}</Text>
            <TouchableOpacity style = {[commonstyle.btnredwhite, styles.teamlistbtn]} onPress={()=>this.gotoRoute('teamrecruit')} >
              <Text style = {commonstyle.white}> {'发布招募'} </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.userlist}  activeOpacity={0.8} onPress={()=>this.gotoRoute('playerinfo')}>
          <Image style={styles.userlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={styles.userlistcenter} >
            <Text style={commonstyle.white} onPress={()=>this.gotoRoute('playerinfo')}>{'犀利拍立冬至'}</Text>
            <View style={styles.userlistteambox}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:'}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'氦金:'}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
            </View>
            <View style={styles.userlistteambox}>
              <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'擅长英雄:'}</Text>
              <View style={styles.userlisthero}>
                <Image style={styles.userlistheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.userlistheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.userlistheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              </View>
            </View>
          </View>
          <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.userlistbtn]} activeOpacity={0.8}>
            <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '邀请' : '已邀请' } </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userlist} activeOpacity={0.8} onPress={()=>this.gotoRoute('playerinfo')}>
          <Image style={styles.userlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={styles.userlistcenter} >
            <Text style={commonstyle.white} onPress={()=>this.gotoRoute('playerinfo')}>{'犀利拍立冬至'}</Text>
            <View style={styles.userlistteambox}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:'}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'氦金:'}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
            </View>
            <View style={styles.userlistteambox}>
              <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'擅长英雄:'}</Text>
              <View style={styles.userlisthero}>
                <Image style={styles.userlistheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.userlistheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.userlistheroimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              </View>
            </View>
          </View>
          <TouchableOpacity style = {[this.state.invite==0 ? commonstyle.btnredwhite : commonstyle.btncreamblack, styles.userlistbtn]} activeOpacity={0.8}>
            <Text style = {this.state.invite==0 ? commonstyle.white:commonstyle.black}> { this.state.invite==0 ? '邀请' : '已邀请' } </Text>
          </TouchableOpacity>
        </TouchableOpacity>
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
          <View style={styles.navtab}>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
              <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>加入战队</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
              <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>招募队员</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navsub}>
            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} >
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{this.state.data.subnavbarone}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'(10)'}</Text>
            </TouchableOpacity>

            <View style={styles.navsubline}></View>

            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{this.state.data.subnavbartwo}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'(10)'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollview}>
          {teamlist}
        </ScrollView>
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
