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
    Alert,
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
import FightService from '../../network/fightservice';
import GlobalSetup from '../../constants/globalsetup';
import Toast from '@remobile/react-native-toast';
import styles from '../../styles/fightstyle';
import matchstyles from '../../styles/matchstyle';


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
       content:{},
       userdata:{},
       fightstate:'',
     }
    }
  componentDidMount(){
    this.setState({
      content:this.props.rowData,
      userdata:this.props.userdata,
      fightstate:this.props.fightstate,
      fightaddress:this.props.fightstate=='send'?this.props.rowData.SFightAddress:this.props.rowData.EFightAddress,
    });
  }
  _reject(){
    let requestdata = {'userID':this.state.userdata.UserID,'dateID':this.state.content.DateID,'money':this.state.content.Money,}
    FightService.reject(requestdata,(response) => {
     if (response !== GlobalSetup.REQUEST_SUCCESS) {
       if (response[0].MessageCode == '0') {
        Toast.showLongCenter('已拒绝约战');
        this.props.callback();
        setTimeout(()=>{
        this.props.navigator.pop();
      },1000);
       } else {
         Toast.show(response[0].Message);
       }
    }else {
        Toast.showLongCenter('请求错误');
        //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
    }
    });
  }
  _accept(){
    let requestdata = {'userID':this.state.userdata.UserID,'dateID':this.state.content.DateID,'money':this.state.content.Money,}
    FightService.accept(requestdata,(response) => {
     if (response !== GlobalSetup.REQUEST_SUCCESS) {
       if (response[0].MessageCode == '0') {
        Toast.showLongCenter('已接受约战');
        this.props.callback();
        setTimeout(()=>{
        this.props.navigator.pop();
      },1000);
       } else {
         Toast.show(response[0].Message);
       }
    }else {
        Toast.showLongCenter('请求错误');
        //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
    }
    });
  }
  confirmResult(fightaddress){
   if(this.state.fightaddress!==fightaddress){
     Alert.alert(
             '确认房间号',
             '您跟对方输入不一致，确认输入结果？',
             [
               {text: '取消', onPress: () => console.log('Cancel Pressed!')},
               {text: '确认', onPress: () => this._updateGameID(this.state.fightaddress)},
             ]
           )
   }else{
     this._updateGameID(this.state.fightaddress);
   }
  }
  _updateGameID(updateaddress){
    let requestdata = {'dateID':this.state.content.DateID,'sfightaddress':this.state.fightstate=='send'?updateaddress:null,'efightaddress':this.state.fightstate=='send'?null:updateaddress,}
    FightService.updateGameID(requestdata,(response) => {
     if (response !== GlobalSetup.REQUEST_SUCCESS) {
       if (response[0].MessageCode == '0') {
        Toast.showLongCenter('确认成功');
        this.props.callback();
        setTimeout(()=>{
        this.props.navigator.pop();
      },1000);
       } else {
         Toast.show(response[0].Message);
       }
    }else {
        Toast.showLongCenter('请求错误');
        //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
    }
    });
  }
  renderfightdetailList(){
     if(this.state.content.CurrentState=='发起挑战'){
       return(
       <View>
         <View style={styles.fightdetail}>
           <Icon name="war" size={60}  style={commonstyle.red}/>
           <Text style={[commonstyle.white,styles.fightdetailtext]}>{'['+this.state.content.STeamName+'] 战队'}</Text>
           <Text style={[commonstyle.white,styles.fightdetailtext]}>{'向你的战队 ['+this.state.content.ETeamName+'] 发起挑战'}</Text>
           <Text style={[commonstyle.red,commonstyle.fontsize14,styles.fightdetailtext]}>{'压注金额'+this.state.content.Money+'氦金'}</Text>
           <Text style={[commonstyle.yellow,styles.fightdetailtext]}>{' 是否接受挑战？'}</Text>
           <View style={styles.detailbtnblock}>
             <TouchableOpacity style = {[commonstyle.btncreamblack, styles.detailbtn]} onPress={()=>this._reject()} activeOpacity={0.8}>
               <Text style = {commonstyle.black}> {'认怂'}</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {[commonstyle.btnredwhite, styles.detailbtn]} onPress={()=>this._accept()}  activeOpacity={0.8}>
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
          <Text style={[commonstyle.white,styles.fightdetailtext]}>{this.props.fightstate=='send'?'['+this.state.content.ETeamName:'['+this.state.content.STeamName+'] 战队联系人电话: '+this.state.content.PhoneNumber}</Text>
          <Text style={[commonstyle.red,commonstyle.fontsize14,styles.fightdetailtext]}>{'压注金额'+this.state.content.Money+'氦金'}</Text>
          <Text style={[commonstyle.yellow,styles.fightdetailtext]}>{'约战时间: '+this.state.content.FightTime}</Text>
          <Text style={[commonstyle.yellow,styles.fightdetailtext]}>{'对方确认房间号: '}{this.state.fightstate=='send'?this.state.content.EFightAddress:this.state.content.SFightAddress}</Text>
          <View  style = {matchstyles.modalinput }>
            <TextInput placeholder={'请输入比赛房间号'} placeholderTextColor='#484848' style={matchstyles.modalinputfont} keyboardType='numeric'   defaultValue={this.state.fightstate=='send'?this.state.content.SFightAddress:this.state.content.EFightAddress}  onChangeText = {(text) => this.state.fightaddress = text }/>
          </View>
          <View style={styles.detailbtnblock}>
            <TouchableOpacity style = {[commonstyle.btnredwhite, styles.detailbtn]} onPress={()=>this.confirmResult(this.state.fightstate=='send'?this.state.content.EFightAddress:this.state.content.SFightAddress)} activeOpacity={0.8}>
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
