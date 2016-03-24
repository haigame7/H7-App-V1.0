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
  TouchableOpacity,
  Navigator,
  ToastAndroid
  } = React;

/**
 * 顶部导航组件
 * @param  iconName: icon 插件的 name属性
 * @param  iconText: icon 插件的 text属性
 * @param  screenTitle: 当前页面导航 title属性
 * @param  icon_size: icon 插件的 size属性 暂不可更改
 * @param  icon_color: icon 插件的 color属性 暂不可更改
 * @param  navigator: 导航组件 navigator
 * @param  nextComponent: 当前页面 navigator.push 下一个页面的组件参数  component
 * @param  isPop: 当前页面 navigator.pop true|false
 */
module.exports = React.createClass({
  getInitialState() {
    return {
      icon_name: this.props.iconName,
      icon_size: 30,
     icon_color: '#fff',
      icon_text: this.props.iconText,
  current_title: this.props.screenTitle,
      navigator: undefined,
   icon_onPress: null,
 next_component: null,
          isPop: this.props.isPop == undefined ? true : this.props.isPop,
    }
  },
  componentWillMount() {
  },
  componentDidMount(){
    if (this.state.icon_name != undefined){
      this.setState({
        navigator: this.props.navigator,
   next_component: this.props.nextComponent,
     icon_onPress: this._pushroute,
      });
    }
    if (this.props.callback != undefined) {
      this.setState({
        icon_onPress: this.props.callback
      });
    }
  },
  componentWillReceiveProps(nextProps,nexState) {
    console.log('导航更新');
  },
  componentWillMount() {
    // let userInstance = new User();
  }
  ,
  componentWillUnmount() {
  },

  updateComponent(newComponent){
    this.setState({
      next_component: newComponent
    });
  },
  render: function(){
   var icon;
   if(this.state.icon_name == undefined && this.state.icon_text == undefined){
     icon = <View></View>;
   }else if( this.state.icon_text != undefined){
     icon = <Text style={CommonStyle.headertextright}>{this.props.iconText}</Text>;
   }
   else{
     icon = <Icon name={this.state.icon_name} size={this.state.icon_size} color={this.state.icon_color} />;
   }
   if(this.state.isPop){
     return (
       <View style={[CommonStyle.header, CommonStyle.row]}>
         <View style={CommonStyle.col1}>
           <TouchableOpacity style={CommonStyle.headerleft} onPress={this._pop}>
             <Icon name="angle-left" size={30} color="#FFF" />
           </TouchableOpacity>
         </View>
         <View style={[CommonStyle.col1, CommonStyle.viewcenter]}>
           <Text style={CommonStyle.headertext} numberOfLines={1}>{this.state.current_title}</Text>
         </View>
         <View style={CommonStyle.col1}>
         <TouchableOpacity style={CommonStyle.headerright} activeOpacity={0.8} onPress={this.state.icon_onPress}>
           {icon}
         </TouchableOpacity>
         </View>
       </View>
     );
   } else {
     return (
       <View style={[CommonStyle.header, CommonStyle.row]}>
         <View style={CommonStyle.col1}>
         </View>
         <View style={[CommonStyle.col1, CommonStyle.viewcenter]}>
           <Text style={CommonStyle.headertext} numberOfLines={1}>{this.state.current_title}</Text>
         </View>
         <View style={CommonStyle.col1}>
         <TouchableOpacity style={CommonStyle.headerright} activeOpacity={0.8} onPress={this._pushroute}>
           {icon}
         </TouchableOpacity>
         </View>
       </View>
     );
   }

  },

  _pop: function(){
    this.props.navigator.pop();
  },
  _pushroute:function(){
    if (this.state.navigator != undefined){
      this.state.navigator.push({
        name: this.state.next_component.name,
        component: this.state.next_component.component,
        params: {...this.props}
      })
    } else {
      console.log('导航数据错误');
    }
  },
});
