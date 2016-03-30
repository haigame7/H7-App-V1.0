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
    AsyncStorage,
    Navigator,
    Image
} from 'react-native';
var Icon = require('react-native-vector-icons/Iconfont');

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import Register from './registerscreen';
import Forgetpwd from './forgetpwd';
import HeaderPre from '../common/header';
import UserService from '../../network/userservice';
import GlobalVariable from '../../constants/globalvariable';
import GlobalSetup from '../../constants/globalsetup';
import Toast from '@remobile/react-native-toast';

export default class Login extends Component {
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

    componentWillMount() {

    }

    render() {
        let fields = [
            { ref: 'phone', placeholder: '手机号码', placeholderTextColor: 'white', underlineColorAndroid: 'rgba(0, 0, 0, 0)', keyboardType: 'numeric', secureTextEntry: false, style: [styles.logininputfont] },
            { ref: 'password', placeholder: '请您设置密码', placeholderTextColor: 'white', underlineColorAndroid: 'rgba(0, 0, 0, 0)', keyboardType: 'default', secureTextEntry: true, message: '* 密码必填', style: [styles.logininputfont] },
            { ref: 'passwordd', placeholder: '请再次确认密码', placeholderTextColor: 'white', underlineColorAndroid: 'rgba(0, 0, 0, 0)', keyboardType: 'default', secureTextEntry: true, message: '* 密码必填', style: [styles.logininputfont] },
            { ref: 'password', placeholder: '输入密码', placeholderTextColor: 'white', underlineColorAndroid: 'rgba(0, 0, 0, 0)', keyboardType: 'default', secureTextEntry: true, selectionColor: '#FF0000', style: [styles.logininputfont] },
        ];
        return (
            <View style = {{ flex: 1 }}>
            <HeaderPre screenTitle = '登录' navigator = { this.props.navigator } />
            <Image source = {require('../../images/loginbg.jpg')} style = {styles.loginbg} resizeMode = {"cover"}>
                <View activeOpacity = {1} style = {styles.logo}>
                    <Image style = {{width: 80, height: 80, }} source = { require('../../images/logo.png') }/>
                </View>
                <View key = { 'phone' } style = { styles.logininput }>
                    <TextInput {...fields[0] } onFocus = {() => this.onFocus({...fields[0] }) } onChangeText = {(text) => this.state.data.phone = text }/>
                </View>
                <View key = { 'password' } style = { styles.logininput }>
                    <TextInput {...fields[3] }  onFocus = {() => this.onFocus({...fields[3] }) } onChangeText = {(text) => this.state.data.password = text }/>
                </View>
                <View style = {[commonstyle.row, styles.linkblock]} >
                    <TouchableOpacity style = {[commonstyle.col1, styles.link]} activeOpacity={0.8} onPress = {() => this.gotoRoute('forgetpwd') }>
                        <Text style = {[styles.linkleft, commonstyle.cream]} > { '忘记密码? ' } </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[commonstyle.col1, styles.link]} activeOpacity={0.8} onPress = {() => this.gotoRoute('register') }>
                         <Text style = {[styles.linkright, commonstyle.blue]} > { '新用户注册' } </Text>
                     </TouchableOpacity>
                </View>
                <TouchableHighlight style = {this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} underlayColor = {'#FF0000'} onPress = {() => this.onSubmit(fields) } >
                     <Text style = {styles.btnfont}> { this.state.loading ? '正在登录...' : '登录' } </Text>
                </TouchableHighlight>
            </Image>
            </View>
        );
    }

    onFocus(argument) {
        setTimeout(() => {

        }, 50);
    }

    onSubmit(argument) {
        if (this.state.loading) {
            Toast.show('请稍后...');
            return;
        }

        let keys = Object.keys(this.state.data).map((val, key) => {
            if ([null, undefined, 'null', 'undefined', ''].indexOf(this.state.data[val]) > -1) return val;
        });
        this.setState({ messages: [] });
        argument.map((val, key) => {
            if (keys.indexOf(val.ref) > -1) this.setState({ messages: this.state.messages.concat(val) });
        });
        if (this.state.messages.length > 0) {
            console.log('message wrong' + this.state.messages.length);
            return;
        }

        this.setState({ loading: true });

        UserService.loginByInfo(this.state.data, (response) => {
            if (response[0].MessageCode == '0') {
              UserService.getUserInfo(this.state.data.phone, (response) => {
                if (response[0].MessageCode == '0') {
                  let data = response[1];
                  data['needUpdate'] = false;
                  AsyncStorage.setItem(GlobalVariable.USER_INFO.USERSESSION, JSON.stringify(data));
                  {/*更新appjs登录状态*/}
                  setTimeout(() => {
                    Toast.showLongCenter('登陆成功');
                    if(this.props.updateLoginState){
                      this.props.updateLoginState();
                     }
                     this.props.navigator.pop();
                  }, 500);
                } else {
                  console.log('获取用户数据失败' + response[0].Message);
                  Toast.show(
                      response[0].Message
                  );
                  this.setState({
                    loading: false,
                  })
                }
              })
            } else {
              console.log('登录失败' + response[0].Message);
              Toast.show(
                  response[0].Message
              );
              this.setState({
                loading: false,
              })
            }
        })
    }

    async onSuccess(data) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            ToastAndroid.show(String(error).replace('Error: ', ''), ToastAndroid.LONG);
        }
    }

    goBack() {
        if (this.props.navigator) {
            this.props.navigator.pop();
        }
    }

    gotoRoute(name) {
        if (name == 'forgetpwd') {
            if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
                this.props.navigator.push({ name: name, component: Forgetpwd, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
            }
        } else if (name == 'register') {
            if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
                this.props.navigator.push({ name: name, component: Register, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
            }
        }
    }

    replaceRoute(name) {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.replace({ name: name });
        }
    }
}
