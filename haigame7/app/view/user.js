'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
import Colors from '../components/common/colors';
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  Navigator,
  ScrollView,
  AsyncStorage
  } = React;


import commonstyle from '../styles/commonstyle';
import styles from '../styles/userstyle';
import UserInfo from './user/userinfo';
import Setting from './user/setting';
import UserSign from './user/usersign';
import UserCertify from './user/usercertify';
import UserAsset from './user/userasset';
import UserMatch from './user/usermatch';
import UserFight from './user/userfight';
import UserTask from './user/usertask';
import UserGuess from './user/userguess';
import Usercertify from './user/usercertify'
import Login from './user/login';
import RegisterScreen from './user/registerscreen';
import MyTeam from './team/team_show_screen';
import CreateTeam from './team/team_create_screen';
import MyMsg from './user/message_list_screen';
import UserService from '../network/userservice';
import TeamService from '../network/teamservice';
import AssertService from '../network/assertservice';
import GlobalVariable from '../constants/globalvariable';

import Toast from '@remobile/react-native-toast';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
//试试ES6的类属性

var User = React.createClass({
  getInitialState() {
    return {
      _navigator: this.props.navigator,
      userData: this.props.userData,
      isOpen: false,
      modalOpen:false,
      teamData:{},
      hjData: {'totalAsset': 0,'myRank': 1},
      fightData: {"UserID":'',"GameID":"","GamePower":"0","CertifyState":1,"CertifyName":""}
    };
  },
  componentWillReceiveProps(nextProps,nextState) {
  },
  componentWillMount() {
   if(this.props.openmodal){
     this._openModa();
   }
  },
  componentDidMount() {
    this.setState({
      isOpen: true
    })
    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
      let jsondata = JSON.parse(value);
      this.setState({userData: jsondata})
      setTimeout(() => {
        this.getUserGameInfo(jsondata.PhoneNumber)
        this.getUserTeamInfo(jsondata.UserID)
        this.getUserMessage(jsondata.UserID)
        this.getTotalAssertAndRank(jsondata.PhoneNumber)
      },400)
    });
  },
  _userTeam(params){
    if(params.Role==null){
        this.setState({modalOpen: true});
    }else{
      this._toNextScreen({"name":"我的战队","component":MyTeam});
    }
  },
  _closeModa() {
     this.setState({modalOpen: false});
  },
  _openModa() {
     this.setState({modalOpen: true});
  },
  _createTeam(){
    this._toNextScreen({"name":"创建战队","component":CreateTeam});
  },
  _joinTeam(){
    if(this.props.gotoRef){
      this.props.gotoRef("组队");
    }
   this.props.navigator.pop();
  },
  getUserGameInfo(phoneNum) {
    UserService.getUserGameInfo(phoneNum,(response) =>　{
      if (response[0].MessageCode == '0' || response[0].MessageCode == '10008') {
        if(response[0].MessageCode == '10008') {
          // console.log(response[0].Message);
          this.setState({fightData: {"UserID":64,"GameID":"173032376","GamePower":"无数据","CertifyState":1,"CertifyName":"氦七G9SJkIJQ8l+uZP4BJEVZ+aHEtLY="}})
        } else {
          let data = {"UserID":response[1].UserID,"GameID":response[1].GameID,"GamePower":response[1].GamePower,"CertifyState":response[1].CertifyState,"CertifyName":response[1].CertifyName};
          // console.log(data);
          this.setState({fightData: data})
        }
      } else {
        console.log('获取用户数据失败' + response[0].Message);
        Alert.alert(response[0].Message);
      }
    })
  },
  getUserTeamInfo(phoneNum) {
    TeamService.getUserDefaultTeam(phoneNum,(response) => {
      if (response[0].MessageCode == '0'||response[0].MessageCode == '20003') {
              this.setState({teamData: response[1]});
      }else{
        console.log('请求错误' + response[0].Message);
        this.setState({teamData:{}});
      }
    });
  },
  getTotalAssertAndRank(phoneNum) {
    AssertService.getTotalAssertAndRank(phoneNum,(response) => {
      // console.log(response);
      if (response[0].MessageCode == '0') {
        let data = {'totalAsset': response[1].TotalAsset,'myRank': response[1].MyRank}
        this.setState({
          hjData: data,
          isOpen: false
        });
      } else {
        console.log('请求错误' + response[0].Message);
        this.setState({isOpen: false});
      }
    })
  },
  getUserMessage(userMessage){
    UserService.getUserMessage(userMessage,(response) =>{
      if (response[0].MessageCode == '0') {
        this.setState({
          totalMessage: response[0].Message,
        });
      } else {
        console.log('请求错误' + response[0].Message);
      }
    })
  },

  _toNextScreen(params){
    // Toast.show("this is a message")
    // console.log(this.state.fightData);
    let _this = this;
    this.state._navigator.push({
      name: params.name,
      component: params.component,
      sceneConfig:params.sceneConfig || undefined,
      params: {
        ...this.props,
        userData:this.state.userData,
        hjData: this.state.hjData,
        teamData:this.state.teamData,
        fightData: this.state.fightData,
        _callback(key,params){
        switch (key) {
          case 'UserInfo':
              AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
                let jsondata = JSON.parse(value);
                _this.setState({userData: jsondata})
              });
            break;
          case 'Usercertify':
              console.log('认证回调');
              _this.getUserGameInfo(_this.state.userData.PhoneNumber)
            break;
          case 'MyMsg':
              console.log('消息回调');
              _this.getUserMessage(_this.state.userData.UserID)
            break;
          case 'TeamInfo':
              _this.getUserTeamInfo(_this.state.userData.UserID);
              _this.setState({modalOpen: false});
              break;
          default:

        }
      }}
    })
  },
  render: function () {
    return (
      <View >
      <Header  screenTitle='个人中心' iconName='email' iconMessage={this.state.totalMessage} nextComponent={{name:"信息",component:MyMsg,sceneConfig:Navigator.SceneConfigs.FloatFromBottom}} userData={this.state.userData} navigator={this.props.navigator}/>
      <ScrollView style={commonstyle.bodyer}>
        <Image source={require('../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
          <TouchableOpacity style={styles.blocktop} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"UserInfo","component":UserInfo})}>
            <Image style={styles.headportrait} source={{uri:this.state.userData.UserWebPicture || 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <TouchableOpacity style={styles.headportraitv} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"UserCertify","component":UserCertify})}><Icon name="certified" size={15} color={this.state.fightData.CertifyState == 1? '#00B4FF':'#484848'} style={commonstyle.iconnobg} /><Text style={styles.headportraitvfont}>{this.state.fightData.CertifyState == 1?'已认证':'未认证'}</Text></TouchableOpacity>
          </TouchableOpacity>

          <View style={styles.blocktop}>
            <Text style={[styles.headname, commonstyle.white]}>{this.state.userData.UserWebNickName}</Text>
            <TouchableOpacity style={styles.headtext}>
              <Text style={[commonstyle.cream, styles.headtextfont]}>{this.state.userData.Hobby}</Text>
            </TouchableOpacity>
          </View>

          <View style={[commonstyle.row, styles.headtab]}>
            <View style={[commonstyle.col1, styles.headtabli]}>
              <TouchableOpacity style={[commonstyle.col1, styles.headtabli]} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"Usercertify","component":Usercertify})}>
                <Text style={[styles.headtabtitle, commonstyle.yellow]}>战斗力</Text>
                <Text style={[styles.headtabnumber, commonstyle.cream]}>{this.state.fightData.GamePower | 0}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headtabline} ></View>
            <TouchableOpacity style={[commonstyle.col1, styles.headtabli]} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"UserAsset","component":UserAsset})}>
              <Text style={[styles.headtabtitle, commonstyle.yellow]}>氦金</Text>
              <Text style={[styles.headtabnumber, commonstyle.red]}>{this.state.hjData.totalAsset}</Text>
            </TouchableOpacity>
            <View style={styles.headtabline} ></View>
            <View style={[commonstyle.col1, styles.headtabli]}>
              <Text style={[styles.headtabtitle, commonstyle.yellow]}>游戏</Text>
              <Text style={[styles.headtabnumber, commonstyle.red]}>DOTA2</Text>
            </View>
          </View>
        </Image>

        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._userTeam.bind(this,this.state.teamData)}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="team" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的战队</Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的赛事","component":UserMatch})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#00b4ff'}]}>
            <Icon name="cup" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的赛事</Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的约战","component":UserFight})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#ff7062'}]}>
            <Icon name="medal" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的约战</Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的竞猜","component":UserGuess})}>

          <View style={[styles.listviewiconleft,{backgroundColor:'#30ccc2'}]}>
            <Icon name="dollar" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的竞猜</Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的任务","component":UserTask})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#c13380'}]}>
            <Icon name="file" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的任务</Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>

        <View style={styles.listbox}></View>

        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"设置","component":Setting})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#3543e7'}]}>
            <Icon name="site" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>设置</Text>
          <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <View style={styles.listboxfoot}></View>
      </ScrollView>
      <Modal isOpen={this.state.modalOpen}  style={[commonstyle.modal, commonstyle.modalmiddle]} position={"center"}>
         <View style={commonstyle.modalclose}><Button onPress={this._closeModa} ><Icon name="error" size={20} color={'#FF0000'} /></Button></View>
         <View style={commonstyle.modaltext}>
           <Text style={commonstyle.cream}>亲爱的用户，你还没有建立或加入战队呢，赶快点击下面按钮，开启你的约战之旅吧！！！</Text>
           <Text style={commonstyle.cream}>说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊</Text>
         </View>
         <View style={[commonstyle.row, commonstyle.modalbtn]}>
           <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} activeOpacity={0.8}  onPress={this._createTeam} style={commonstyle.black}>创建战队</Button>
           <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} activeOpacity={0.8}  onPress={this._joinTeam} style={commonstyle.white}>加入战队</Button>
         </View>
       </Modal>
    </View>
    );
  }
});

module.exports = User;
