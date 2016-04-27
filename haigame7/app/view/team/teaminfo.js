'use strict';
/**
 * APP 战队信息
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
import React, {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  ScrollView
  } from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
import Header from '../common/headernav'; 
import TeamService from '../../network/teamservice';
import GlobalSetup from '../../constants/globalsetup';
import GlobalVariable from '../../constants/globalvariable';
import Toast from '@remobile/react-native-toast';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      teaminfo:this.props.teaminfo,
      userID:this.props.userID,
      messages: [],
      teamData:[],
    }
  }
  componentWillMount(){
    this.initData();
  }
  initData(){
    let requestData = {'teamID':this.props.teaminfo.TeamID};
    TeamService.getTeambyID(requestData,(response) => {
      if(response[0].MessageCode == '0'){
          let newData = response[1];
          this.setState({
            teamData: newData,
          });
        }else{
          Toast.show(response[0].MessageCode);
        };
    });
  }

  applyTeam(userID,teamID){
    var data = {'userID':userID,'teamID':teamID};
    TeamService.applyTeam(data,(response)=>{
      if(response[0].MessageCode == '20006'){
        Toast.show('您已经加入其他战队');
      }
      else if (response[0].MessageCode == '20007') {
         Toast.show('您已向其他发出申请');
      }
      else if (response[0].MessageCode == '0') {
         Toast.show('成功发出申请');
      } else {
        console.log('请求错误' + response[0].MessageCide);
      }
    });
  }
  renderUserImageItem(rowData,key){
    return(
      <Image key={key} style={styles.listviewteamimg} source={{uri:rowData.UserPicture}} />
    );
  }
  render(){
    var that = this;
    if(that.state.teamData.TeamUser ==''){
      var userimage =Object.keys(that.state.teamData.TeamUser).map(function(item,key) {
        return that.renderUserImageItem(that.state.teamData.TeamUser[item],key);
      });
    }else{
      var userimage = <View></View>
    };
    
    var total = this.state.teamData.WinCount + this.state.teamData.LoseCount + this.state.teamData.FollowCount;
    var winning = Math.round(this.state.teamData.WinCount/total*100);

    return (
      <View>
        <Header screenTitle='战队信息' navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:this.state.teamData.TeamLogo}} />
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>{this.state.teamData.TeamName}</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{this.state.teamData.FightScore}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{this.state.teamData.Asset}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>{this.state.teamData.TeamDescription}</Text>
              </View>
            </View>
          </Image>

          <View style={styles.listblock}>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队战绩</Text></View>
              <View style={styles.listviewright}>
                <Text style={commonstyle.cream}>参赛场次  </Text>
                <Text style={commonstyle.yellow}>{total}场</Text>
                <Text style={commonstyle.cream}>  胜率  </Text>
                <Text style={commonstyle.red}>{winning}%</Text>
              </View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>成立日期</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.teamData.CreateTime}</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>招募信息</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.teamData.RecruitContent}</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队成员</Text></View>
              <View style={styles.listviewright}>
                <View style={styles.listviewteam}>
                  <Image style={styles.listviewteamleader} source={{uri:this.state.teamData.CreaterPicture}} />
                  <View style={styles.listviewteamblock}>
                    {userimage}
                  </View>
                </View>
              </View>
            </View>
          </View>

          <TouchableHighlight onPress={()=>this.applyTeam(this.state.userID,this.state.teaminfo.TeamID)} style = {styles.btn} underlayColor = {'#FF0000'} >
            <Text style = {styles.btnfont}> {'申请加入' } </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
