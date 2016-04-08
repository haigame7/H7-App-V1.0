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
    Component,
    TouchableOpacity,
    Navigator,
    ScrollView,
    TouchableHighlight,
    } from 'react-native';
var Util = require('../common/util');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/fightstyle';
import matchstyles from '../../styles/matchstyle';


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
       content:{}
     }
    }
  componentDidMount(){
    this.setState({
      content:this.props.rowData
    });
  }

  renderfightdetailList(){
     if(this.state.content.CurrentState=='发出挑战'){
       return(
       <View>
         <View style={styles.fightdetail}>
           <Icon name="war" size={60}  style={commonstyle.red}/>
           <Text style={[commonstyle.white,styles.fightdetailtext]}>{'['+this.state.content.STeamName+'] 战队'}</Text>
           <Text style={[commonstyle.white,styles.fightdetailtext]}>{'向你的战队 ['+this.state.content.ETeamName+'] 发起挑战'}</Text>
           <Text style={[commonstyle.red,commonstyle.fontsize14,styles.fightdetailtext]}>{'压注金额'+this.state.content.Money+'氦金'}</Text>
           <Text style={[commonstyle.yellow,styles.fightdetailtext]}>{' 是否接受挑战？'}</Text>
           <View style={styles.detailbtnblock}>
             <TouchableOpacity style = {[commonstyle.btncreamblack, styles.detailbtn]} activeOpacity={0.8}>
               <Text style = {commonstyle.black}> {'认怂'}</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {[commonstyle.btnredwhite, styles.detailbtn]} activeOpacity={0.8}>
               <Text style = {commonstyle.white}> {'接受挑战'}</Text>
             </TouchableOpacity>
           </View>
         </View>
       </View>
     );
     }else if(this.state.content.CurrentState=='已应战')
      return(
      <View>
        <View style={styles.fightdetail}>
          <Icon name="war" size={60}  style={commonstyle.red}/>
          <Text style={[commonstyle.white,styles.fightdetailtext]}>{'['+this.state.content.STeamName+'] 战队联系人: '}</Text>
          <Text style={[commonstyle.white,styles.fightdetailtext]}>{'['+this.state.content.ETeamName+'] 战队联系人:'}</Text>
          <Text style={[commonstyle.red,commonstyle.fontsize14,styles.fightdetailtext]}>{'压注金额'+this.state.content.Money+'氦金'}</Text>
          <Text style={[commonstyle.yellow,styles.fightdetailtext]}>{'约战时间: '+this.state.content.StateTimeStr}</Text>
          <View  style = {matchstyles.modalinput }>
            <TextInput placeholder={'请输入比赛房间号'} placeholderTextColor='#484848' style={matchstyles.modalinputfont} keyboardType='numeric'  onChangeText = {(text) => this.state.guessmoney = text }/>
          </View>
          <View style={styles.detailbtnblock}>
            <TouchableOpacity style = {[commonstyle.btnredwhite, styles.detailbtn]} activeOpacity={0.8}>
              <Text style = {commonstyle.white}> {'确认结果'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  render() {
    let fightdetaillist = this.renderfightdetailList();
    return (
      <View>
        <Header screenTitle="约战详情" navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          {fightdetaillist}
        </View>
      </View>
    );
  }
}
