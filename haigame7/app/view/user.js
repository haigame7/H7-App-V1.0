'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid
  } = React;

var UserStyle = require('../styles/userstyle');
import SecondPageComponent from './common/SecondPageComponent';
import Login from './common/register/login';
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
      </View>
    );
  }
});

module.exports = User;
