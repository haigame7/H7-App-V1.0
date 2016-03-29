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
  ScrollView
} = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import WebService from '../../network/fetchservice';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {
        money:'',
        certifyid:'000000',
      },
      content:undefined,
      messages: []
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
    console.log('reacharge');
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
    return;
  }

  doRecharge() {
    let url = 'http://wx.haigame7.com/Weixin/JsApiPay';
    let data ={
      'UserID':'63',
      'TotalFee': 1,
      'tradeType': 'APP'
    }
    // WebService.postFecth(url,data,(response) => {
    //   console.log(response);
    // })
    // "Content-Type": "application/x-www-form-urlencoded"
    fetch(url, {
      	method: "POST",
      	headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      	},
      	body: "UserID=63&TotalFee=1&tradeType=APP"
      }).then(function(res) {
      	console.log(res);
      }, function(e) {
        console.log('error');
      	console.log(e);
      });
  }
  render(){
    let fields = [{ref: 'money', placeholder: '请输入充值金额', keyboardType: 'numeric',placeholderTextColor: '#484848', message: '充值金额不能为空', style: [styles.logininputfont]},]
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

          <TouchableHighlight style={this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} underlayColor={'#FF0000'} onPress={() => this.gotoRecharge(this.state.data.money,fields)}>
            <Text style={styles.btnfont} >{'确认充值'}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} underlayColor={'#FF0000'} onPress={() => this.doRecharge()}>
            <Text style={styles.btnfont} >{'测试统一下单'}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
 }
