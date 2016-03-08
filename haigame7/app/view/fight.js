'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');

var {
  View,
  Text,
  Image
  } = React;

var FightStyle = require('../styles/fightstyle');

var Fight = React.createClass({
  render: function () {
    return (
      <View >
        <Text >
          Fight Screen.
        </Text>
        <Image style={{width: 15,height: 15}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
      </View>
    );
  }
});

module.exports = Fight;
