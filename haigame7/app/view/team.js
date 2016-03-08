'use strict';
/**
 * 组队模块
 * 整体包括
 * 切换按钮，战队列表，用户列表，我的战队名片
 * @return {[Team Component]}
 * @author aran.hu
 */
var React = require('react-native');
var CommonStyle = require('../styles/commonstyle');

var {
  View,
  Text,
  Image,
  TouchableHighlight,
  } = React;

var TeamStyle = require('../styles/teamstyle');

var Team = React.createClass({
  render: function () {
    return (
      <View style={CommonStyle.headerRow}>
        <View style={CommonStyle.headerTitle}>
          <TouchableHighlight >
          <Text>加入战队</Text>
          </TouchableHighlight>
        </View>
        <View  style={CommonStyle.headerTitle}>
          <TouchableHighlight>
          <Text>招募队员</Text>
          </TouchableHighlight>
        </View>
      </View>

    );
  }
});

module.exports = Team;
