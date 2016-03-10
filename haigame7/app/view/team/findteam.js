'use strict';
/**
 *  加入战队组件
 * @return {[FindTeam Component]}
 * @author zaki.zi
 */
var React = require('react-native');
var CommonStyle = require('../../styles/commonstyle');

var {
  View,
  Text,
  Image,
  TouchableHighlight
  } = React;

var FindTeam = React.createClass({
  render: function () {
    return (
      <View style={CommonStyle.headerRow}>
        <View style={CommonStyle.headerTitle}>
          <TouchableHighlight onPress={this._onPressButton}>
          <Text>加入战队</Text>
          </TouchableHighlight>
        </View>
        <View style={CommonStyle.headerTitle}>
          <TouchableHighlight onPress={this._onPressButton}>
          <Text>招募队员</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

module.exports = FindTeam;
