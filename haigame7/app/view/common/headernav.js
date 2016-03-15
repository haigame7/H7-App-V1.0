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
    var message;
    if(obj.message==undefined){
     message = <View></View>;
   }else if(obj.message=='message'){
     message = <Icon name="envelope" size={30} color="#fff" />
   }else if(obj.message=='finish'){
     message = <Text style={CommonStyle.headertextright}>完成</Text>
   }
    return (
      <View style={[CommonStyle.header, CommonStyle.row]}>
        <View style={CommonStyle.col1}>
          <TouchableOpacity style={CommonStyle.headerleft} onPress={this._pop}><Icon name="angle-left" size={30} color="#FFF" /></TouchableOpacity>
        </View>
        <View style={[CommonStyle.col1, CommonStyle.viewcenter]}>
          <Text style={CommonStyle.headertext} numberOfLines={1}>{obj.title}</Text>
        </View>
        <View style={CommonStyle.col1}>
        <TouchableOpacity style={CommonStyle.headerright} activeOpacity={0.8} onPress={this._pushroute}>
        {message}
        </TouchableOpacity>
        </View>
      </View>
    );
  },

  _pop: function(){
    this.props.navigator.pop();
  },
  _pushroute:function(){
    //this.props.navigator.push({name:'login',component:Login});
  }

});
