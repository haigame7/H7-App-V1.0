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
  ListView,
  Alert,
  ScrollView
  } = React;

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import MakeChanllenge from './fight/makechanllenge';
import FightState from './fight/fightstate';
import FightService from '../network/fightservice';
import GlobalSetup from '../constants/globalsetup';
import GlobalVariable from '../constants/globalvariable';
import commonstyle from '../styles/commonstyle';
import styles from '../styles/fightstyle';
export default class extends Component{
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      teamlist:[],
      teamlistRequestData:{
          createUserID:'0',
          type:'createdate',
          sort:'desc',
          startpage:GlobalVariable.PAGE_INFO.StartPage,
          pagecount:GlobalVariable.PAGE_INFO.PageCount-1,
      },
      isOpen: false,
      login:0,
      footerMsg: "点击加载更多",
      userteamname:'',
      userteamdata:{
        phone:this.props.phoneNum?this.props.phoneNum : '13439843883' ,
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
  }

  componentDidMount() {
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
       {/*先判断登录*/}
       if(this.state.login==0){
         Alert.alert(this.state.userteamname);
       }else{
         if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
             this.props.navigator.push({ name: name, component: MakeChanllenge, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
         }
       }
    } else if (name == 'fightstate') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
          this.props.navigator.push({ name: name, component: FightState, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    }
  }
  getTeamList(data){
    FightService.getFightTeamList(data,(response) => {
      console.log(response);
      if (response[0].MessageCode == '0') {
        let newData = response[1];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newData),
          teamlist:newData,
        });
      } else {
        console.log('请求错误' + response[0].MessageCide);
      }
    });
      }
  initData(){
    {/*请求我的战队信息*/}
    FightService.getUserDefaultTeam(this.state.userteamdata,(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Alert.alert('服务器请求异常');
        }else if(response.MessageCode == '40002'){
          Alert.alert('token过期');
        }else if(response[0].MessageCode == '20003'){
          this.setState({
            userteamname:'还没有创建战队',
          });
          this.getTeamList(this.state.teamlistRequestData);
        }else if(response[0].MessageCode=='10001'){
          this.setState({
           userteamname:'还没有登录',
          });
          this.getTeamList(this.state.teamlistRequestData);
        }
        else if(response[0].MessageCode == '0'){
          var oddsdata =  this.initTeamOdd(response[1].WinCount,response[1].LoseCount,response[1].FollowCount);
          this.setState({
            userteamname:response[1].TeamName,
            userteamdata:{
              phone:this.state.userteamdata.phone,
              odd:oddsdata.odd,
              asset:response[1].Asset,
              teamlogo:response[1].TeamLogo,
              fightscore:response[1].FightScore,
              wincount:oddsdata.wincount,
              losecount:oddsdata.losecount,
              followcount:oddsdata.followcount,
              totalcount:oddsdata.totalcount,
            },
            login:1,
            teamlistRequestData:{
                createUserID:response[1].Creater,
                type:'teamfightscore',
                sort:'desc',
                startpage:GlobalVariable.PAGE_INFO.StartPage,
                pagecount:GlobalVariable.PAGE_INFO.PageCount-1,
            },
          });
          this.getTeamList(this.state.teamlistRequestData);
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
        <Image style={styles.teamlistimg} source={{uri:this.state.userteamdata.teamlogo || 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <View style={commonstyle.col1}>
          <View style={commonstyle.row}>
            <View style={commonstyle.col1}><Text style={[commonstyle.cream, commonstyle.fontsize14]}>{this.state.userteamname}</Text></View>
            <TouchableOpacity style={[commonstyle.row, styles.teamlistright]} onPress={this._openModa.bind(this)}>
              <Text style={[commonstyle.blue, commonstyle.fontsize12]}>{'约战规则 '}</Text>
              <Icon name='angle-right' size={16}  color={'#00B4FF'}/>
            </TouchableOpacity>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:'}</Text>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '+this.state.userteamdata.fightscore+'  '}</Text>
            <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'氦金:'}</Text>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '+this.state.userteamdata.asset+'  '}</Text>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'胜率: '}{this.state.userteamdata.odd}{'%'}</Text>
            <Progress.Bar progress={this.state.userteamdata.odd/100} width={120} color={'#F39533'} unfilledColor={'#484848'} style={styles.userlistprogress} />
          </View>

          <View style={styles.userlistteambox}>
            <View style={[commonstyle.btnborderblue, styles.userlisttexticon]}>
              <Text style={[commonstyle.blue, commonstyle.fontsize12]}>{'战'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+this.state.userteamdata.totalcount+'  '}</Text>
            <View style={[commonstyle.btnborderorange, styles.userlisttexticon]}>
              <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+this.state.userteamdata.wincount+'  '}</Text>
            <View style={[commonstyle.btnbordercyan, styles.userlisttexticon]}>
              <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+this.state.userteamdata.losecount+'  '}</Text>
            <View style={[commonstyle.btnborderpurple, styles.userlisttexticon]}>
              <Text style={[commonstyle.purple, commonstyle.fontsize12]}>{'拒'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+this.state.userteamdata.followcount+'  '}</Text>
          </View>
        </View>
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    var oddsdata =  this.initTeamOdd(rowData.WinCount,rowData.LoseCount,rowData.FollowCount);

    return(
      <View style={styles.teamlist}>
        <Image style={styles.userlistimg} source={{uri:rowData.TeamLogo}} />
        <View style={commonstyle.col1}>
          <View style={commonstyle.row}>
            <View style={commonstyle.col1}>
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.TeamName}</Text>
              <View style={styles.userlistteambox}>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '+rowData.FightScore+'  '}</Text>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'氦金:'}</Text>
                <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '+rowData.Asset+'  '}</Text>
              </View>
            </View>
            <TouchableOpacity style={[commonstyle.btnredwhite, styles.teamlistbtn]} onPress={()=>this.gotoRoute('makechanllenge')}>
              <Text style={[commonstyle.white, commonstyle.fontsize12]}>{'发起约战 '}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'胜率: '}{oddsdata.odd}{'%'}</Text>
            <Progress.Bar progress={(oddsdata.odd/100)} width={120} color={'#F39533'} unfilledColor={'#484848'} style={styles.userlistprogress} />
          </View>

          <View style={styles.userlistteambox}>
            <View style={[commonstyle.btnborderblue, styles.userlisttexticon]}>
              <Text style={[commonstyle.blue, commonstyle.fontsize12]}>{'战'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+oddsdata.totalcount+'  '}</Text>
            <View style={[commonstyle.btnborderorange, styles.userlisttexticon]}>
              <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+oddsdata.wincount+'  '}</Text>
            <View style={[commonstyle.btnbordercyan, styles.userlisttexticon]}>
              <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+oddsdata.losecount+'  '}</Text>
            <View style={[commonstyle.btnborderpurple, styles.userlisttexticon]}>
              <Text style={[commonstyle.purple, commonstyle.fontsize12]}>{'拒'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'  '+oddsdata.followcount+'  '}</Text>
          </View>
        </View>
      </View>
    );
  }
  _renderFooter() {
    return(
      <TouchableHighlight underlayColor='#000000' style={commonstyle.paginationview} onPress={this._onLoadMore.bind(this)}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
      </TouchableHighlight>
    );
  }
  _onLoadMore() {
    if (this.state.keykey > 0) {
      this.setState({
        footerMsg: "木有更多多数据了~~~~"
      });
    }else{
      let _ds = this.state.teamlist;
      let _params = this.state.teamlistRequestData;
      _params.startpage = _params.startpage+1;
      this.setState({
        footerMsg: "正在加载....."
      });
      {/*加载下一页*/}
      FightService.getFightTeamList(_params,(response) => {
        if (response[0].MessageCode == '0') {
          let nextData = response[1];
          if(nextData.length<4){
            this.setState({
              keykey:1,
            });
          }
          for(var item in nextData){
            _ds.push(nextData[item])
          }
        } else {
          console.log('请求错误' + response[0].MessageCode);
        }
      });
      //这等到有api在搞吧
      setTimeout(()=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(_ds),
          loaded: true,
          footerMsg: "点击加载更多",
        });
      },1000);
    }
  }
  renderFightView() {
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow= {this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        />
      );
  }
  render(){
    let fightview = this.renderFightView();
    let fightrule = this.fightrule();
    let userdefaulteam = this.renderuserdefaulteam();

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
            {fightview}
          </ScrollView>
          {fightrule}
        </View>
      );

}
};
