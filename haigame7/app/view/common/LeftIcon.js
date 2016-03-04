var React = require('react-native');

var CommonStyle = require('../../styles/commonstyle');
var {
  StyleSheet,
  Text,
  View
  } = React;
//
module.exports = React.createClass({
  render: function(){
    return (
      <View>
        <View style={CommonStyle.headerGo}>
        </View>
      </View>
    );
  }
});
