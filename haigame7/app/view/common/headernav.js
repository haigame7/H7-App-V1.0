var React = require('react-native');
var Icon = require('./lefticon');
var Util = require('./util');

var CommonStyle = require('../../styles/commonstyle');


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
      <View style={[CommonStyle.header, CommonStyle.headerRow, CommonStyle.headerCenter]}>
        <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._pop}>
          <Icon/>

        </TouchableOpacity>
        <View style={[CommonStyle.headerTitle, CommonStyle.headerCenter]}>
          <Text style={[CommonStyle.headerFontFFF]} numberOfLines={1}>{obj.title}</Text>
        </View>
      </View>
    );
  },

  _pop: function(){
    this.props.navigator.pop();
  }

});
