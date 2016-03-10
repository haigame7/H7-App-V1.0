'use strict';

import React, {
  Component,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Switch,
  TextInput,
  Navigator,
  AsyncStorage,
  Alert,
  ToastAndroid
} from 'react-native';

import styles from '../../styles/userstyle';
import registerstyles from '../../styles/registerstyle';
import Header from '../common/headernav';
import User from '../user.js';
import UserService from '../../network/userservice';
import GlobalSetup from '../../constants/globalsetup';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
           phone: this.props.data.phone,
        password: undefined,
        passwordd: undefined,
        securitycode:this.props.data.securitycode,
      },
      loading:false,
      notshow: true,
      reset:undefined,
      messages: []
    }
  };

  componentDidMount() {
    this.setState({reset:this.props.reset});
              //这里获取从FirstPageComponent传递过来的参数: id


  }

  onFocus(argument) {
    setTimeout(() => {
      // let scrollResponder = this.refs.registerFormC.getScrollResponder();
      //     scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      //       React.findNodeHandle(this.refs[argument.ref]), 110, true
      //     );
    }, 50);
  }

  showPwd(notshow){
  if(notshow){
      this.setState({notshow: false});
   }else{
      this.setState({notshow: true});
   }
  return this.state.notshow;
  }
  /**
   * 用户注册
   * @return {[type]} [description]
   */
  register(isreset) {
    if (this.state.data.password !== this.state.data.passwordd) {
        Alert.alert('两次密码输入不一致');
      return;
    }
    if(isreset){
      UserService.resetPassword(this.state.data,(response) => {
        //return:{MessageCode: 0, Message: ""}
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          let message = '';
          if(response.MessageCode == '40001'){
            message = '服务器请求异常';
          }else if(response.MessageCode == '10001'){
            message = '手机号不存在';
          }else if(response.MessageCode == '10005'){
            message = '验证码输入有误';
          }else if(response.MessageCode == '10006'){
            message = '验证码过期';
          }else if(response.MessageCode == '0'){
            message = '重置成功';
          }
           Alert.alert(
            message ,
          );
          if(message=='重置成功'){
            //重置完自动登录
             AsyncStorage.setItem(GlobalVariable.USER_INFO.USERSESSION,JSON.stringify(this.state.data));
            //跳转到个人中心
            setTimeout(() => {
              var route =this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-4];
               this.props.navigator.jumpTo(route);
            }, 2000);
          }
            //ToastAndroid.show('获取成功',ToastAndroid.SHORT);
        } else {
          Alert.alert('请求错误');
          //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
        }
     })
   }else{
      UserService.registerByInfo(this.state.data,(response) => {
        //return:{MessageCode: 0, Message: ""}
        if (response !== GlobalSetup.REQUEST_SUCCESS) {
          let message = '';
          if(response.MessageCode == '40001'){
            message = '服务器请求异常';
          }else if(response.MessageCode == '10004'){
            message = '该手机号已注册';
          }else if(response.MessageCode == '10005'){
            message = '验证码输入有误';
          }else if(response.MessageCode == '10006'){
            message = '验证码过期';
          }else if(response.MessageCode == '0'){
            message = '注册成功';
          }
           Alert.alert(
            message ,
          );
          if(message=='注册成功'){
            //注册完自动登录
             AsyncStorage.setItem(GlobalVariable.USER_INFO.USERSESSION,JSON.stringify(this.state.data));
            //跳转到个人中心
            setTimeout(() => {
              var route =this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-4];
               this.props.navigator.jumpTo(route);
            }, 2000);
          }
            //ToastAndroid.show('获取成功',ToastAndroid.SHORT);
        } else {
          Alert.alert('请求错误');
          //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
        }
      })
    }
  }


  render() {

    let fields = [
      {ref: 'phone', placeholder: '手机号',placeholderTextColor: 'white', color:'white',keyboardType: 'default', secureTextEntry: false, message: '* 手机号必填', style: [styles.inputText]},
      {ref: 'password', placeholder: '请您设置密码',placeholderTextColor: 'white', color:'white',keyboardType: 'default', secureTextEntry: this.state.notshow, message: '* 密码必填', style: [styles.inputText]},
      {ref: 'passwordd', placeholder: '请再次确认密码',placeholderTextColor: 'white', color:'white',keyboardType: 'default', secureTextEntry: this.state.notshow, message: '* 密码必填', style: [styles.inputText]},
      {ref: 'securitycode', placeholder: '验证码',placeholderTextColor: 'white', color:'white',keyboardType: 'default', secureTextEntry: false, message: '* 验证码必填', style: [styles.inputText]}
    ]
    var headerset;
    var footerset;
    if(this.state.reset){
      headerset =  <View><Header initObj={{title:'设置新密码',backName:'返回',}}  navigator={this.props.navigator}></Header><View activeOpacity={1} style={styles.titleContainer}></View></View>
    }else{
        headerset =<View><Header initObj={{title:'设置氦7密码',backName:'返回',}}  navigator={this.props.navigator}></Header><View activeOpacity={1} style={styles.titleContainer}></View><Text style={styles.setpwdText}>{'设置氦7密码后，您可以用手机号和密码同时登陆氦7电脑版和手机版'}</Text></View>
    }
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.bgImageWrapper}>
         <Image source={require('../../images/loginbg.jpg')}  style={styles.loginbg}  />
      </View>

        {headerset}
        <View key={'password'} style={styles.inputContainer}>
          <TextInput {...fields[1]} onFocus={() => this.onFocus({...fields[1]})} onChangeText={(text) => this.state.data.password = text} />
        </View>

        <View key={'passwordd'} style={styles.inputContainerSecond}>
          <TextInput {...fields[2]} onFocus={() => this.onFocus({...fields[2]})} onChangeText={(text) => this.state.data.passwordd = text} />
        </View>
        <View style={styles.switchBarContainer}>
        <Text style={styles.switchBarText} >{'显示密码'}</Text>
        <Switch
            onValueChange={(value) =>this.showPwd(this.state.notshow)}
            style={styles.switchBarButton}
            value= {!this.state.notshow}
            />
        </View>
        <View style={styles.submitText}>
        <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.register(this.state.reset)}>
          <Text style={styles.buttonText} onPress={() => this.register(this.state.reset)}>{'完成'}</Text>
        </TouchableHighlight>
        </View>
      </View>

    );
  }
}
