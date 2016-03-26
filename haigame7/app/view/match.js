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
  Alert,
  Component,
  TouchableOpacity,
  Navigator,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome');
var commonstyle = require('../styles/commonstyle');
var styles = require('../styles/matchstyle');
import MatchRule from './match/matchrule';
import MatchSchedule from './match/matchschedule';
import MatchService from '../network/matchservice';
import FightService from '../network/fightservice';
import GlobalSetup from '../constants/globalsetup';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

export default class extends Component{
  constructor(props) {
    super(props);
      var databobo = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var dataguess = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      navbar: 0,
      databoboSource: databobo.cloneWithRows(['row1']),
      dataguessSource:dataguess.cloneWithRows(['row1']),
      bobolist:[],
      guesslist:[],
      isOpen:false,
      userteamid:0,
      joincount:-1,
      jointeam:'',
      jointime:'',
      userphone:this.props.phoneNum?this.props.phoneNum : '13439843883' ,
      money:0,
      matchdata:{
        matchID:0,
        matchname:'',
        showpicture:'',
        introduce:'',
      },
      modaData:"",
      }

    }
    componentWillMount() {
    this.initData();
    }
    initData(){
      {/*请求我的战队信息*/}
      FightService.getUserDefaultTeam({phone:this.state.userphone},(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Alert.alert('服务器请求异常');
        }else if(response[0].MessageCode == '0'){
          this.setState({
            userteamid:response[1].TeamID,
          });
        }
       }else{
           Alert.alert('请求错误');
       }
     });
      MatchService.getMatchList((response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Alert.alert('服务器请求异常');
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
              Alert.alert('请求错误');
            }
      });
    }
    getBoBoList(matchdata){
      MatchService.getBoBoList(matchdata,(response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Alert.alert('服务器请求异常');
          }else if(response[0].MessageCode == '0'){
            let newData = response[1];
            this.setState({
              databoboSource: this.state.databoboSource.cloneWithRows(newData),
              bobolist:newData,
            });
           }
         }
          else{
              Alert.alert('请求错误');
            }
      });
    }
    _openModa(rowData) {
      MatchService.getBoBoCount(rowData,(response) => {
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          if(response[0].MessageCode == '40001'){
            Alert.alert('服务器请求异常');
          }else if(response[0].MessageCode == '0'){
            MatchService.myJoinMatch({matchID:rowData.MatchID,teamID:this.state.userteamid},(response2) => {
            if (response2 !== GlobalSetup.REQUEST_SUCCESS) {
                if(response2[0].MessageCode == '50001'){
                  this.setState({
                  joincount:response[1].JoinCount,
                  isOpen: true,
                  modaData:rowData
                  });
                }
              else if(response2[0].MessageCode == '0'){
                this.setState({
                 joincount:response[1].JoinCount,
                 isOpen: true,
                 modaData:rowData,
                 jointeam:response2[1].Name,
                 jointime:response2[1].ApplyTime
            });
            }
           }
         });
         }
       }
          else{
              Alert.alert('请求错误');
            }
      });
    }
    _closeModa() {
       this.setState({isOpen: false});
    }
    _joinMatch(params){
      if(params.jointeam!==''){
        Alert.alert('您已报名'+params.jointeam+'!');
      }else{
        MatchService.joinMatch(params,(response) => {
          if (response !== GlobalSetup.REQUEST_SUCCESS) {
            if(response[0].MessageCode == '40001'){
              Alert.alert('服务器请求异常');
            }else if(response[0].MessageCode == '0'){
              Alert.alert('报名成功');
              this.setState({isOpen: false});
           }
         }
          else{
                Alert.alert('请求错误');
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
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._joinMatch.bind(this,{'matchID':this.state.modaData.MatchID,'boboID':this.state.modaData.BoBoID,'teamID':this.state.userteamid,'phone':this.state.userphone,'jointeam':this.state.jointeam})} >加入战队</Button>
          </View>
        </Modal>
      );
    }else{
      return(
        <Modal isOpen={this.state.isOpen}  swipeToClose={false} onClosed={this._closeModa.bind(this)} style={[commonstyle.modal, commonstyle.modalbig, styles.modalbgopacity]} position={"top"} >
          <View style={[styles.modalheader]}>
            <Text style={[commonstyle.cream, styles.modaltext]}>{'您的选择：犀利拍立冬至 获胜'}</Text>
            <View  style = {styles.modalinput }>
              <TextInput placeholder={'押注最小氦金为10氦金,请输入押注金额'} placeholderTextColor='#484848' style={styles.modalinputfont}  onChangeText = {(text) => this.state.money = text }/>
            </View>
            <View style ={commonstyle.row}>
              <View style={commonstyle.col1}><Text style={[commonstyle.cream, styles.modaltext]}>{'  可用氦金:  '}<Text style={commonstyle.yellow}>{'1000'}</Text></Text></View>
              <View style={commonstyle.col1}><Text style={[commonstyle.cream, styles.modaltext]}>{'  预估收益:  '}<Text style={commonstyle.yellow}>{'1500'}</Text></Text></View>
            </View>
          </View>

          <View style={commonstyle.row}>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} style={commonstyle.black} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >取消关闭</Button>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} style={commonstyle.white} activeOpacity={0.8} onPress={this._closeModa.bind(this)} >确认下注</Button>
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

            <View style={styles.modaltabcontent}>
              <View style={[commonstyle.row, styles.modaltablist]}>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'19:04'}</Text>
                </View>
                <View style={[commonstyle.col2, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'犀利拍立冬至'}</Text>
                </View>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'100'}</Text>
                </View>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'1:1.1'}</Text>
                </View>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'150'}</Text>
                </View>
              </View>

              <View style={[commonstyle.row, styles.modaltablist]}>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'19:04'}</Text>
                </View>
                <View style={[commonstyle.col2, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'犀利拍立冬至'}</Text>
                </View>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'100'}</Text>
                </View>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'1:1.1'}</Text>
                </View>
                <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                  <Text style={[commonstyle.cream,commonstyle.fontsize12]}>{'150'}</Text>
                </View>
              </View>
            </View>
          {/*footer*/}
          </View>
        </Modal>
      );
     }
    }
_renderRow(rowData, sectionID, rowID){
     return(
       <View style={[commonstyle.row, styles.anchorlistblock]}>
         <View style={styles.anchorlistline}></View>
         <TouchableOpacity style={commonstyle.col1} onPress={this._openModa.bind(this,rowData)}>
           <Image style={styles.anchorlistimg} source={{uri:rowData.UserPicture}} />
           <Text style={commonstyle.gray}>{rowData.Name}</Text>
         </TouchableOpacity>
       </View>
     );


}
_renderFooter(){

}
rendermatchList(){
  if(this.state.navbar==0){
    return(
      <View>
      <TouchableOpacity  style={styles.matchbanner} activeOpacity={0.8} onPress={()=>this.gotoRoute('matchrule',this.state.matchdata)}>
        <Image  style={styles.matchbannerimg}source={{uri:'http://a4.att.hudong.com/57/68/20300533970223133722680195303.jpg'}}  resizeMode={"stretch"} />
      </TouchableOpacity>
      <ListView
        dataSource={this.state.databoboSource}
        renderRow={this._renderRow.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
      />
      </View>
    );
  }
  else{
    return(
      <View>
      <View style={styles.matchlist}>
        <Image source = {require('../images/assetbg.jpg')} style={styles.matchlistbg} resizeMode = {"cover"}>
          <View style={[commonstyle.viewcenter, styles.matchlisttitle]}><Text style={[commonstyle.fontsize14,commonstyle.white]}>{'什么什么鱼塘大赛'}</Text></View>
          <View style={commonstyle.row}>
            <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} onPress={this._openModa.bind(this)}>
              <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率 1 : 1.11'}</Text>
            </TouchableOpacity>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Text style={[commonstyle.blue, styles.matchlistvs]}>{'VS'}</Text>
              <Text style={[commonstyle.white, commonstyle.fontsize12, styles.matchlistvstime]}>{'2015/05/04'}</Text>
              <Text style={[commonstyle.yellow ]}>{'猜胜负'}</Text>
            </View>
            <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} onPress={this._openModa.bind(this)}>
              <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率 1 : 1.11'}</Text>
            </TouchableOpacity>
          </View>
        </Image>

        <View style={[commonstyle.row, styles.matchlisttab]}>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Icon name="user" size={20} color={'#D31B25'}/>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'08:20:49'}</Text>
          </View>
          <View style={styles.matchlisttabline}></View>
          <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} activeOpacity={0.8} >
            <Icon name="user" size={20} color={'#D31B25'}/>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'5000氦金'}</Text>
          </TouchableOpacity>
          <View style={styles.matchlisttabline} ></View>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Icon name="user" size={20} color={'#D31B25'}/>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'333人押注'}</Text>
          </View>
        </View>
        <View style={commonstyle.row}>
          <View style={commonstyle.col1}></View>
          <View style={commonstyle.col1}></View>
        </View>
      </View>
      <View style={styles.matchlist}>
        <Image source = {require('../images/assetbg.jpg')} style={styles.matchlistbg} resizeMode = {"cover"}>
          <View style={[commonstyle.viewcenter, styles.matchlisttitle]}><Text style={[commonstyle.fontsize14,commonstyle.white]}>{'什么什么鱼塘大赛'}</Text></View>
          <View style={commonstyle.row}>
            <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} onPress={this._openModa.bind(this)}>
              <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率 1 : 1.11'}</Text>
            </TouchableOpacity>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Text style={[commonstyle.blue, styles.matchlistvs]}>{'VS'}</Text>
              <Text style={[commonstyle.white, commonstyle.fontsize12, styles.matchlistvstime]}>{'2015/05/04'}</Text>
              <Text style={[commonstyle.yellow ]}>{'猜胜负'}</Text>
            </View>
            <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} onPress={this._openModa.bind(this)}>
              <Image style={styles.matchlistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.yellow,commonstyle.fontsize12 ]}>{'赔率 1 : 1.11'}</Text>
            </TouchableOpacity>
          </View>
        </Image>

        <View style={[commonstyle.row, styles.matchlisttab]}>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Icon name="user" size={20} color={'#D31B25'}/>
            <Text style={[commonstyle.cream, commonstyle.fontsize12]}>{'08:20:49'}</Text>
          </View>
          <View style={styles.matchlisttabline}></View>
          <TouchableOpacity style={[commonstyle.col1, commonstyle.viewcenter]} activeOpacity={0.8} >
            <Icon name="user" size={20} color={'#D31B25'}/>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'5000氦金'}</Text>
          </TouchableOpacity>
          <View style={styles.matchlisttabline} ></View>
          <View style={[commonstyle.col1, commonstyle.viewcenter]}>
            <Icon name="user" size={20} color={'#D31B25'}/>
            <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'333人押注'}</Text>
          </View>
        </View>
        <View style={commonstyle.row}>
          <View style={commonstyle.col1}></View>
          <View style={commonstyle.col1}></View>
        </View>
      </View>
    </View>
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
    </View>
  );
  }
}
