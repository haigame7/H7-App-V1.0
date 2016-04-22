'use strict';
/**
 * APP 约战
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');

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
import UserFight from './user/userfight';
import FightService from '../network/fightservice';
import TeamService from '../network/teamservice';
import GlobalSetup from '../constants/globalsetup';
import GlobalVariable from '../constants/globalvariable';
import commonstyle from '../styles/commonstyle';
import styles from '../styles/fightstyle';
import Toast from '@remobile/react-native-toast';
import Login from './user/login';
import User from './user.js';
export default class extends Component{
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      teamlist:[],
      teamlistRequestData:{
          createUserID:'0',
          type:'teamfightscore',
          teamfightscore:0,
          userfightscore:0,
          sort:'desc',
          startpage:GlobalVariable.PAGE_INFO.StartPage,
          pagecount:GlobalVariable.PAGE_INFO.PageCount-1,
      },
      isOpen: false,
      content:{
        userData:{},
      },
      login:0,
      footerMsg: "点击加载更多",
      userteamname:'',
      userteamid:0,
      userteamdata:{
        phone:'',
        odd:0,
        asset:0,
        teamlogo:'',
        fightscore:0,
        losecount:0,
        role:'',
        usercount:0,
        wincount:0,
        followcount:0,
        totalcount:0,
      },
    }
  }

  componentDidMount() {

  }
  updateContentData(content){
    this.setState({
      content: content,
    });
   this.initData();
  }
  _openModa() {
    this.setState({isOpen: true});
  }
  _closeModa() {
     this.setState({isOpen: false});
  }
  gotoRoute(name,userteamid,fightteamid){
    {/*先判断登录*/}
    if(this.state.content.userData.UserID==undefined&&name !== 'fightstate'){
      this.props.navigator.push({
        name:'login',
        component:Login,
        params:{...this.props},
       sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      });
    }else if(this.state.userteamid==0 &&name !== 'fightstate'){
      this.props.navigator.push({
        name:'user',
        component:User,
        params:{'userData':this.state.content.userData,'openmodal':true},
        sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      });
    }else{
      if (name == 'makechanllenge') {
         if(this.state.userteamdata.role=='teamuser'){
           Toast.showLongCenter('您不是队长无法发起约战');
         }else if(this.state.userteamdata.usercount<4){
           Toast.showLongCenter('战队成员不够5人无法发起约战');
         }else{
           if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
               this.props.navigator.push({
                 name: name,
                 params:{
                   userid:this.state.teamlistRequestData.createUserID,
                   steamid:userteamid,
                   eteamid:fightteamid,
                   teamasset:this.state.userteamdata.asset,
                 },
                 component: MakeChanllenge,
                 sceneConfig: Navigator.SceneConfigs.FloatFromBottom
               });
           }
         }
       }
     else if (name == 'fightstate') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
          this.props.navigator.push({ name: name, component: FightState, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    }
    else if (name == 'userfight') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.push({
              name: name,
              component: UserFight,
              params:{
                userData:this.state.content.userData,
              },
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
        }

    }
  }
}
  getTeamList(data){
    TeamService.getTeamList(data,(response) => {
      // console.log(response);
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
    TeamService.getUserDefaultTeam(this.state.content.userData.UserID,(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Toast.show('服务器请求异常');
        }else if(response.MessageCode == '40002'){
          Toast.show('token过期');
        }else if(response[0].MessageCode == '20003'){
          this.setState({
            userteamname:'还没有创建战队',
          });
        }else if(response[0].MessageCode=='10001'){
          this.setState({
           userteamname:'还没有登录',
          });
        }
        else if(response[0].MessageCode == '0'){
          var oddsdata =  this.initTeamOdd(response[1].WinCount,response[1].LoseCount,response[1].FollowCount);
          this.setState({
            userteamname:response[1].TeamName,
            userteamid:response[1].TeamID,
            userteamdata:{
              phone:this.state.userteamdata.phone,
              odd:oddsdata.odd,
              asset:response[1].Asset,
              teamlogo:response[1].TeamLogo,
              role:response[1].Role,
              usercount:response[1].UserCount,
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
                teamfightscore:response[1].FightScore,
                sort:'desc',
                startpage:GlobalVariable.PAGE_INFO.StartPage,
                pagecount:GlobalVariable.PAGE_INFO.PageCount-1,
            },
          });
        }
        this.getTeamList(this.state.teamlistRequestData);
      }
      else {
        Toast.show('请求错误');
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
      odd = Math.round(wincount*100/totalcount);
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
          <View style={commonstyle.modalbodybottom}>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>
             {'1.	向对方发起约战，必须填写押注金额，押注金额最低为50氦金，不设立上限；\n\n'}

             {'2.	向对方发起约战，必须填写约战日期，双方战队需在所选日期24小时之内进行比赛；\n\n'}

             {'3.	如果想要加注或者更改约战日期，必须经过双方的同意，无法单方私自修改任何已经双方定好的约战内容；\n\n'}

             {'4.	每支战队同一天之内的24小时之内只能约战一次；\n\n'}

             {'5.	发起约战之后需要等待对方回应，如果发起约战的时间对方不同意，则双方协商修改，待时间修改完成，双方确认，约战正式生成；\n\n'}

             {'6.	如果被约战队伍因任何原因拒绝约战，则视为“认怂”计入战队档案；\n\n'}

             {'7.	被约战战队需在24小时的回应时间，如果在24小时之内未回复，则视为“认怂”，记入档案；\n\n'}

             {'8.	当约战生成之后，双方需要在约定日期进行约战。如果有一方在规定日期未上线进行比赛则视为该战队“认怂”记入档案；\n\n'}

             {'9.	比赛之后，胜负双方必须上传比赛ID，如果有一方未上传比赛ID则视为该队比赛失利，如果双方均未上传比赛ID，则视为双方均“认怂”记入档案。如果双方上传的比赛ID不一样，经核实之后，上传虚假比赛ID一方的队长永久取消比赛资格，没收所有个人氦金和该战队氦金；\n\n'}

             {'10.	双方正常上传比赛ID之后，由氦7平台判断胜负。一切该比赛的所有权和解释权归氦7平台所有。'}
            </Text>
          </View>
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
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'胜率: '}{this.state.userteamdata.odd.toString().substr(0, 5)}{'%'}</Text>
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
            <TouchableOpacity style={[commonstyle.btnredwhite, styles.teamlistbtn]} onPress={()=>this.gotoRoute('makechanllenge',this.state.userteamid,rowData.TeamID)}>
              <Text style={[commonstyle.white, commonstyle.fontsize12]}>{'发起约战 '}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userlistteambox}>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'胜率: '}{oddsdata.odd.toString().substr(0, 5)}{'%'}</Text>
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
      TeamService.getTeamList(_params,(response) => {
        if (response[0].MessageCode == '0') {
          let nextData = response[1];
          if(nextData.length<4){
            this.setState({
              keykey:1,
            });
            setTimeout(()=>{
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(_ds),
                loaded: true,
                footerMsg: "木有更多多数据了~~~~",
              });
            },1000);
          }else{
            for(var item in nextData){
              _ds.push(nextData[item])
            }
            setTimeout(()=>{
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(_ds),
                loaded: true,
                footerMsg: "点击加载更多",
              });
            },1000);
          }
        } else {
          console.log('请求错误' + response[0].MessageCode);
        }
      });
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
      <View style={commonstyle.viewbodyer}>
        <View style={styles.nav}>
          <View style={styles.navsub}>
            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress={()=>this.gotoRoute('userfight',this.state.userteamid,0)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'我的约战'}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{''}</Text>
            </TouchableOpacity>

            <View style={styles.navsubline}></View>

            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress={()=>this.gotoRoute('fightstate',this.state.userteamid,0)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'约战动态'}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{''}</Text>
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
