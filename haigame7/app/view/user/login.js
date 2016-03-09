/**
 * APPs登录页
 * @return
 * @author
 */
 'use strict';

 import React, {
   Component,
   ScrollView,
   Text,
   View,
   TextInput,
   TouchableHighlight,
   TouchableOpacity,
   ToastAndroid,
   Alert,
   AsyncStorage,
   Navigator,
   Image
 } from 'react-native';
 var Icon = require('react-native-vector-icons/FontAwesome');

 import styles from '../../styles/userstyle';
 import Register from './registerscreen';
 import Forgetpwd from './forgetpwd';
 import Header from '../common/headernav';
 import HeaderPre from '../common/header';
 import UserService from '../../network/userservice';
 import GlobalVariable from '../../constants/globalvariable';
 import GlobalSetup from '../../constants/globalsetup';

 export default class extends Component {
   constructor(props) {
     super(props);

     this.state = {
       data: {
            phone: undefined,
         password: undefined,
             role: 0
       },
       loading: false,
       login: false
     };
   }

   render() {
     let fields = [
       {ref: 'phone', placeholder: '手机号码', placeholderTextColor: 'white', keyboardType: 'numeric', secureTextEntry: false, style: [styles.inputText]},
       {ref: 'password', placeholder: '请您设置密码', placeholderTextColor: 'white', keyboardType: 'default', secureTextEntry: true, message: '* 密码必填', style: [styles.inputText]},
       {ref: 'passwordd', placeholder: '请再次确认密码', placeholderTextColor: 'white', keyboardType: 'default', secureTextEntry: true, message: '* 密码必填', style: [styles.inputText]},
       {ref: 'password', placeholder: '输入密码', placeholderTextColor: 'white',  keyboardType: 'default', secureTextEntry: true, style: [styles.inputText]},
     ];
     return (
     <View style={{ flex: 1 }}>
       <View style={styles.bgImageWrapper}>
        <Image source={require('../../images/loginbg.jpg')} style={styles.loginbg} resizeMode={"cover"} />
     </View>
     <Header initObj={{
      title:'用户登录',
       backName:'返回',
      }}   navigator={this.props.navigator}></Header>
         <View activeOpacity={1} style={styles.titleContainer}>
          <Image style={{width:80,height:80,}} source={require('../../images/logo.png')} />
         </View>

         <View key={'phone'} style={styles.inputContainer}>
           <TextInput {...fields[0]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.phone = text} />
         </View>
         <View key={'password'} style={styles.inputContainerSecond}>
           <TextInput {...fields[1]} onFocus={() => this.onFocus({...fields[1]})} onChangeText={(text) => this.state.data.password = text} />
         </View>

         <View style={styles.linkText}>
           <TouchableOpacity onPress={() => this.gotoRoute('forgetpwd')}>
               <Text style={styles.linkTextLeft}>{'忘记密码? '}</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => this.gotoRoute('register')}>
             <Text style={styles.linkTextRight}>{'新用户注册'}</Text>
           </TouchableOpacity>
          </View>
        <View style={styles.submitText}>
         <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.onSubmit(fields)}>
           <Text style={styles.buttonText}>{this.state.loading ? '正在登录...' : '登录'}</Text>
         </TouchableHighlight>
         </View>

       </View>
     );
   }

   onFocus(argument) {
     setTimeout(() => {

     }, 50);
   }

   onSubmit(argument) {
     if (this.state.loading) {
      Alert.alert('请稍后...');
       return;
     }

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

     this.setState({loading: true});

     UserService.loginByInfo(this.state.data,(response) => {
       //return:{MessageCode: 0, Message: ""}
       if (response !== GlobalSetup.REQUEST_SUCCESS) {
         let message = '';
           this.setState({loading: false});
         if(response.MessageCode == '40001'){
           message = '服务器请求异常';
         }else if(response.MessageCode == '10001'){
           message = '该手机号不存在';
         }else if(response.MessageCode == '10002'){
           message = '密码错误';
         }else if(response.MessageCode == '0'){
           message = '登录成功';

         }
          Alert.alert(
           message ,
         );

         //保存用户信息
         if(message=='登录成功'){
           AsyncStorage.setItem(GlobalVariable.USER_INFO.USERSESSION,JSON.stringify(this.state.data));
           setTimeout(() => {
             this.props.navigator.pop();
           }, 2000);
         }
           //ToastAndroid.show('获取成功',ToastAndroid.SHORT);
       } else {
         Alert.alert('请求错误');
         //ToastAndroid.show('请求错误',ToastAndroid.SHORT);
       }
     })
   }

   async onSuccess(data) {
     try {
       await AsyncStorage.setItem(key, JSON.stringify(data));
     } catch (error) {
       ToastAndroid.show(String(error).replace('Error: ',''), ToastAndroid.LONG);
     }
   }

   goBack() {
     if (this.props.navigator) {
       this.props.navigator.pop();
     }
   }

   gotoRoute(name) {
     if(name== 'forgetpwd'){
       if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
         this.props.navigator.push({name: name,component: Forgetpwd,sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
       }
     }else if(name == 'register'){
       if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
         this.props.navigator.push({name: name,component: Register,sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
       }
     }

   }

   replaceRoute(name) {
     if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
       this.props.navigator.replace({name: name});
     }
   }
 }
