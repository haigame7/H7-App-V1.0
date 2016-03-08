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

var RankStyle = require('../styles/rankstyle');

var Rank = React.createClass({
  render: function () {
    return (
      <View >
        <Text >
          Rank Screen.
        </Text>
        <Image style={{width: 15,height: 15}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
      </View>
    );
  }
});

module.exports = Rank;
