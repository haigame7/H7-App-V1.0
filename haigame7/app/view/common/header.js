var React = require('react-native');
var Util = require('./util');
var User = require('../user');
import Login from '../user/login';
var Icon = require('react-native-vector-icons/FontAwesome');
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
      userLogin = <Icon name="user" size={30} color="#FFF" />
    }
    return (
      <View style={[CommonStyle.header, CommonStyle.row]}>
        <View style={CommonStyle.col1}></View>
        <View style={[CommonStyle.col1, CommonStyle.viewcenter]}>
          <Text style={CommonStyle.headertext} numberOfLines={1}>{obj.title}</Text>
        </View>
        <View style={CommonStyle.col1}>
          <TouchableOpacity style={CommonStyle.headerright} activeOpacity={0.8} onPress={this._pushroute}>
          {userLogin}
          </TouchableOpacity>
        </View>
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
        // this.props.navigator.push({name:'login',component:Login});
        this.props.navigator.push({name:'user',component:User});
    }

  }

});
