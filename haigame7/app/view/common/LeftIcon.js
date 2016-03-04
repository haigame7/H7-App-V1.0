var React = require('react-native');

var HeaderStyle = require('../../styles/HeaderStyle');
var {
  StyleSheet,
  Text,
  View
  } = React;

module.exports = React.createClass({
  render: function(){
    return (
      <View>
        <View style={HeaderStyle.go}>
        </View>
      </View>
    );
  }
});
