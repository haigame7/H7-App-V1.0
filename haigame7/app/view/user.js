'use strict';
/**
 * APPs我入口文件
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var {
  View,
  Text,
  Image
  } = React;

var UserStyle = require('../styles/userstyle');

var User = React.createClass({
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
      </View>
    );
  }
});

module.exports = User;
