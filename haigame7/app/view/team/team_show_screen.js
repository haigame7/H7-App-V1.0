'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
import Icon from 'react-native-vector-icons/Iconfont';
import CreateTeam from './team_create_screen';
import TeamRecruit from './teamrecruit';
import Header from '../common/headernav';

export default class extends React.Component {
  /**
   * @param role 队长 captain | 队员：teamuser | 非本队成员: user
   * @return {[type]} [description]
   */
  constructor() {
    super();
    this.state = {
      navigator: undefined,
      teamData:{},
      role: 'user',
      iconText: '添加战队',
      defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
      isOpen: false,
      isDisabled: false,
    }

  }
  componentWillMount(){
      this.setState({
        navigator: this.props.navigator,
        teamData:this.props.teamData,
      });

      if (this.state.role != 'captain') {
        this.setState({
          iconText: undefined,
        });
      }
  }
  _callback() {
    if(this.state.teamData.Role=='teamcreater'){
        this._toNextScreen({"name":"创建战队","component":CreateTeam});
    }
  }
  _toNextScreen(params){
    let _this = this;
    this.props.navigator.push({
      name: params.name,
      component: params.component,
      sceneConfig:params.sceneConfig || undefined,
      params: {
        ...this.props,
        teamData:this.state.teamData,
        _callback(key,params){
        switch (key) {
          case 'UserInfo':
              AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
                let jsondata = JSON.parse(value);
                _this.setState({userData: jsondata})
              });
            break;
        }
      }}
    })
  }
  _openModa() {
    this.setState({isOpen: true});
  }
  _closeModa() {
     this.setState({isOpen: false});
  }
  parseCount(count){
    if(count==null){
      count = 0;
    }else{
      count = parseInt(count);
    }
    return count;
  }
  editTeamMember(){
    console.log('edit');
  }
  initTeamOdd(wincount,losecount,followcount){
    wincount = this.parseCount(wincount);
    losecount = this.parseCount(losecount);
    followcount = this.parseCount(followcount);
    var totalcount  = wincount+losecount+followcount;
    var odd =0;
    if(totalcount!==0){
      odd = wincount*100/totalcount;
    }
    var odddata = {
      wincount:wincount,
      losecount:losecount,
      followcount:followcount,
      totalcount:totalcount,
      odd :odd,
    };
    return odddata;
  }
  render() {
    let odddata = this.initTeamOdd(this.state.teamData.WinCount,this.state.teamData.LoseCount,this.state.teamData.FollowCount);
    let createrOperate = this.state.teamData.Role=='teamcreater'?(
      <View style={styles.listviewbtnblock}>
        <TouchableOpacity style = {[commonstyle.btncreamblack, styles.recruitbtn]} onPress={()=>this._toNextScreen({"name":"发布招募","component":TeamRecruit})} activeOpacity={0.8}>
        <Text style = {commonstyle.black}> {'招募队员'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[commonstyle.btnredwhite, styles.recruitbtn]} activeOpacity={0.8}>
        <Text style = {commonstyle.white}> {'解散战队'}</Text>
        </TouchableOpacity>
      </View>
    ):(<View></View>);
    let teamUser = (
      <View style={styles.listviewteam}>
        <TouchableOpacity style={styles.listviewteamlink} activeOpacity={0.8}><Image style={styles.listviewteamleader} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} /></TouchableOpacity>
        <View style={styles.listviewteamblock}>
          <TouchableOpacity style={styles.listviewteamlink} activeOpacity={0.8}><Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} /></TouchableOpacity>
          <TouchableOpacity style={styles.listviewteamlink} activeOpacity={0.8}><Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} /></TouchableOpacity>
          <TouchableOpacity style={styles.listviewteamlink} activeOpacity={0.8}><Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} /></TouchableOpacity>
          <TouchableOpacity style={styles.listviewteamlink} activeOpacity={0.8}><Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} /></TouchableOpacity>
        </View>
      </View>
      )
    return(
      <View>
        <Header screenTitle='战队信息' isPop={true} iconText={this.state.teamData.Role=='teamcreater'?'添加战队':''} callback={this._callback.bind(this)} navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:this.state.teamData.TeamLogo}} />
              <View style={styles.headportraitv}><Icon name="certified" size={15} color={'#484848'} /></View>
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>{this.state.teamData.TeamName}</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '}{this.state.teamData.FightScore}{'  '}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '}{this.state.teamData.Asset}{'  '}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>战队宣言:{this.state.teamData.TeamDescription}</Text>
              </View>
            </View>
          </Image>

          <View style={styles.listblock}>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队战绩</Text></View>
              <View style={styles.listviewright}>
                <Text style={commonstyle.cream}>参赛场次  </Text>
                <Text style={commonstyle.yellow}>{odddata.totalcount}场</Text>
                <Text style={commonstyle.cream}>  胜率  </Text>
                <Text style={commonstyle.red}>{odddata.odd}%</Text>
              </View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>成立日期</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.teamData.CreateTime}</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>招募信息</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>本队需要辅助一名，擅长XX英雄，战队福利优厚，报名从速...</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队成员</Text></View>
              <View style={styles.listviewright}>
                <TouchableOpacity style={styles.listviewteamedit} onPress={this.state.teamData.Role=='teamcreater'?()=>this.editTeamMember():console.log('teamuser')} activeOpacity={0.8}><Icon name="edit" size={20} color={this.state.teamData.Role=='teamcreater'?'#fff':'#000'} /></TouchableOpacity>
                {teamUser}
              </View>
            </View>
          </View>
            {createrOperate}
        </ScrollView>
      </View>
    );
  }
}
