'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var DateTimePicker = require('@remobile/react-native-datetime-picker');
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

import commonstyle from '../../styles/commonstyle';
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
      <Header screenTitle='我的资料'  navigator={this.props.navigator}/>
      <ScrollView style={commonstyle.bodyer}>
        <View style={[styles.listview, {height: 100,}]}>
          <Text style={[styles.listviewtextleft, {marginTop: 35,}]}>头像</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._pressUserInfo}>
            <Image style={styles.listviewtextimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={[styles.listviewiconright, {marginTop: 30,}]} />
        </View>

        <View style={styles.listview} >
          <Text  style={styles.listviewtextleft}>昵称</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8}>
            <Text style={styles.listviewtextright}>昵称123123</Text>
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </View>

        <View style={styles.listview} >
          <Text  style={styles.listviewtextleft}>性别</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={()=>this.changemodalvisible(this.state.modalVisible)} >
            <Text style={styles.listviewtextright}>{parseInt(this.state.sex) ? '男' : '女'} </Text>
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </View>

        <View style={styles.listview} >
          <Text  style={styles.listviewtextleft}>地区</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} >
            <Text style={styles.listviewtextright}>朝阳 - 北京</Text>
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </View>

        <View style={styles.listview} >
          <Text  style={styles.listviewtextleft}>生日</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this.showDatePicker} >
            <Text style={styles.listviewtextright}>{this.formatDate(this.state.date.toString())}</Text>
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </View>

        <View style={styles.listview} >
          <Text  style={styles.listviewtextleft}>手机</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8}>
          <Text style={styles.listviewtextright}>12323232323</Text>
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </View>

        <View style={styles.listview} >
          <Text  style={styles.listviewtextleft}>个性签名</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} >
            <Text style={styles.listviewtextright}>生命不息，电竞不止。</Text>
          </TouchableOpacity>
          <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
        </View>

        
        <Modal visible={this.state.modalVisible} animated={true} transparent={true} >
          <View style={styles.pickerview}>
            <Picker selectedValue={this.state.sex} onValueChange={(lang) => this.setState({sex: lang})}>
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

module.exports = UserInfo;
