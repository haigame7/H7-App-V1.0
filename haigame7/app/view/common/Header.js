var React = require('react-native');
var Icon = require('./lefticon');
var Util = require('./util');

var CommonStyle = require('../../styles/commonstyle');
var User = require('../user');


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
    if(this.props.navigator!==undefined){
    return (
      <View style={[CommonStyle.header, CommonStyle.headerRow, CommonStyle.headerCenter]}>
        <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._pop}>
          <Icon/>
          <Text style={CommonStyle.headerFontFFF}>{obj.backName}</Text>
        </TouchableOpacity>
        <View style={[CommonStyle.headerTitle, CommonStyle.headerCenter]}>
          <Text style={[CommonStyle.headerFontFFF, CommonStyle.headerTitlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
        <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._user}>
         <Image style={CommonStyle.headerImage} source={{uri: 'http://images.haigame7.com/common/avator.png'}} />
        </TouchableOpacity>
      </View>
    );
  }else{
    return (

      <View style={[CommonStyle.header, CommonStyle.headerRow, CommonStyle.headerCenter]}>
         <View style={[CommonStyle.headerTitle, CommonStyle.headerCenter]}>
           <Text style={[CommonStyle.headerFontFFF, CommonStyle.headerTitlePos]} numberOfLines={1}>{obj.title}</Text>
         </View>
         <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._user}>
          <Image style={CommonStyle.headerImage}  source={{uri: 'http://images.haigame7.com/common/avator.png'}} />
         </TouchableOpacity>
      </View>
    );
  }
  },

  _pop: function(){

     this.props.navigator.pop();

  },
  _user: function(){

  console.log( this.props.navigator);
   this.props.navigator.push({
      component: User,
     });
  }
});
