'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
var Util = require('../common/util');
var {
  View,
  Component,
  Text,
  TextArea,
  TextInput,
  Image,
  Navigator,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
  DeviceEventEmitter
} = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import WebService from '../../network/fetchservice';
import Toast from '@remobile/react-native-toast';
import WeChat from 'react-native-wechat-android';

let appId = 'wxb0cb6c44afd49f5a';
export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {
        money:'',
        certifyid:'000000',
      },
      content:undefined,
      messages: [],
      loading: false,
      registerWechat: false
    }
  }


  componentDidMount() {
    if (Platform.OS == 'android') {
      WeChat.registerApp(appId,(err,registerOK) => {
          // Toast.show(registerOK + '',Toast.SHORT);
          if(registerOK) {
            this.setState({registerWechat: true})
          } else {
            Toast.show('支付功能异常' + '',Toast.SHORT);
          }
      });
      //  处理支付回调结果
      DeviceEventEmitter.addListener('finishedPay',function(event){
       var success = event.success;
       if(success){
        // 在此发起网络请求由服务器验证是否真正支付成功，然后做出相应的处理

       }else{
        Toast.show('支付失败',Toast.SHORT);
       }
      });
    } else {
      Toast.show('充值功能暂未提供',Toast.SHORT)
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

  selectRecharge(money){
    this.setState({
      data:{money:money},
    });
    console.log(this.state.data.money);
    return;
  }

  gotoRecharge(money,argument) {
    let _money
    let temp
    if (money === "" || money == null || money == undefined) {
      temp = this.state.data.money;
    } else {
      temp = money;
    }
    if (temp === "" || temp == null || temp == undefined) {
      Toast.show("请选择或填写充值金额");
      return
    }
    _money = temp.toString()
    let type = /^[0-9]*[1-9][0-9]*$/;
    let re = new RegExp(type);
    if (_money.match(re) == null) {
      Toast.show("请填写大于1的整数金额");
      return
    }
    let url = 'http://wx.haigame7.com/Weixin/JsApiPay?'+ "PhoneNum=" + this.props.userData.PhoneNumber + "&TotalFee=" + _money + "&tradeType=APP";
    let payOptions = {
      appId: '',
      nonceStr: '',
      packageValue: '',
      partnerId: '',
      prepayId: '',
      timeStamp: '',
      sign: '',
    };
    fetch(url).then(function(res) {
      // res instanceof Response == true.
      if (res.ok) {
        res.json().then(function(_data) {
          console.log("服务器传回参数");
          console.log(_data);
          payOptions['appId'] = _data.appid
          payOptions['nonceStr'] = _data.noncestr
          payOptions['partnerId'] = _data.partnerid
          payOptions['prepayId'] = _data.prepayid
          payOptions['packageValue'] = _data.package
          payOptions['timeStamp'] = _data.timestamp
          payOptions['sign'] = _data.sign
          console.log("发起支付请求，参数:");
          console.log(payOptions);
          WeChat.weChatPay(payOptions,(err,sendReqOK) => {
            console.log('发起支付');
            console.log(sendReqOK);
          });
        });
      } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
      }
    }, function(e) {
      console.log("Fetch failed!", e);
    });

    return;
  }


  render(){
    let fields = [{ref: 'money', placeholder: '请输入充值金额', keyboardType: 'numeric',placeholderTextColor: '#484848', message: '充值金额不能为空', style: [styles.logininputfont]},]
    let btn;
    if(this.state.registerWechat && Platform.OS == 'android'){
      btn = (
       <TouchableHighlight style={styles.btn} underlayColor={'#FF0000'} onPress={() => this.gotoRecharge(this.state.data.money,fields)}>
         <Text style={styles.btnfont} >{'确认充值'}</Text>
       </TouchableHighlight>
     )
    } else {
      btn = (
        <View></View>
      )
    }

    return (
      <View >
        <Header screenTitle='充值' isPop={true}  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View key={'messages'}>{this.renderMessages()}</View>
          <View style={[styles.loginlabel, commonstyle.viewcenter]}>
            <Text style={[commonstyle.cream,commonstyle.fontsize14]}>{'氦金充值: '} <Text style={[commonstyle.yellow, commonstyle.fontsize14]}>{'1元 = 10氦金'}</Text></Text>
          </View>
          <View key={'money'} style={styles.logininput}>
            <TextInput {...fields[0]} onChangeText={(text) => this.state.data.money = text} defaultValue={this.state.data.money.toString()} />
          </View>

          <View style={[styles.loginlabel, styles.blockbottom]}>
            <Text style={[commonstyle.cream,commonstyle.fontsize14]}>{'其他金额'}</Text>
          </View>
          <View style={[commonstyle.row, styles.rechargeview]}>
            <TouchableHighlight onPress={() => this.selectRecharge(50)} style={[this.state.data.money==50?commonstyle.btnborderred:commonstyle.btnbordergray, commonstyle.col1, styles.recharge]} >
              <Text style={this.state.data.money==50?commonstyle.red:commonstyle.gray} >{'50氦金'}</Text>
            </TouchableHighlight>
            <View style={styles.rechargeline}></View>
            <TouchableHighlight onPress={() => this.selectRecharge(100)} style={[this.state.data.money==100?commonstyle.btnborderred:commonstyle.btnbordergray, commonstyle.col1, styles.recharge]}>
              <Text style={this.state.data.money==100?commonstyle.red:commonstyle.gray}>{'100氦金'}</Text>
            </TouchableHighlight>
            <View style={styles.rechargeline}></View>
            <TouchableHighlight onPress={() => this.selectRecharge(200)} style={[this.state.data.money==200?commonstyle.btnborderred:commonstyle.btnbordergray, commonstyle.col1, styles.recharge]} >
              <Text style={this.state.data.money==200?commonstyle.red:commonstyle.gray} >{'200氦金'}</Text>
            </TouchableHighlight>
          </View>
          <View style={[commonstyle.row, styles.rechargeview]}>
            <TouchableHighlight onPress={() => this.selectRecharge(500)} style={[this.state.data.money==500?commonstyle.btnborderred:commonstyle.btnbordergray, commonstyle.col1, styles.recharge]} >
              <Text style={this.state.data.money==500?commonstyle.red:commonstyle.gray}>{'500氦金'}</Text>
            </TouchableHighlight>
            <View style={styles.rechargeline}></View>
            <TouchableHighlight onPress={() => this.selectRecharge(1000)} style={[this.state.data.money==1000?commonstyle.btnborderred:commonstyle.btnbordergray, commonstyle.col1, styles.recharge]} >
              <Text style={this.state.data.money==1000?commonstyle.red:commonstyle.gray} >{'1000氦金'}</Text>
            </TouchableHighlight>
            <View style={styles.rechargeline}></View>
            <TouchableHighlight onPress={() => this.selectRecharge(5000)} style={[this.state.data.money==5000?commonstyle.btnborderred:commonstyle.btnbordergray, commonstyle.col1, styles.recharge]} >
              <Text style={this.state.data.money==5000?commonstyle.red:commonstyle.gray} >{'5000氦金'}</Text>
            </TouchableHighlight>
          </View>
          {btn}
        </View>
      </View>
    );
  }
 }
