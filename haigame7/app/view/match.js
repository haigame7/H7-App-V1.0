'use strict';
/**
 * APPs我的赛事
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */

import React, {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ListView,
  Component,
  TouchableOpacity,
  Navigator,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
var Icon = require('react-native-vector-icons/Iconfont');
var commonstyle = require('../styles/commonstyle');
var styles = require('../styles/matchstyle');
import MatchRule from './match/matchrule';
import MatchSchedule from './match/matchschedule';
import MatchService from '../network/matchservice';
import GuessService from '../network/guessservice';
import FightService from '../network/fightservice';
import GlobalSetup from '../constants/globalsetup';
import GlobalVariable from '../constants/globalvariable';
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modalbox';
import Toast from '@remobile/react-native-toast';
import Button from 'react-native-button';

export default class extends Component{
  constructor(props) {
    super(props);
      var databobo = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var dataguess = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var datamyguess = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      navbar: 0,
      databoboSource: databobo.cloneWithRows([]),
      dataguessSource:dataguess.cloneWithRows([]),
      datamyguessSource:datamyguess.cloneWithRows([]),
      bobolist:[],
      guesslist:[],
      isOpen:false,
      loaded:false,
      joincount:-1,
      jointeam:'',
      jointime:'',
      userphone:this.props.phoneNum?this.props.phoneNum : '13439843883' ,
      guessmoney:0,
      userdata:{
        userid:0,
        userteamid:0,
        userasset:0
      },
      matchdata:{
        matchID:0,
        matchname:'',
        showpicture:'',
        introduce:'',
      },
      modaData:"",
      }

    }
    updateContentData(content){
      this.setState({
        content: content
      });
    }
    componentWillMount() {
    this.setState({loaded: true})
    this.initData();
    }
    componentDidMount(){

    }
    initData(){
      {/*请求我的战队信息*/}
      FightService.getUserDefaultTeam({phone:this.state.userphone},(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Toast.show('服务器请求异常');
        }else if(response[0].MessageCode == '0'){
          this.setState({
           userdata:{
             userid:response[1].Creater,
            userteamid:response[1].TeamID,
            userasset:response[1].Asset,
          },
          });
        }
       }else{
           Toast.show('请求错误');
       }
     });
     this.getMatchList();
     this.getGuessList();
    }
    getMatchList(){
      {/*请求赛事信息*/}
       MatchService.getMatchList((response) => {
         if (response !== GlobalSetup.REQUEST_SUCCESS) {
           if(response[0].MessageCode == '40001'){
             Toast.show('服务器请求异常');
           }else if(response[0].MessageCode == '0'){
             this.setState({
               matchdata:{
                 matchID:response[1][0].MatchID,
                 matchname:response[1][0].MatchName,
                 showpicture:response[1][0].ShowPicture,
                 introduce:response[1][0].Introduce,
               },

             });
              this.getBoBoList(this.state.matchdata);
            }
          }
           else{
               Toast.show('请求错误');
             }
       });
    }
    getGuessList(){
      {/*请求赛事信息*/}
       GuessService.getGuessList((response) => {
         if (response !== GlobalSetup.REQUEST_SUCCESS) {
           if(response[0].MessageCode == '40001'){
             Toast.show('服务器请求异常');
           }else if(response[0].MessageCode == '0'){
              let newData = response[1];
             this.setState({
               dataguessSource: this.state.dataguessSource.cloneWithRows(newData),
               guesslist:newData,
             });

            }
          }
           else{
               Toast.show('请求错误');
             }
       });
    }

    getBoBoList(matchdata){
      MatchService.getBoBoList(matchdata,(response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Toast.show('服务器请求异常');
          }else if(response[0].MessageCode == '0'){
            let newData = response[1];
            let groups=this.groupItems(newData,3);
            this.setState({
              databoboSource: this.state.databoboSource.cloneWithRows(groups),
              bobolist:newData,
              loaded:false,
            });
           }
         }
          else{
              Toast.show('请求错误');
            }
      });
    }
    groupItems(items, itemsPerRow){
       var itemsGroups = [];
       var group = [];
       items.forEach(function(item) {
         if (group.length === itemsPerRow) {
           itemsGroups.push(group);
           group = [item];
         } else {
           group.push(item);
         }
       });
       if (group.length > 0) {
         itemsGroups.push(group);
       }
       return itemsGroups;
   }
    _openBoBoModa(rowData) {
      MatchService.getBoBoCount(rowData,(response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Toast.show('服务器请求异常');
          }else if(response[0].MessageCode == '0'){
            this.setState({
               joincount:response[1].JoinCount,
            });
         }
       }
          else{
              Toast.show('请求错误');
            }
      });
      MatchService.myJoinMatch({matchID:rowData.MatchID,teamID:this.state.userdata.userteamid},(response2) => {
      if (response2 !== GlobalSetup.REQUEST_SUCCESS) {
          if(response2[0].MessageCode == '50001'){
            this.setState({
            isOpen: true,
            modaData:rowData
            });
          }
        else if(response2[0].MessageCode == '0'){
          this.setState({
           isOpen: true,
           modaData:rowData,
           jointeam:response2[1].Name,
           jointime:response2[1].ApplyTime
      });
      }
     }
   });
    }
    _openGuessModa(rowData) {
      GuessService.myGuessList({userID:this.state.userdata.userid,guessID:rowData.guessid,startpage:GlobalVariable.PAGE_INFO.StartPage,pagecount:GlobalVariable.PAGE_INFO.PageCount},(response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Toast.show('服务器请求异常');
          }else if(response[0].MessageCode == '0'){
            let newData = response[1];
            this.setState({
              datamyguessSource: this.state.datamyguessSource.cloneWithRows(newData),
              isOpen: true,
              modaData:rowData
            });
           }
         }
          else{
              Toast.show('请求错误');
            }
      });
    }
    _closeModa() {
       this.setState({isOpen: false});
    }
    _doBet(params){
      GuessService.doGuessBet(params,(response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Toast.show('服务器请求异常');
          }else if(response[0].MessageCode == '0'){
           Toast.showLongCenter('下注成功');
         }
         {/*更新请求*/}
         setTimeout(()=>{
         this.getGuessList();
         this.setState({isOpen: false});
        },1000);
       }
        else{
              Toast.show('请求错误');
          }
      });
    }
    _joinMatch(params){
      if(params.jointeam!==''){
        Toast.showLongCenter('您已报名'+params.jointeam+'!');
      }else{
        MatchService.joinMatch(params,(response) => {
          if (response !== GlobalSetup.REQUEST_SUCCESS) {
            if(response[0].MessageCode == '40001'){
                Toast.show('服务器请求异常');
            }else if(response[0].MessageCode == '0'){
             Toast.showLongCenter('报名成功');
              this.setState({isOpen: false});
           }
         }
          else{
                Toast.show('请求错误');
            }
        });
      }
    }


  _switchNavbar(nav){
   this.setState({
   navbar:nav,
   });
   return;
   }
   gotoRoute(name,params) {
    if (name == 'matchrule') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.push({ name: name, component: MatchRule, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
        }
    } else if (name == 'matchschedule') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
        this.props.navigator.push({ name: name, component: MatchSchedule, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    }
    }
  rendermodaldetail(){
    if(this.state.navbar==0){
      {/*获得已报名战队数*/}
      let joinView =this.state.jointeam==''?<View></View>:<View><Text style={[commonstyle.red,commonstyle.fontsize12]}>{'您已加入'}{this.state.jointeam}{',报名结束后为您生成赛事信息,请关注'}</Text></View>

      return(
        <Modal isOpen={this.state.isOpen}  swipeToClose={false}  style={[commonstyle.modal,commonstyle.modalbig]}  position={"top"} >
          <View style={styles.modalheader}>
            <Image style={styles.modalimg} source={{uri:this.state.modaData.UserPicture}} />
            <Text style={[commonstyle.white, commonstyle.fontsize14, styles.modalfont]}>{this.state.modaData.Name}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.modalfont]}>{'生命不息电竞不止,来吧加入我的战队'}</Text>
            <Text style={[commonstyle.yellow, commonstyle.fontsize14, styles.modalfont]}>{'主播名额  '}<Text style={commonstyle.red}>{this.state.joincount}{'/'}{this.state.modaData.Count}</Text></Text>
          </View>
          <ScrollView style={styles.modalscrollview} showsVerticalScrollIndicator={true} >
            <View style={commonstyle.viewleft}>
              <Text style={commonstyle.cream}>{'ID:      '} <Text style={commonstyle.white}>{'12312423'}</Text></Text>
              <Text style={commonstyle.cream}>{'性别:  '} <Text style={commonstyle.white}>{this.state.modaData.Sex}</Text></Text>
              <Text style={commonstyle.cream}>{'年龄:  '} <Text style={commonstyle.white}>{this.state.modaData.Age}</Text></Text>
              <Text style={commonstyle.cream}>{'介绍:  '} <Text style={commonstyle.white}>{this.state.modaData.Introduce}</Text></Text>
            </View>
            {joinView}
          </ScrollView>
          <View style={[commonstyle.row, commonstyle.modalbtn]}>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} style={commonstyle.black} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >关闭</Button>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._joinMatch.bind(this,{'matchID':this.state.modaData.MatchID,'boboID':this.state.modaData.BoBoID,'teamID':this.state.userdata.userteamid,'phone':this.state.userphone,'jointeam':this.state.jointeam})} >加入战队</Button>
          </View>
        </Modal>
      );
    }else{
      return(
        <Modal isOpen={this.state.isOpen}  swipeToClose={false} onClosed={this._closeModa.bind(this)} style={[commonstyle.modal, commonstyle.modalbig, styles.modalbgopacity]} position={"top"} >
          <View style={[styles.modalheader]}>
            <Text style={[commonstyle.cream, styles.modaltext]}>{'您的选择：'}{this.state.modaData.guessname}{' 获胜'}</Text>
            <View  style = {styles.modalinput }>
              <TextInput placeholder={'押注最小氦金为10氦金,请输入押注金额'} placeholderTextColor='#484848' style={styles.modalinputfont}  onChangeText = {(text) => this.state.guessmoney = text }/>
            </View>
            <View style ={commonstyle.row}>
              <View style={commonstyle.col1}><Text style={[commonstyle.cream, styles.modaltext]}>{'  可用氦金:  '}<Text style={commonstyle.yellow}>{this.state.userdata.userasset}</Text></Text></View>
              <View style={commonstyle.col1}><Text style={[commonstyle.cream, styles.modaltext]}>{'  预估收益:  '}<Text style={commonstyle.yellow}>{(this.state.userdata.userasset*this.state.modaData.guessodd)}</Text></Text></View>
            </View>
          </View>

          <View style={commonstyle.row}>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} style={commonstyle.black} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >取消关闭</Button>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._doBet.bind(this,{'guessID':this.state.modaData.guessid,'userID':this.state.userdata.userid,'teamID':this.state.modaData.guessteamid,'money':this.state.guessmoney,'odds':this.state.modaData.guessodd})} >确认下注</Button>
          </View>

          <View style={styles.modalfooter}>
            <View style={[commonstyle.row, styles.modaltabhead]}>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Text style={[commonstyle.red,commonstyle.fontsize12]}>{'时间'}</Text>
              </View>
              <View style={styles.modaltabline} ></View>
              <View style={[commonstyle.col2, commonstyle.viewcenter]}>
                <Text style={[commonstyle.red,commonstyle.fontsize12]}>{'押注项'}</Text>
              </View>
              <View style={styles.modaltabline} ></View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Text style={[commonstyle.red,commonstyle.fontsize12]}>{'金额'}</Text>
              </View>
              <View style={styles.modaltabline} ></View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Text style={[commonstyle.red,commonstyle.fontsize12]}>{'赔率'}</Text>
              </View>
              <View style={styles.modaltabline} ></View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Text style={[commonstyle.red,commonstyle.fontsize12]}>{'预估收益'}</Text>
              </View>
            </View>
             <ListView
               dataSource={this.state.datamyguessSource}
               renderRow={this.rendermyguessList.bind(this)}
               renderFooter={this._renderFooter.bind(this)}
             />
          {/*footer*/}
          </View>
        </Modal>
      );
     }
    }
renderItem(rowData,key){
  return(
    <View key={key} style={commonstyle.col1}>
    <TouchableOpacity style={commonstyle.viewcenter}   onPress={this._openBoBoModa.bind(this,rowData)}>
      <Image style={styles.anchorlistimg} source={{uri:rowData.UserPicture}} />
      <Text style={commonstyle.gray}>{rowData.Name}</Text>
    </TouchableOpacity>
    </View>
  );
}
 _renderBoBoRow(group,sectionID,rowID){
   var that = this;
    var items =Object.keys(group).map(function(item,key) {
      return that.renderItem(group[item],key);
    });
     return(
       <View style={[commonstyle.row, styles.anchorlistblock]}>
        {items}
       </View>
     );
}

_renderGuessRow(rowData){
  return(
    <View style={styles.matchlist}>
      <Image source = {require('../images/assetbg.jpg')} style={styles.matchlistbg} resizeMode = {"cover"}>
        <View style={[commonstyle.viewcenter, styles.matchlisttitle]}><Text style={[commonstyle.fontsize14,commonstyle.white]}>{rowData.GuessName}</Text></View>
        <View style={commonstyle.row}>
          <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} onPress={this._openGuessModa.bind(this,{guessid:rowData.GuessID,guessteamid:rowData.ETeamID,guessname:rowData.ETeamName,guessodd:rowData.ETeamOdds})}>
            <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <Text style={[commonstyle.white, commonstyle.fontsize14, styles.matchlistname]}>{rowData.ETeamName}</Text>
            <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率'}{rowData.ETeamOdds}</Text>
          </TouchableOpacity>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Text style={[commonstyle.blue, styles.matchlistvs]}>{'VS'}</Text>
            <Text style={[commonstyle.white, commonstyle.fontsize12, styles.matchlistvstime]}>{'2015/05/04'}</Text>
            <Text style={[commonstyle.yellow ]}>{rowData.GuessType}</Text>
          </View>
          <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} onPress={this._openGuessModa.bind(this,{guessid:rowData.GuessID,guessteamid:rowData.STeamID,guessname:rowData.STeamName,guessodd:rowData.STeamOdds})}>
            <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <Text style={[commonstyle.white, commonstyle.fontsize14, styles.matchlistname]}>{rowData.STeamName}</Text>
            <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率'}{rowData.STeamOdds}</Text>
          </TouchableOpacity>
        </View>
      </Image>

      <View style={[commonstyle.row, styles.matchlisttab]}>
        <View style={[commonstyle.col1, commonstyle.viewcenter]}>
          <Icon name="time" size={20} color={'#D31B25'}/>
          <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'08:20:49'}</Text>
        </View>
        <View style={styles.matchlisttabline}></View>
        <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} activeOpacity={0.8} >
          <Icon name="fire" size={20} color={'#D31B25'}/>
          <Text style={[commonstyle.red, commonstyle.fontsize12]}>{rowData.AllMoney}{'氦金'}</Text>
        </TouchableOpacity>
        <View style={styles.matchlisttabline} ></View>
        <View style={[commonstyle.col1, commonstyle.viewcenter]}>
          <Icon name="user" size={20} color={'#D31B25'}/>
          <Text style={[commonstyle.red, commonstyle.fontsize12]}>{rowData.AllUser}{'人押注'}</Text>
        </View>
      </View>
      <View style={commonstyle.row}>
        <View style={commonstyle.col1}></View>
        <View style={commonstyle.col1}></View>
      </View>
    </View>

  );
}
_renderFooter(){

}
rendermyguessList(rowData){
  return(
        <View style={styles.modaltabcontent}>
                  <View style={[commonstyle.row, styles.modaltablist]}>
                    <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                      <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{rowData.GuessTime.substring(2,10)}</Text>
                    </View>
                    <View style={[commonstyle.col2, commonstyle.viewcenter]}>
                      <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{rowData.BetTeamName}</Text>
                    </View>
                    <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                      <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{rowData.BetMoney}</Text>
                    </View>
                    <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                      <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{rowData.Odds}</Text>
                    </View>
                    <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                      <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{rowData.BetMoney*rowData.Odds}</Text>
                    </View>
                </View>
       </View>
  );
}
rendermatchList(){
  if(this.state.navbar==0){
    return(
      <View>
      <TouchableOpacity  style={styles.matchbanner} activeOpacity={0.8} onPress={()=>this.gotoRoute('matchrule',this.state.matchdata)}>
        <Image  style={styles.matchbannerimg}source={{uri:this.state.matchdata.showpicture}}  resizeMode={"stretch"} />
      </TouchableOpacity>
      <ListView
        dataSource={this.state.databoboSource}
        renderRow={this._renderBoBoRow.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        pageSize={3}
      />
      </View>
    );
  }
  else{
    return(
      <ListView
        dataSource={this.state.dataguessSource}
        renderRow={this._renderGuessRow.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
      />
    );
  }
}
render() {
  let matchlist = this.rendermatchList();
  let modal = this.rendermodaldetail();
  return (
    <View style={commonstyle.bodyer}>
      <View style={styles.nav}>
        <View style={styles.navtab}>
          <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
            <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>比赛赛事</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
            <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>赛事竞猜</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollview}>

        {matchlist}

      </ScrollView>
      {/*modal*/}
      {modal}
      <Spinner visible={this.state.loaded} />
    </View>
  );
  }
}
