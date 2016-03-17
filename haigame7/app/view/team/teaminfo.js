'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('../common/util');
var {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  ScrollView
  } = React;




export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }


  render(){
    return (
      <View>
      <View style={TeamInfoStyle.bgImageWrapper}>
      <View style={TeamInfoStyle.centerbg}>
      </View>
      </View>
      <Header screenTitle='战队信息'   navigator={this.props.navigator}/>
      <Image source={require('../../images/loginbg.jpg')} style={TeamInfoStyle.centerheadbg} resizeMode={"cover"} >
       <TouchableOpacity style={TeamInfoStyle.centertitle}>
       <Image style={TeamInfoStyle.centerimage} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
       </TouchableOpacity>
       <View style={TeamInfoStyle.centertitle}>
        <Text style={TeamInfoStyle.centername}>我的名字</Text>
        <View style={[TeamInfoStyle.rowtext,{ top:Util.size.height*1/20}]}>
        <Text style={[TeamInfoStyle.contenttext,{left:-10,color:'rgb(230, 193, 39)'}]}>{'战斗力'}</Text>
        <Text style={[TeamInfoStyle.contenttext,{color:'rgb(208, 46, 70)'}]}>{'1234'}</Text>
        <View style={TeamInfoStyle.contentsplit}/>
        <Text style={[TeamInfoStyle.contenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金'}</Text>
        <Text style={[TeamInfoStyle.contenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'1234'}</Text>
        </View>
         <Text style={TeamInfoStyle.centersign} >战队宣言:生命不息电竞不止生命不息电竞不止生命不息电竞不止</Text>

       </View>
     </Image>

        <ScrollView style={TeamInfoStyle.centerfootbg}>
        <View style={[TeamInfoStyle.rowtext,{height:40}]}>
        <Text style={TeamInfoStyle.centerlitext}>性别</Text>
          <Text style={[TeamInfoStyle.centerlitext,{left:Util.size.width/5}]}>男</Text>
              <View style={TeamInfoStyle.centersplit}></View>
        </View>
        <View style={[TeamInfoStyle.rowtext,{height:40}]}>
          <Text style={TeamInfoStyle.centerlitext}>地区</Text>
            <Text style={[TeamInfoStyle.centerlitext,{left:Util.size.width/5}]}>北京-西城区</Text>
              <View style={TeamInfoStyle.centersplit}></View>
        </View>
        <View style={[TeamInfoStyle.rowtext,{height:40}]}>
          <Text style={TeamInfoStyle.centerlitext}>擅长位置</Text>
            <Text style={[TeamInfoStyle.centerlitext,{left:Util.size.width/5-30}]}>辅助</Text>
              <View style={TeamInfoStyle.centersplit}></View>
        </View>
        <View style={[TeamInfoStyle.rowtext,{height:40}]}>
          <Text style={TeamInfoStyle.centerlitext}>注册时间</Text>
            <Text style={[TeamInfoStyle.centerlitext,{left:Util.size.width/5-30}]}>2016/1/23</Text>
              <View style={TeamInfoStyle.centersplit}></View>
        </View>
        <View style={[TeamInfoStyle.rowtext,{height:40}]}>
          <Text style={TeamInfoStyle.centerlitext}>擅长英雄</Text>
          <View style={TeamInfoStyle.teamleadercontainer}>
          <Image style={[TeamInfoStyle.teamheroimage,{borderColor:'rgb(208, 46, 70)'}]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={[TeamInfoStyle.teamheroimagecontainer]}>
          <Image style={[TeamInfoStyle.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Image style={[TeamInfoStyle.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <Image style={[TeamInfoStyle.teamheroimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
           </View>
           </View>
          <View style={[TeamInfoStyle.centersplit,{marginTop:110}]}></View>
        </View>
        <TouchableHighlight style = {TeamInfoStyle.btn} underlayColor = {'#FF0000'}  >
             <Text style = {TeamInfoStyle.btnfont}> {'申请加入'} </Text>
        </TouchableHighlight>
        </ScrollView>
    </View>
    );
  }
}
var TeamInfoStyle = StyleSheet.create({
  bgImageWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },
 centerheadbg: {
     flex:1,
    height: Util.size.height*4/11,
     width: Util.size.width,
 },
 centertitle:{
   justifyContent: 'center',
   alignItems: 'center',
 },
 centerimage:{
  width:100,
  height:100,
  borderRadius: 50,
  top:Util.size.height*1/40-5
 },
 centername:{
   color:'#fff',
   fontSize:18,
   top:Util.size.height*1/25
 },
 centersign:{
   color:'rgb(120,120,120)',
   width:Util.size.width-80,
   marginLeft:40,
   marginRight:40,
   textAlign:'center',
   top:Util.size.height*1/18
 },
 contentsplit:{
     backgroundColor:'rgb(255,255,255)',
    top:Util.pixel*5,
    marginLeft:Util.pixel*10,
     width:Util.pixel,
     height:Util.pixel*20,
     marginBottom:20,

 },
 centerfootbg:{
   height: Util.size.height*7/11,
   width: Util.size.width,
 },
 rowtext:{
   flexDirection:'row',
 },

 centerlitext:{
   left:10,
   color:'#fff',
 },
 centersplit: {
   position:'absolute',
   left:10,
   marginTop:30,
   backgroundColor:'rgb(50,50,50)',
   width:Util.size.width,
   height: Util.pixel,
 },
 teamleadercontainer:{
   flexDirection:'column',
     marginLeft:Util.size.width/5-30,
     borderRadius: 15,
 },
 teamheroimagecontainer:{
      marginTop:Util.pixel*10,
      flexDirection:'row',
      borderRadius: 15,
 },
 teamheroimage:{
   width:50,
   height:50,
   borderWidth:1,
   marginRight:Util.pixel*10,
   borderColor:'rgb(120,120,120)',
  borderRadius: 25,
 },
 btn: {
     height:45,
     width: Util.size.width - 72,
     alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 0,
     borderRadius: 2,
     backgroundColor: '#D31B25',
     marginTop: 80,
     marginLeft: 36,
     marginRight: 36,
 },
 btnfont: {
     fontSize: 18,
     color: '#FFFFFF',
 },
});
