var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
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
      <View style={[CommonStyle.header, CommonStyle.row]}>
        <View style={CommonStyle.col1}>
          <TouchableOpacity style={CommonStyle.headerleft} onPress={this._pop}><Icon name="angle-left" size={30} color="#FFF" /></TouchableOpacity>
        </View>
        <View style={[CommonStyle.col1, CommonStyle.viewcenter]}>
          <Text style={CommonStyle.headertext} numberOfLines={1}>{obj.title}</Text>
        </View>
        <View style={CommonStyle.col1}></View>
      </View>
    );
  },

  _pop: function(){
    this.props.navigator.pop();
  }

});
