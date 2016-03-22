'use strict';
/**
 * APP 约战
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');

var Progress = require('react-native-progress');
var {
  View,
  Text,
  Image,
  Component,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  Alert,
  ScrollView
  } = React;

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import MakeChanllenge from './fight/makechanllenge';
import FightState from './fight/fightstate';
import FightService from '../network/fightservice';
import GlobalSetup from '../constants/globalsetup';

import commonstyle from '../styles/commonstyle';
import styles from '../styles/fightstyle';
export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navbar: 0,
      subnavbar:1,
      isOpen: false,
      isDisabled: false,
      invite:0,
      login:0,
      userteamdata:{
        phone:'13439215648',
        teamname:'还没有登录或创建战队',
        odd:0,
        asset:0,
        teamlogo:'',
        fightscore:0,
        losecount:0,
        wincount:0,
        followcount:0,
        totalcount:0,
      },
    }
    this.initData();
  }
  _openModa() {
    console.log(this.state.userteamdata);
    this.setState({isOpen: true});
  }
  _closeModa() {
    console.log('******');
     this.setState({isOpen: false});
  }
  gotoRoute(name){
    if (name == 'makechanllenge') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.push({ name: name, component: MakeChanllenge, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
        }
    } else if (name == 'fightstate') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
          this.props.navigator.push({ name: name, component: FightState, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    }
  }

  initData(){
    {/*请求我的战队信息*/}
    FightService.getUserDefaultTeam(this.state.userteamdata,(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Alert.alert('服务器请求异常');
        }else if(response.MessageCode == '40002'){
          Alert.alert('token过期');
        }else if(response[0].MessageCode == '40003'){
          Alert.alert('没有token');
        }else if(response[0].message=='10001'){
          Alert.alert('请先登录');
        }
        else if(response[0].MessageCode == '0'){
          var oddsdata =  this.initUserTeamOdd(response[1].WinCount,response[1].LoseCount,response[1].FollowCount);
          this.setState({
            userteamdata:{
              phone:'13439843883',
              teamname:response[1].TeamName,
              odd:oddsdata.odd,
              asset:response[1].Asset,
              teamlogo:response[1].TeamLogo,
              fightscore:response[1].FightScore,
              wincount:oddsdata.wincount,
              losecount:oddsdata.losecount,
              followcount:oddsdata.followcount,
              totalcount:oddsdata.totalcount,
            }
          });
        }
      }
      else {
        Alert.alert('请求错误');
        //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
      }
    });
  {/*请求我的战队信息end*/}
  }

  parseCount(count){
    if(count==null){
      count = 0;
    }else{
      count = parseInt(count);
    }
    return count;
  }
  initUserTeamOdd(wincount,losecount,followcount){
    wincount = this.parseCount(wincount);
    losecount = this.parseCount(wincount);
    followcount = this.parseCount(wincount);
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

  fightrule(){
    return(
      <Modal isOpen={this.state.isOpen}  swipeToClose={false} onClosed={this._closeModa.bind(this)} style={[commonstyle.modal, commonstyle.modalbig]} position={"top"} >
        <View style={commonstyle.modaltitle}>
          <Text style={[commonstyle.cream, commonstyle.fontsize14]}>氦7约战规则</Text>
        </View>
        <ScrollView style={commonstyle.modalbody}  showsVerticalScrollIndicator={true} >
          <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
           {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
          </Text>
        </ScrollView>
        <View style={[commonstyle.row, commonstyle.modalbtn]}>
          <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} style={commonstyle.black} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >关闭</Button>
          <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >已阅读</Button>
        </View>
      </Modal>
    );
  }

  renderuserdefaulteam(){
    return(
      <View style={styles.teamlist}>
        <Image style={styles.teamlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <View style={commonstyle.col1}>
          <View style={commonstyle.row}>
            <View style={commonstyle.col1}><Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text></View>
            <TouchableOpacity style={[commonstyle.row, styles.teamlistright]} onPress={this._openModa.bind(this)}>
              <Text style={[commonstyle.blue, commonstyle.fontsize12]}>{'约战规则 '}</Text>
              <Icon name='angle-right' size={16}  color={'#00B4FF'}/>
            </TouchableOpacity>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:'}</Text>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  12345  '}</Text>
            <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'氦金:'}</Text>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  12345  '}</Text>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'胜率: '}{this.state.userteamdata.odd}{'%'}</Text>
            <Progress.Bar progress={0.5} width={120} color={'#F39533'} unfilledColor={'#484848'} style={styles.userlistprogress} />
          </View>

          <View style={styles.userlistteambox}>
            <View style={[commonstyle.btnborderblue, styles.userlisttexticon]}>
              <Text style={[commonstyle.blue, commonstyle.fontsize12]}>{'战'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
            <View style={[commonstyle.btnborderorange, styles.userlisttexticon]}>
              <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
            <View style={[commonstyle.btnbordercyan, styles.userlisttexticon]}>
              <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
            <View style={[commonstyle.btnborderpurple, styles.userlisttexticon]}>
              <Text style={[commonstyle.purple, commonstyle.fontsize12]}>{'拒'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderfightlist(){
    return(
      <View style={styles.teamlist}>
        <Image style={styles.userlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <View style={commonstyle.col1}>
          <View style={commonstyle.row}>
            <View style={commonstyle.col1}>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'战队名称'}</Text>
              <View style={styles.userlistteambox}>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  12345  '}</Text>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'氦金:'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  12345  '}</Text>
              </View>
            </View>
            <TouchableOpacity style={[commonstyle.btnredwhite, styles.teamlistbtn]} onPress={()=>this.gotoRoute('makechanllenge')}>
              <Text style={[commonstyle.white, commonstyle.fontsize12]}>{'发起约战 '}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'胜率: '}{this.state.userteamdata.odd}{'%'}</Text>
            <Progress.Bar progress={0.5} width={120} color={'#F39533'} unfilledColor={'#484848'} style={styles.userlistprogress} />
          </View>

          <View style={styles.userlistteambox}>
            <View style={[commonstyle.btnborderblue, styles.userlisttexticon]}>
              <Text style={[commonstyle.blue, commonstyle.fontsize12]}>{'战'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
            <View style={[commonstyle.btnborderorange, styles.userlisttexticon]}>
              <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
            <View style={[commonstyle.btnbordercyan, styles.userlisttexticon]}>
              <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
            <View style={[commonstyle.btnborderpurple, styles.userlisttexticon]}>
              <Text style={[commonstyle.purple, commonstyle.fontsize12]}>{'拒'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  1000  '}</Text>
          </View>
        </View>
      </View>
    )
  };

  render(){
    let fightrule = this.fightrule();
    let userdefaulteam = this.renderuserdefaulteam();
    let fightlist = this.renderfightlist();
    if(this.state.login==1){
      return (
        <View style={styles.container}>
          <View style={styles.nav}>
            <View style={styles.navsub}>
              <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress={null}>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'我的约战'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'(10)'}</Text>
              </TouchableOpacity>

              <View style={styles.navsubline}></View>

              <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress={()=>this.gotoRoute('fightstate')}>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'约战动态'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'(10)'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.scrollview}>
            {userdefaulteam}
          </ScrollView>
          {fightrule}
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <View style={styles.nav}>
            <View style={styles.navsub}>
              <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress={null}>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'我的约战'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'(10)'}</Text>
              </TouchableOpacity>

              <View style={styles.navsubline}></View>

              <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress={()=>this.gotoRoute('fightstate')}>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'约战动态'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'(10)'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.scrollview}>
            {userdefaulteam}
            {fightlist}
            {fightlist}
            {fightlist}
            {fightlist}
          </ScrollView>
          {fightrule}
        </View>
      );
    }
}
};
