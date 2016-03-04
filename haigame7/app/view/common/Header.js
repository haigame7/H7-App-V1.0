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
      <View style={[CommonStyle.header, CommonStyle.headeRow, CommonStyle.headerCenter]}>
        <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._pop}>
          <Icon/>
          <Text style={CommonStyle.headerFontFFF}>{obj.backName}</Text>
        </TouchableOpacity>
        <View style={[CommonStyle.headerTitle, CommonStyle.headerCenter]}>
          <Text style={[CommonStyle.headerFontFFF, CommonStyle.headerTitlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
      </View>
    );
  },

  _pop: function(){
    if(this.props.navigator!==undefined){
     this.props.navigator.pop();
    }
  }
});
