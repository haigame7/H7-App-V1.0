'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var {
  View,
  Component,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  Switch,
  ScrollView
  } = React;

 import styles from '../../styles/userstyle';


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      alertvoice:false,
      messages: []
    }
  }

  openalert(alertvoice){
  if(alertvoice){
      this.setState({alertvoice: false});
   }else{
      this.setState({alertvoice: true});
   }
  return this.state.notshow;
}

  render(){

    return (
      <View >
      <View style={styles.bgImageWrapper}>
      <View style={[styles.centerbg,{backgroundColor:'#000'}]}>
      </View>
      </View>
      <Header initObj={{title:'我的资料',}}   navigator={this.props.navigator}></Header>

        <ScrollView style={styles.centerfootbg}>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:15,color:'rgb(120,120,120)'}]}>系统消息提示音</Text>
            <Icon name="angle-right" size={25} s />
            <Switch
                onValueChange={(value) =>this.openalert(this.state.alertvoice)}
                style={[styles.switchSetting]}
                value= {this.state.alertvoice}
                />
              <View style={[styles.infosplit,{marginTop:45}]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:20,color:'rgb(120,120,120)'}]}>清空缓存</Text>

          <Icon name="angle-right" size={25} style={[styles.infoangelright,{marginTop:15}]} />
            <View style={[styles.infosplit,{marginTop:45}]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>更改密码</Text>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />
            <View style={[styles.infosplit,{marginTop:60}]}></View>
        </TouchableOpacity>
          <View style={[styles.centersplitblock,{marginTop:10}]}></View>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,color:'rgb(120,120,120)'}]}>关于H7</Text>
          <Icon name="angle-right" size={25} style={[styles.infoangelright,{marginTop:5}]} />
            <View style={[styles.infosplit,{marginTop:40}]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>共享H7给朋友们</Text>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />
            <View style={[styles.infosplit]}></View>
        </TouchableOpacity>

        <TouchableHighlight style = {[styles.btn,{marginTop:40}] } underlayColor = {'#FF0000'}  >
             <Text style = {styles.btnfont}> { '退出登录'}</Text>
        </TouchableHighlight>


        </ScrollView>
    </View>
    );
  }
}
