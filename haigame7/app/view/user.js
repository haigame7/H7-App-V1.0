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

var UserStyle = require('../styles/userstyle');
import SecondPageComponent from './common/SecondPageComponent';
import Login from './user/login';
import RegisterScreen from './user/registerscreen';
import ZHRB from '../../temp/zhrb';
import Gwdemo from '../../temp/gwdemo';
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
  render: function () {
    return (
      <View >
      <Header initObj={{
      title:'个人中心',
      backName:'返回',
      }}   navigator={this.props.navigator}></Header>
        <Text >
          User Screen.
        </Text>
        <Image style={{width: 15,height: 15}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        <TouchableOpacity onPress={this._pressButton.bind(null,this)}>
          <Text>登陆</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toRegister.bind(null,this)}>
          <Text>注册</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._pressZH.bind(null,this)}>
          <Text>知乎日报</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._pressGwdemo.bind(null,this)}>
          <Text>官网Demo</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = User;
