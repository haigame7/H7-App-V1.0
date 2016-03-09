'use strict';
/**
 *  正在加载组件
 * @return {[Loading Component]}
 * @author zaki.zi
 */
var React = require('react-native');

var {
  View,
  Text,
  Image
  } = React;

var Loading = React.createClass({
  render: function () {
    return (
    <View>
      <Text>
        Loading...
      </Text>
    </View>
    );
  }
});

module.exports = Loading;
