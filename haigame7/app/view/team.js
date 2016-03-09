'use strict';
/**
 * 组队模块
 * 整体包括
 *
 * 加入战队组件，战队招募组件
 * @return {[Team Component]}
 * @author aran.hu
 */
var React = require('react-native');
var CommonStyle = require('../styles/commonstyle');
var TeamStyle = require('../styles/teamstyle');
var Loading = require('./common/loading');
var FindTeam = require('./team/findteam');

var {
  View,
  Text,
  Image,
  TouchableHighlight,
  } = React;

var Team = React.createClass({

  getInitialState: function()
  {
    return {load: false};
  },
  componentDidMount:function()
  {
    this.setState({load:true});
  },

  render: function ()
  {
    if (!this.state.load)
    {
      return (<Loading/>);
    }
    return (<FindTeam/>);
  }
});

module.exports = Team;
