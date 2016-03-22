'use strict'

var React = require('react-native');
var Headernav = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('../common/util');
var DateTimePicker = require('@remobile/react-native-datetime-picker');
var {
  View,
  Component,
  Text,
  TextArea,
  StyleSheet,
  TextInput,
  Navigator,
  TouchableOpacity,
  ScrollView
  } = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/fightstyle';
export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      content:undefined,
      textnumber:0,
      date:'',
      data:{
        money:undefined,
        date:undefined,
      },
      messages: []
    }
  }
  onChange(text){
    this.setState(
      {
        textnumber:text.length
      }
    );
    console.log(text.length);
  }
  showDatePicker(){
      var date = this.state.date;
      this.picker.showDatePicker(date, (d)=>{
          this.setState({date:d});
      });
  }
  showTimePicker(){
      var date = this.state.date;
      this.picker.showTimePicker(date, (d)=>{
          this.setState({date:d});
      });
  }
  formatDate(strTime){
    if(strTime!=''){
      var date = new Date(strTime);
      return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }else{
      return '';
    }

  }
  render(){
    return (
      <View>
        <Headernav screenTitle='发起约战'  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View  style={styles.fightview}>
            <Text style={[commonstyle.yellow,commonstyle.fontsize12]}>{'您的压注金额需大于10氦金'}</Text>
            <View style={styles.fightviewinput}>
              <TextInput style={commonstyle.cream} placeholder={'请输入压注金额'} placeholderTextColor={'#484848'} keyboardType={'numeric'} onChangeText={(text) => this.state.data.money = text}  />
            </View>
            <View style={styles.fightviewinput}>
              <TextInput style={commonstyle.cream} placeholder={'请选择约战日期'}  placeholderTextColor={'#484848'} editable={false} onChangeText={(text) => this.state.date = text} defaultValue={this.formatDate(this.state.date.toString())}  />
              <TouchableOpacity style={styles.fightviewinputicon} activeOpacity={0.8} onPress={this.showDatePicker.bind(this)}>
                <Icon name="calendar" size={16}  color={'#484848'}/>
              </TouchableOpacity>
            </View>
            <View style={styles.fightviewtextarea}>
              <TextInput style={[commonstyle.cream, {height: 100, borderColor: 'gray', borderWidth: 1,justifyContent: 'flex-start',}]}
                multiline={true}
                placeholder='嘲讽两句'
                placeholderTextColor='rgb(180,180,180)'
                {...this.props}
                onChangeText={(text) => this.onChange(text)}
                value={this.state.value}
                maxLength={200}
                ></TextInput>
              <View style={styles.fightviewtextnum}><Text style={commonstyle.cream}>{this.state.textnumber}/200</Text></View>
            </View>
            <TouchableOpacity style = {styles.fightviewbtn}  >
              <Text style = {commonstyle.white}> {'发送挑战'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{top:Util.size.height/3}}>
            <DateTimePicker  ref={(picker)=>{this.picker=picker}}/>
          </View>
        </View>
      </View>
    );
  }
}
var MakeChanllengeStyle = StyleSheet.create({
  bgImageWrapper:{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
  inputContainer:{
      width: Util.size.width - 40,
      height: 80,
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'transparent'
  },
  inputTitleText:{
   marginBottom:10,
   marginLeft:40,
   color:'rgb(150, 150, 150)',
  },
  iconright:{
    left:Util.size.width-75,
    top:-35,
    width:25,
    color:'rgb(240, 12, 12)',
  },
  inputText: {
      marginLeft: 40,
      backgroundColor: 'rgba(45, 50, 45, 0.6)',
      borderColor: 'rgb(240, 12, 12)',
      borderWidth: 1,
      borderRadius: 5,
      height: 45,
      color:'#fff',
      fontSize:14
  },
 centertextarea:{
   left:40,
   fontSize:14,
   marginTop:10,
   width:Util.size.width-80,
   height:Util.size.height/5,
   color:'rgb(180,180,180)',
   backgroundColor:'rgb(50,50,50)',
 },
 centerbg: {
    flex:1,
    backgroundColor:'rgb(0, 0, 0)',
    height: Util.size.height,
    width: Util.size.width,
},


teamrecruit:{
  backgroundColor:'red',
  left:40,
   height:Util.pixel*100,
    marginTop:10,
   width:Util.size.width-80,
},
teamrecruitfont:{
  color:'#fff',
  fontSize:16,
  top:Util.pixel*30,
  textAlign:'center',
},

 centertextareacount:{
   position:'absolute',
   marginTop:-25,
   right:25,
   color:'rgb(180,180,180)',
   backgroundColor:'rgb(50,50,50)',
  },

 });
