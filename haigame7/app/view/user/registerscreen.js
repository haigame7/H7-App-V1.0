'use strict';

import React, {
  Modal,
  Component,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  Alert,
  Navigator,
  ToastAndroid
} from 'react-native';
var {CountDownText} = require('react-native-sk-countdown');

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import registerstyles from '../../styles/registerstyle';
import Header from '../common/headernav';
import api, {host, key} from './server';
import Setpwd from './setpwd.js';
import UserService from '../../network/userservice';
import GlobalSetup from '../../constants/globalsetup';
import HeaderPre from '../common/headernav';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        phone: undefined,
        securitycode: undefined
      },
      loading: false,
      messages: [],
      getCodeMsg: '获取验证码',
      isToushable: true,
    }
  }


  renderMessages() {
    if (this.state.messages.length > 0) {
      let messages = this.state.messages.map((val, key) => {
        if (val.message) return <Text style={styles.message} key={key}>{val.message}</Text>;
      });

      return messages;
    }
  }
  onFocus(argument) {
    setTimeout(() => {
      // let scrollResponder = this.refs.registerFormC.getScrollResponder();
      //     scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      //       React.findNodeHandle(this.refs[argument.ref]), 110, true
      //     );
    }, 50);
  }
  gotoRoute(name,argument) {
    let keys = Object.keys(this.state.data).map((val,key) => {
     if ([null, undefined, 'null', 'undefined', ''].indexOf(this.state.data[val]) > -1) return val;
   });
   this.setState({messages: []});
   argument.map((val, key) => {
     if (keys.indexOf(val.ref) > -1) this.setState({messages: this.state.messages.concat(val)});
   });
   if(this.state.messages.length>0){
     console.log('message wrong'+this.state.messages.length);
     return;
   }
    if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
      this.props.navigator.push({name: name,component: Setpwd,params:{data:this.state.data,reset:false},sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
    }
    return;
  }

  onSubmit(argument) {
    console.log(this.state.loading);
    if (this.state.loading) {
      Alert.alert('请稍后 . . .');
      //网络访问请求
      return null;
    }

    let keys = Object.keys(this.state.data).map((val,key) => {
      if ([null, undefined, 'null', 'undefined', ''].indexOf(this.state.data[val]) > -1) return val;
    });
    this.setState({messages: []});
    argument.map((val, key) => {
      if (keys.indexOf(val.ref) > -1) this.setState({messages: this.state.messages.concat(val)});
    });

  }
  /**
   * 获取验证码
   * @return {[type]} [description]
   */
  _getVerifiCode() {
    console.log(this.state.data);
    if (this.state.data.phone == undefined) {
        Alert.alert('请填写手机号先');
      //ToastAndroid.show('请填写手机号先',ToastAndroid.SHORT);
      return;
    }
    UserService.getVerifiCode(this.state.data.phone,(response) => {
      //return:{MessageCode: 0, Message: ""}
      // if (response !== GlobalSetup.REQUEST_SUCCESS) {
      //   let message = '';
      //   if(response.MessageCode == '40001'){
      //     message = '服务器请求异常,请稍后重试';
      //     this.setState({
      //       isToushable: true,
      //     });
      //   }else if(response.MessageCode == '10003'){
      //     message = '手机号有误请重新输入';
      //     this.setState({
      //       isToushable: true,
      //     });
      //   }else if(response.MessageCode == '10004'){
      //     message = '手机号已注册';
      //     this.setState({
      //       isToushable: true,
      //     });
      //   }else if(response.MessageCode == '0'){
      //     message = '验证码已发送，请查看';
      //   }
      //  Alert.alert(
      //   message ,
      // );
      //     //ToastAndroid.show('获取成功',ToastAndroid.SHORT);
      // } else {
      //   Alert.alert('请求错误');
      //   //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
      //   this.setState({
      //     isToushable: true,
      //   });
      // }

    if (response[0].MessageCode == '0') {
      this.setState({
        isToushable: false,
      });
      Alert.alert("获取成功!")
    } else {
      Alert.alert(response[0].Message)
      this.setState({
        isToushable: true,
      });
    }
    })

  }





  render() {
    let fields = [
      {ref: 'phone', placeholder: '手机号', keyboardType: 'numeric',placeholderTextColor: 'white', underlineColorAndroid: 'rgba(0, 0, 0, 0)', message: '* 手机号必填', style: [styles.logininputfont]},
      {ref: 'securitycode', placeholder: '验证码',keyboardType: 'numeric',placeholderTextColor: 'white', underlineColorAndroid: 'rgba(0, 0, 0, 0)', message: '* 验证码必填', style: [styles.logininputfont]}
    ]
    var codebtn;
    if (this.state.isToushable) {
      codebtn = <TouchableOpacity style={this.state.loading ? styles.btndisable : styles.btncode} activeOpacity={0.8} onPress={this._getVerifiCode.bind(this)}><Text style={styles.btncodefont}>{this.state.getCodeMsg}</Text></TouchableOpacity>;
    } else {
      codebtn = <View style={[styles.btncode, styles.btndisable]}><CountDownText
        style={styles.btncodefont}
        countType='seconds'
        auto={true}
        afterEnd={() => {
          this.setState({
            isToushable: true,
            getCodeMsg: '获取验证码'
          });
        }}
        timeLeft={60}
        step={-1}
        startText='获取验证码'
        endText='获取验证码'
        intervalText={(sec) => sec + '秒重新获取'}
      /></View>;
    }
    return(
      <View style={{ flex: 1 }}>
      <HeaderPre screenTitle = '注册' navigator = { this.props.navigator } />
      <Image source = {require('../../images/loginbg.jpg')} style = {styles.loginbg} resizeMode = {"cover"}>
          <View activeOpacity = {1} style = {styles.logo}>
              <Image style = {{width: 80, height: 80, }} source = { require('../../images/logo.png') }/>
          </View>
          <View key={'messages'}>{this.renderMessages()}</View>
          <View key={'phone'} style={styles.logininput}>
              <TextInput {...fields[0]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.phone = text} />
          </View>
          <View key={'securitycode'} style={styles.logininput}>
              <TextInput {...fields[1]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.securitycode = text} />
              {codebtn}
          </View>
          <TouchableHighlight style={this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} underlayColor={'#FF0000'} onPress={() => this.gotoRoute('setpwd',fields)}>
              <Text style={styles.btnfont} >{'下一步'}</Text>
          </TouchableHighlight>
      </Image>
      </View>

    );
  }
}
