var React = require('react-native');
var Icon = require('./LeftIcon');
var Util = require('./Util');

var HeaderStyle = require('../../styles/HeaderStyle');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity
  } = React;

module.exports = React.createClass({
  render: function(){
    var obj = this.props.initObj;
    return (
      <View style={[HeaderStyle.header, HeaderStyle.row, HeaderStyle.center]}>
        <TouchableOpacity style={[HeaderStyle.row,HeaderStyle.center]} onPress={this._pop}>
          <Icon/>
          <Text style={HeaderStyle.fontFFF}>{obj.backName}</Text>
        </TouchableOpacity>
        <View style={[HeaderStyle.title, HeaderStyle.center]}>
          <Text style={[HeaderStyle.fontFFF, HeaderStyle.titlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
      </View>
    );
  },

  _pop: function(){
    this.props.navigator.pop();
  }
});
