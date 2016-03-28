'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
import Colors from '../components/common/colors';
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
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
import ZHRB from '../../temp/zhrb';
import Gwdemo from '../../temp/gwdemo';
import MyMsg from './user/message_list_screen';
import ReSetPwd from './user/reset_pwd_screen';
import About from './user/about_screen';
import Share from './user/share_screen';
import Help from './user/help_screen';
import HintCreatTeamScreen from './user/hint_createteam_screen';
import UserService from '../network/userservice';
import AssertService from '../network/assertservice';
import Spinner from 'react-native-loading-spinner-overlay';
import GlobalVariable from '../constants/globalvariable';
//试试ES6的类属性

var User = React.createClass({
  getInitialState() {
    console.log('UserScreen Init Data');
    return {
      _navigator: this.props.navigator,
        userData: this.props.userData,
          isOpen: false,
          hjData: {'totalAsset': 888,'myRank': 1},
        fightData: {"UserID":'',"GameID":"","GamePower":"0","CertifyState":1,"CertifyName":""}
    };
  },
  componentWillReceiveProps(nextProps,nextState) {
    // AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
    //   let jsondata = JSON.parse(value);
    //   this.setState({userData: jsondata})
    // });
  },
  componentWillMount() {
    this.setState({isOpen: true})
    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
      let jsondata = JSON.parse(value);
      this.setState({userData: jsondata})
      UserService.getUserGameInfo(jsondata.PhoneNumber,(response) =>　{
        if (response[0].MessageCode == '0' || response[0].MessageCode == '10008') {
          if(response[0].MessageCode == '10008') {
            // console.log(response[0].Message);
            this.setState({fightData: {"UserID":64,"GameID":"173032376","GamePower":"无数据","CertifyState":1,"CertifyName":"氦七G9SJkIJQ8l+uZP4BJEVZ+aHEtLY="}})
          } else {
            let data = {"UserID":response[1].UserID,"GameID":response[1].GameID,"GamePower":response[1].GamePower,"CertifyState":response[1].CertifyState,"CertifyName":response[1].CertifyName};
            this.setState({fighData: data})
          }
        } else {
          console.log('获取用户数据失败' + response[0].Message);
          Alert.alert(response[0].Message);
        }
      })

      AssertService.getTotalAssertAndRank(jsondata.PhoneNumber,(response) => {
        console.log(response);
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
      });
    });
  },
  componentDidMount() {
  },
  _toNextScreen(params){
    this.state._navigator.push({
      name: params.name,
      component: params.component,
      sceneConfig:params.sceneConfig || undefined,
      params: {...this.props,...this.state,_callback(key,params){
        switch (key) {
          case 'UserInfo':
              console.log('用户信息回掉');
              AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
                let jsondata = JSON.parse(value);
                this.setState({userData: jsondata})
              });
            break;
          case 'Usercertify':
              console.log('认证回调');
            break;
          default:

        }
      }}
    })
  },
  render: function () {
    return (
      <View >
      <Header screenTitle='个人中心'  iconName='folder'   nextComponent={{name:'ZHRB',component:ZHRB}} navigator={this.props.navigator}/>
      <ScrollView style={commonstyle.bodyer}>
        <Image source={require('../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
          <TouchableOpacity style={styles.blocktop} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"UserInfo","component":UserInfo})}>
            <Image style={styles.headportrait} source={{uri:this.state.userData.UserWebPicture || 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.headportraitv}><Icon name="book" size={15} color={'#484848'} /><Text style={styles.headportraitvfont}>未认证</Text></View>
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
                <Text style={[styles.headtabnumber, commonstyle.cream]}>{this.state.fightData.GamePower}</Text>
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

        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"信息","component":MyMsg,"sceneConfig":Navigator.SceneConfigs.FloatFromBottom})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的消息</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"重置密码","component":ReSetPwd})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>重置密码密码</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"关于H7","component":About})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>关于H7</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"分享","component":Share})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>分享</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"帮助与反馈","component":Help})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>帮助与反馈</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"提示创建战队","component":HintCreatTeamScreen})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>提示创建战队</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>

        <View style={styles.listbox}></View>

        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的战队","component":MyMsg})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#f39533'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的战队</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"注册","component":RegisterScreen})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#00b4ff'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>注册</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的赛事","component":UserCertify})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#ff7062'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的约战</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的竞猜","component":Setting})}>

          <View style={[styles.listviewiconleft,{backgroundColor:'#30ccc2'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的竞猜</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"我的任务","component":Setting})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#c13380'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>我的任务</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>

        <View style={styles.listbox}></View>

        <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"设置","component":Setting})}>
          <View style={[styles.listviewiconleft,{backgroundColor:'#3543e7'}]}>
            <Icon name="book" size={20} color={'#fff'} />
          </View>
          <Text style={styles.listviewtext}>设置</Text>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </TouchableOpacity>

        <View style={styles.listbox}></View>
        <View style={styles.listbox}></View>
        <Spinner visible={this.state.isOpen} />
      </ScrollView>

    </View>
    );
  }
});

module.exports = User;
