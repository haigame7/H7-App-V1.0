var React = require('react-native');
var Icon = require('./lefticon');
var Util = require('./util');
var User = require('../user');
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
        <View style={[CommonStyle.headerTitle, CommonStyle.headerCenter]}>
          <Text style={[CommonStyle.headerFontFFF, CommonStyle.headerTitlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
        <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._pushroute}>
          <Image source={{uri:'http://images.haigame7.com/common/avator.png'}}  style={CommonStyle.headerImage}/>
        </TouchableOpacity>
      </View>
    );
  },

  _pop: function(){
    if(this.props.navigator!==undefined){
     this.props.navigator.pop();
    }
  },
  _pushroute:function(){
    this.props.navigator.push({name:'user',component:User});
  }

});
