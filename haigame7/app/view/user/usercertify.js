'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
var {
  View,
  Component,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  Alert,
  ToastAndroid
} = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import UserService from '../../network/userservice';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
    data: {
      dota2id:undefined,
      certifyid:'000000',
    },
    content:undefined,
    messages: [],
     btn_msg: '认证',
   fightData: this.props.fightData
  }
}

componentWillMount() {
  if (this.state.fightData.CertifyState != '1') {
    let data = {'dota2id':this.state.fightData.GameID,'certifyid':this.state.fightData.CertifyName}
    this.setState({
      btn_msg: '重新认证',
      dota2id: data
    })
  }
}
componentWillUnmount() {
  this.timer && clearTimeout(this.timer);
}
renderMessages() {
  if (this.state.messages.length > 0) {
    let messages = this.state.messages.map((val, key) => {
      if (val.message) return <Text style={styles.message} key={key}>{val.message}</Text>;
    });
    return messages;
  }
}
gotoCertify(numberID,argument) {
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
  if (this.state.btn_msg == '认证') {
    UserService.certifyGameID({'PhoneNumber':this.props.userData.PhoneNumber,'GameID': this.state.data.dota2id},(response) => {
        console.log(response);
        if (response[0].MessageCode == '0') {
          let data = this.state.data;
          data['certifyid'] = response[0].Message;
          this.setState({data: data,btn_msg: '重新认证'})
          ToastAndroid.show('申请已经发出,请等待',ToastAndroid.SHORT);
          this.props._callback('Usercertify');
          this.timer = setTimeout(()=>{
            this.props.navigator.pop();
          },2000);
        } else {
          console.log('认证失败');
        }
    });
  } else {
    UserService.updateCertifyGameID({'PhoneNumber':this.props.userData.PhoneNumber,'GameID': this.state.data.dota2id},(response) => {
        console.log(response);
    });
  }
  return;
}

render(){
  let fields = [
    {ref: 'dota2id', placeholder: '000000', keyboardType: 'numeric',placeholderTextColor: '#484848', message: '数字ID必填', style: [styles.logininputfont]},
    {ref: 'certifyid', editable: false, style: [styles.logininputfont]}
  ]
  return (
    <View >
      <Header screenTitle='账号认证' navigator={this.props.navigator}/>
      <Image source = {require('../../images/loginbg.jpg')} style = {styles.loginbg} resizeMode = {"cover"}>
      <View key={'messages'}>
        {this.renderMessages()}
      </View>

      <View style={styles.loginlabel}>
        <Text style={commonstyle.cream}>{'请输入Dota2数字ID'}</Text>
      </View>
      <View key={'dota2id'} style={styles.logininput}>
        <TextInput {...fields[0]} onChangeText={(text) => this.state.data.dota2id = text} />
      </View>

      <View style={styles.loginlabel}>
        <Text style={commonstyle.cream}>{'自动生成的氦7ID为'}</Text>
      </View>
      <View key={'certifyid'} style={styles.logininput}>
        <TextInput {...fields[1]}>{this.state.data.certifyid}</TextInput>
        <TouchableHighlight style={styles.logininputright} underlayColor={'#000000'} onPress={()=>console.log('copy certify')}>
          <Icon name="copy" size={30} color={'#C3C3C3'} />
        </TouchableHighlight>
      </View>

      <TouchableHighlight style={this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} underlayColor={'#FF0000'} onPress={() => this.gotoCertify('setpwd',fields)}>
        <Text style={styles.btnfont} >{this.state.btn_msg}</Text>
      </TouchableHighlight>

      <View style={styles.linkblock}>
        <Text style={commonstyle.cream}>{'规则文字内容:\n'}</Text>
        <Text style={commonstyle.cream}>{'1、请在输入框内输入您的DOTA数字ID;\n2、输入数字ID后，请点击”认证“按钮;\n3、点击”认证“按钮后，会在ID生成框内自动生成一个名字ID\n4、用户需在DOTA2客户端内，将自己的DOTA2ID，修改成由氦7平台提供的ID；\n5、修改完成后，我们将在3个工作日内，完成审核工作确认无误后，予以认证'}</Text>
      </View>
      </Image>
    </View>
   );
 }
}
