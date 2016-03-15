'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
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

 import styles from '../../styles/userstyle';


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {
        dota2id:undefined,
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

    return;
  }

  render(){
    let fields = [
      {ref: 'dota2id', placeholder: '000000', keyboardType: 'default',placeholderTextColor: 'white', color:'white', secureTextEntry: false, message: '数字ID必填', style: [styles.inputText]},
      {ref: 'certifyid',  style: [styles.inputText,{color:'rgb(228, 176, 75)', fontSize:18,marginTop:5,lineHeight:30}]}
    ]
    return (
      <View >

      <Header initObj={{title:'账号认证'}}   navigator={this.props.navigator}></Header>
        <Image source = {require('../../images/loginbg.jpg')} style = {styles.loginbg} resizeMode = {"cover"}>
        <View key={'messages'}>
          {this.renderMessages()}
        </View>

        <View key={'dota2id'} style={styles.inputContainer}>
       <Text style={UserCertifyStyle.inputTitleText}>{'请输入Dota2数字ID'}</Text>
          <TextInput {...fields[0]} onChangeText={(text) => this.state.data.dota2id = text} />
        </View>

        <View key={'certifyid'}  style={[styles.inputContainerSecond,{marginTop:5}]}>
        <Text style={UserCertifyStyle.inputTitleText}>{'自动生成的氦7ID为'}</Text>
          <Text {...fields[1]}>{this.state.data.certifyid}</Text>
        <Icon name="book" size={30} style={[UserCertifyStyle.copyCertify]} onPress={()=>console.log('copy certify')} />
        </View>
        <View style={styles.submitText}>
        <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.gotoCertify('setpwd',fields)}>
          <Text style={styles.buttonText} >{'认证'}</Text>
        </TouchableHighlight>
         <View style={UserCertifyStyle.certifyRuleText}>
         <Text style={[UserCertifyStyle.inputTitleText,{marginBottom:-10,marginLeft:0}]}>{'规则文字内容:\n'}</Text>
         <Text style={[UserCertifyStyle.inputTitleText,{marginLeft:0,lineHeight:20}]}>{'1、请在输入框内输入您的DOTA数字ID;\n2、输入数字ID后，请点击”认证“按钮;\n3、点击”认证“按钮后，会在ID生成框内自动生成一个名字ID\n4、用户需在DOTA2客户端内，将自己的DOTA2ID，修改成由氦7平台提供的ID；\n5、修改完成后，我们将在3个工作日内，完成审核工作确认无误后，予以认证'}</Text>
         </View>
        </View>
        </Image>

    </View>
    );
  }
}
var UserCertifyStyle = StyleSheet.create({
inputTitleText:{
  marginBottom:10,
  marginLeft:40,
  color:'rgb(150, 150, 150)',
},
copyCertify:{
left:Util.size.width-70,
marginTop:-35,
marginLeft:-5,
color:'rgb(150, 150, 150)',
},
certifyRuleText:{
  marginTop:20,
  marginLeft: 0,
  width: Util.size.width - 70,

},
centertextareacount:{
  height:30,
  color:'rgb(255,255,255)',
},

});
