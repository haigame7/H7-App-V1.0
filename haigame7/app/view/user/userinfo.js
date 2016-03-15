'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var DateTimePicker = require('@remobile/react-native-datetime-picker');
var Button = require('@remobile/react-native-simple-button');
var Util = require('../common/util');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Navigator,
  ScrollView,
  Picker,
  Modal,
  Dimensions,
  StyleSheet,

  } = React;

 import styles from '../../styles/userstyle';


var UserInfo = React.createClass({
  getInitialState() {
       return {
           date: new Date(),
           modalVisible:false,
           sex:'1',
       }
   },
   showDatePicker() {
       var date = this.state.date;
       this.picker.showDatePicker(date, (d)=>{
           this.setState({date:d});
       });
   },
   changemodalvisible(visible){
   if(visible){
    this.setState({modalVisible: false});
    }else{
    this.setState({modalVisible: true});
     }
    },
   showTimePicker() {
       var date = this.state.date;
       this.picker.showTimePicker(date, (d)=>{
           this.setState({date:d});
       });
   },
   formatDate (strTime) {
     var date = new Date(strTime);
     return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
   },
  render:function(){

    return (
      <View >
      <View style={styles.bgImageWrapper}>
      <View style={[styles.centerbg,{backgroundColor:'#000'}]}>
      </View>
      </View>
      <Header initObj={{title:'我的资料',}}   navigator={this.props.navigator}></Header>

        <ScrollView style={styles.centerfootbg}>
        <TouchableOpacity style={styles.centerlicontent} >

          <Text style={[styles.centerlitext,{marginLeft:10,marginTop:30,color:'rgb(120,120,120)'}]}>头像</Text>
          <TouchableOpacity style={styles.centertitle} onPress={this._pressUserInfo}>
          <Image style={[styles.infoimage,,UserInfoStyle.infoimage]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          </TouchableOpacity>
          <Icon name="angle-right" size={25} style={[styles.infoangelright,UserInfoStyle.infoangelright,{top:10}]} />
          <View style={[styles.infosplit,UserInfoStyle.infosplit,{top:55}]}></View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>昵称</Text>
          <Text style={[styles.infotextright,UserInfoStyle.infotextright]}>昵称123123</Text>
               <Icon name="angle-right" size={25} style={[styles.infoangelright,UserInfoStyle.infoangelright]} />
                <View style={[styles.infosplit,UserInfoStyle.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} onPress={()=>this.changemodalvisible(this.state.modalVisible)} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:30,color:'rgb(120,120,120)'}]}>性别</Text>
          <Text style={[styles.infotextright,UserInfoStyle.infotextright,{marginTop:30}]}>{parseInt(this.state.sex) ? '男' : '女'} </Text>
            <Icon name="angle-right" size={25} style={[styles.infoangelright,UserInfoStyle.infoangelright,{marginTop:25}]} />
              <View style={[styles.infosplit,UserInfoStyle.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>地区</Text>
          <Text style={[styles.infotextright,UserInfoStyle.infotextright]}>昵称123123</Text>
            <Icon name="angle-right" size={25} style={[styles.infoangelright,UserInfoStyle.infoangelright]} />
              <View style={[styles.infosplit,UserInfoStyle.infosplit,{marginTop:55}]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} onPress={this.showDatePicker} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>生日</Text>
          <Text style={[styles.infotextright,UserInfoStyle.infotextright]}>{this.formatDate(this.state.date.toString())}</Text>
          <Icon name="angle-right" size={25} style={[styles.infoangelright,UserInfoStyle.infoangelright]} />

         <View style={[styles.infosplit,UserInfoStyle.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>手机</Text>
         <Text style={[styles.infotextright,UserInfoStyle.infotextright]}>12323232323</Text>
          <View style={{marginLeft:28}}></View>
          <Icon name="angle-right" size={25} style={[styles.infoangelright,UserInfoStyle.infoangelright]} />
            <View style={[styles.infosplit,UserInfoStyle.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>个性签名</Text>
         <Text style={[styles.infotextright,UserInfoStyle.infotextright]}>昵称123123</Text>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />

        </TouchableOpacity>
        <Modal visible={this.state.modalVisible} animated={true} transparent={true} >
  <View style={UserInfoStyle.pickerSex}>
    <Picker
    selectedValue={this.state.sex}
    onValueChange={(lang) => this.setState({sex: lang})}>
    <Picker.Item label="男" value="1" />
    <Picker.Item label="女" value="0" />
    </Picker>
    <Text style={[styles.buttonText,{color:'#000'}]} onPress={()=>this.changemodalvisible(this.state.modalVisible)}>完成</Text>
   </View>
  </Modal>
     <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
        </ScrollView>
    </View>
    );
  },
});
var UserInfoStyle = StyleSheet.create({
   pickerSex:{
     backgroundColor:'#fff',
   },
   infoimage:{
     width:90,
     height:90,
     borderRadius: 45,
     left:Util.size.width/2,
     top:Util.size.height*1/40-5,
   },
   infotextright: {
   marginLeft:Util.size.width/2,
   marginTop:25,
   color:'rgb(120,120,120)'
   },
  infoangelright:{
    position:'absolute',
    left:Util.size.width-30,
    marginTop:20,
    color:'rgb(120,120,120)'
  },
  infosplit:{
    position:'absolute',
    left:0,
    marginTop:50,
    height:Util.pixel,
    width:Util.size.width,
    backgroundColor:'rgb(120,120,120)',
  },
 });

module.exports = UserInfo;
