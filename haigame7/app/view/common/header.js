var React = require('react-native');
var Icon = require('./lefticon');
var Util = require('./util');
var User = require('../user');
import Login from '../user/login';
var CommonStyle = require('../../styles/commonstyle');
import GlobalVariable from '../../constants/globalvariable';

var {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
  } = React;

module.exports = React.createClass({

  getInitialState: function()
  {
    return {
      data:undefined
   };
  },
  componentDidMount:function()
  {
   AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>this.setState({data:value}));
  },
  render: function(){
    var obj = this.props.initObj;

    if (this.state.data!==null) {
      userLogin = <Image source={{uri:'http://sso.haigame7.com/images/logo.png'}}  style={CommonStyle.headerImage}/>
    } else {
      userLogin = <Image source={{uri:'http://images.haigame7.com/common/avator.png'}}  style={CommonStyle.headerImage}/>
    }
    return (
      <View style={[CommonStyle.header, CommonStyle.headerRow, CommonStyle.headerCenter]}>
        <View style={[CommonStyle.headerTitle, CommonStyle.headerCenter]}>
          <Text style={[CommonStyle.headerFontFFF, CommonStyle.headerTitlePos]} numberOfLines={1}>{obj.title}</Text>
        </View>
        <TouchableOpacity style={[CommonStyle.headerRow,CommonStyle.headerCenter]} onPress={this._pushroute}>
        {userLogin}
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
    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>this.setState({data:value}));
    if (this.state.data!==null){
        this.props.navigator.push({name:'user',component:User});
    }else{
        this.props.navigator.push({name:'login',component:Login});
    }

  }

});
