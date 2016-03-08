'use strict';
/**
 * 组队模块
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
