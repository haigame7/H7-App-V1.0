var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var CommonStyle = require('../../styles/commonstyle');
var {
  StyleSheet,
  Text,
  View
  } = React;

module.exports = React.createClass({
  render: function(){
    return (
      <View>
        <Icon name="angle-left" size={30} color="#FFF" />
      </View>
    );
  }
});
