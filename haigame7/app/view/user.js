'use strict';
/**
 * APPs我入口文件
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');

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
        <Text >
          User Screen.
        </Text>
        <Image style={{width: 15,height: 15}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
      </View>
    );
  }
});

module.exports = User;
