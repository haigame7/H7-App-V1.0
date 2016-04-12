'use strict';
/**
 * APP 战队信息
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
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
  renderUserImageItem(rowData,key){
    return(
      <Image key={key} style={styles.listviewteamimg} source={{uri:rowData.UserPicture}} />
    );
  }
  render(){
    var that = this;
    var userimage =Object.keys(that.state.teaminfo.UserImage).map(function(item,key) {
      return that.renderUserImageItem(that.state.teaminfo.UserImage[item],key);
    });
    var total = this.state.teaminfo.WinCount + this.state.teaminfo.LoseCount;
    var winning = this.state.teaminfo.WinCount/total*100;

    return (
      <View>
        <Header screenTitle='战队信息' navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:this.state.teaminfo.TeamPicture}} />
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>{this.state.teaminfo.TeamName}</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{this.state.teaminfo.FightScore}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{this.state.teaminfo.Asset}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>{this.state.teaminfo.TeamDescription}</Text>
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
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.teaminfo.CreateTime}</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>招募信息</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.teaminfo.RecruitContent}</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队成员</Text></View>
              <View style={styles.listviewright}>
                <View style={styles.listviewteam}>
                  <Image style={styles.listviewteamleader} source={{uri:this.state.teaminfo.CreateUserLogo}} />
                  <View style={styles.listviewteamblock}>
                    {userimage}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
