'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
import Colors from '../components/common/colors';
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Navigator
  } = React;

 import styles from '../styles/userstyle';
import SecondPageComponent from './common/SecondPageComponent';
import Login from './user/login';
import RegisterScreen from './user/registerscreen';
import ZHRB from '../../temp/zhrb';
import Gwdemo from '../../temp/gwdemo';
import MyMsg from './user/message_list_screen';
var User = React.createClass({
  getInitialState() {
    console.log('UserScreen Init Data');
    return {
      _navigator: this.props.navigator
    };
  },
  componentDidMount() {
    // console.log(this.state._navigator);
  },

  _pressButton() {
    // console.log(this.refs.login_btn.getDOMNode().value);
    // ToastAndroid.show('登陆喽', ToastAndroid.SHORT);
    const nav = this.state._navigator;
    if(nav) {
      nav.push({
        name: 'SecondPageComponent',
        component: Login,
        params: {
         name: 'Login',
         id: 1
       }
      })
    }else{
      console.log('_navigator_navigator_navigator_navigator');
    }
  },
  _pressZH() {
    const nav = this.state._navigator;
    if(nav) {
      nav.push({
        name: 'zhrb',
        component: ZHRB
      })
    }else{
      console.log('_navigator_navigator_navigator_navigator');
    }
  },

  _pressGwdemo() {
    const nav = this.state._navigator;
    if(nav) {
      nav.push({
        name: 'zhrb',
        component: Gwdemo,
        sceneConfig:Navigator.SceneConfigs.FloatFromRight
      })
    }else{
      console.log('_navigator_navigator_navigator_navigator');
    }
  },

  _toRegister() {
    const nav = this.state._navigator;
    if(nav) {
      nav.push({
        name: '注册',
        component: RegisterScreen,
        sceneConfig:Navigator.SceneConfigs.FloatFromRight
      })
    }else{
      console.log('导航设置错误');
    }
  },
  _myMsg() {
    const nav = this.state._navigator;
    if(nav) {
      nav.push({
        name: '信息',
        component: MyMsg,
        sceneConfig:Navigator.SceneConfigs.FloatFromRight
      })
    }else{
      console.log('导航设置错误');
    }
  },
  render: function () {
    return (
      <View >
      <View style={styles.bgImageWrapper}>
      <View style={styles.centerbg}>
      </View>
      </View>
      <Header initObj={{title:'个人中心',message:true,}}   navigator={this.props.navigator}></Header>
      <Image source={require('../images/loginbg.jpg')} style={styles.centerheadbg} resizeMode={"cover"} >
       <Text style={{color:'white'}}>我的战队</Text>
      </Image>
      <TouchableOpacity style={styles.centerlicontent} onPress={this._myMsg.bind(null,this)}>
        <View style={[styles.centerliicon,{backgroundColor:'orange'}]} ></View>
        <Text style={styles.centerlitext}>我的信息</Text>
      </TouchableOpacity>
        <View style={styles.centerfootbg}>
        <TouchableOpacity style={styles.centerlicontent} onPress={this._pressButton.bind(null,this)}>
          <View style={[styles.centerliicon,{backgroundColor:'orange'}]} ></View>
          <Text style={styles.centerlitext}>我的战队</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} onPress={this._toRegister.bind(null,this)}>
          <View style={[styles.centerliicon,{backgroundColor:'rgb(86, 213, 226)'}]} ></View>
          <Text style={styles.centerlitext}>我的赛事</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} onPress={this._pressZH.bind(null,this)}>
          <View style={[styles.centerliicon,{backgroundColor:'orange'}]} ></View>
          <Text style={styles.centerlitext}>我的约战</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} onPress={this._pressGwdemo.bind(null,this)}>
          <View style={[styles.centerliicon,{backgroundColor:'orange'}]} ></View>
          <Text style={styles.centerlitext}>我的精彩</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} onPress={this._pressGwdemo.bind(null,this)}>
          <View style={[styles.centerliicon,{backgroundColor:'orange'}]} ></View>
          <Text style={styles.centerlitext}>我的任务</Text>
        </TouchableOpacity>

        </View>
    </View>
    );
  }
});

module.exports = User;
