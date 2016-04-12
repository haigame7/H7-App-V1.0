'use strict';
/**
 * APP 战队信息
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
var Util = require('../common/util');
var {
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
  } = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
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
    }
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
  render(){
    return (
      <View>
        <Header screenTitle='战队信息' navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:this.state.teaminfo.TeamLogo}} />
              <View style={styles.headportraitv}><Icon name="certified" size={15} color={'#484848'} style={commonstyle.iconnobg}/><Text style={styles.headportraitvfont}>未认证</Text></View>
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>{this.state.teaminfo.TeamName}</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '}{'1234'}{'  '}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  1234  '}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>{'战队宣言:'}{this.state.teaminfo.TeamDescription}</Text>
              </View>
            </View>
          </Image>

          <View style={styles.listblock}>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队战绩</Text></View>
              <View style={styles.listviewright}>
                <Text style={commonstyle.cream}>参赛场次  </Text>
                <Text style={commonstyle.yellow}>20场</Text>
                <Text style={commonstyle.cream}>  胜率  </Text>
                <Text style={commonstyle.red}>79%</Text>
              </View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>成立日期</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>2016/02/15</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>招募信息</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.teaminfo.RecruitContent}</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队成员</Text></View>
              <View style={styles.listviewright}>
                <View style={styles.listviewteam}>
                  <Image style={styles.listviewteamleader} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                  <View style={styles.listviewteamblock}>
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
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
