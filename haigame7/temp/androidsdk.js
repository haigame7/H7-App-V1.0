'use strict';
import React, {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    DeviceEventEmitter,
    TouchableHighlight
} from 'react-native';

import WeChat from 'react-native-wechat-android';

let appId = 'wxb0cb6c44afd49f5a';   // 你的AppId

//分享视频
let videoOptions = {
      title: 'see you again mv',
      desc: '一起来怀念下吧',
      transaction: 'video',
      scene: 0,
      type: 5,

      videoUrl: 'http://www.iqiyi.com/v_19rrnlidhk.html?src=sharemodclk131212',
      thumbImage: 'http://zx.youdao.com/zx/wp-content/uploads/2015/04/6401.jpg',
}

export default class MyProject extends React.Component {
  _registerApp(){
        WeChat.registerApp(appId,(err,registerOK) => {
            ToastAndroid.show(registerOK + '',ToastAndroid.SHORT);
        });
  }

  _openApp(){
        WeChat.openWXApp((err,res) => {

        });
  }

  _share(){
        WeChat.sendReq(videoOptions,(err,sendOK) => {
          ToastAndroid.show(sendOK + '',ToastAndroid.SHORT);
          ToastAndroid.show(err + '',ToastAndroid.SHORT);
          });
  }
  _test(){
    WeChat.registerApp(appId,(err,registerOK) => {
        ToastAndroid.show(registerOK + '',ToastAndroid.SHORT);
    });
    let url = 'http://wx.haigame7.com/Weixin/JsApiPay';
    let data ={
      'UserID':'63',
      'TotalFee': 1,
      'tradeType': 'APP'
    }

    var payOptions = {
      appId: '',
      nonceStr: '',
      packageValue: 'Sign=WXPay',
      partnerId: '',
      prepayId: '',
      timeStamp: '',
      paySign: '',
    };
    // WebService.postFecth(url,data,(response) => {
    //   console.log(response);
    // })
    // "Content-Type": "application/x-www-form-urlencoded"
    fetch("http://wx.haigame7.com/Weixin/JsApiPay?UserID=63&TotalFee=1&tradeType=APP").then(function(res) {
      // res instanceof Response == true.
      if (res.ok) {
        res.json().then(function(_data) {
          payOptions['appId'] = _data.appId
          payOptions['nonceStr'] = _data.nonceStr
          payOptions['partnerId'] = '1328184001'
          payOptions['prepayId'] = _data.package.split("=")[1]
          payOptions['timeStamp'] = _data.timeStamp
          payOptions['paySign'] = _data.paySign
        });
        console.log(payOptions);
        WeChat.weChatPay(payOptions,(err,sendReqOK) => {
          console.log('支付结果');
          console.log(sendReqOK);
        });
      } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
      }
    }, function(e) {
      console.log("Fetch failed!", e);
    });

  }
  componentWillMount(){
    WeChat.registerApp(appId,(err,registerOK) => {
        ToastAndroid.show(registerOK + '',ToastAndroid.SHORT);
    });
    DeviceEventEmitter.addListener('finishedShare',function(event){
      var success = event.success;
      if(success){
        ToastAndroid.show('分享成功',ToastAndroid.SHORT);
      }else{
        ToastAndroid.show('分享失败',ToastAndroid.SHORT);
      }
    });
    //  处理支付回调结果
    DeviceEventEmitter.addListener('finishedPay',function(event){
     var success = event.success;
     if(success){
      // 在此发起网络请求由服务器验证是否真正支付成功，然后做出相应的处理
     }else{
      ToastAndroid.show('支付失败',ToastAndroid.SHORT);
     }
    });
  }
  render(){
    return(
      <View style={styles.container}>
      <TouchableHighlight onPress={this._registerApp}>
      <Text style={styles.text}  >
        注册到微信
      </Text>
      </TouchableHighlight>

        <TouchableHighlight onPress={this._openApp}>
        <Text style={styles.text}  >
          打开微信
        </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._share}>
        <Text style={styles.text}  >
          分享视频到微信
        </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._test}>
        <Text style={styles.text}  >
          微信支付
        </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});
