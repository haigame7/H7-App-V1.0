'use strict'

var React = require('react-native');
var Headernav = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('../common/util');
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


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      content:undefined,
      textnumber:0,
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

  render(){

    return (
      <View>
      <View style={TeamRecruitStyle.bgImageWrapper}>

      </View>
      <Headernav screenTitle='发布招募'  navigator={this.props.navigator}/>
      <View style={[TeamRecruitStyle.centerbg,{backgroundColor:'#000'}]}>

       <TextInput
    style={[TeamRecruitStyle.centertextarea]}
      multiline={true}
      placeholder='此处为填写招募队员信息的输入框'
      placeholderTextColor='rgb(180,180,180)'
      {...this.props}
      onChangeText={(text) => this.onChange(text)}
      value={this.state.value}
      maxLength={200}
      ></TextInput>
   <Text style={[TeamRecruitStyle.centertextareacount]}>{this.state.textnumber}/200</Text>
   <View style={{flexDirection:'row'}}>
   <TouchableOpacity style = {TeamRecruitStyle.teamrecruitcancel}  >
        <Text style = {TeamRecruitStyle.teamrecruitcancelfont}> {'取消'}</Text>
   </TouchableOpacity>
   <TouchableOpacity style = {TeamRecruitStyle.teamrecruit}  >
        <Text style = {TeamRecruitStyle.teamrecruitfont}> {'发布'}</Text>
   </TouchableOpacity>
   </View>
     </View>
    </View>
    );
  }
}
var TeamRecruitStyle = StyleSheet.create({
  bgImageWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
 centertextarea:{
   left:20,
   fontSize:14,
   top:10,
   width:Util.size.width-40,
   height:Util.size.height/2-60,
   color:'rgb(180,180,180)',
   backgroundColor:'rgb(50,50,50)',
 },
 centerbg: {
    flex:1,
    backgroundColor:'rgb(0, 0, 0)',
    height: Util.size.height,
    width: Util.size.width,
},
teamrecruitcancel:{
  backgroundColor:'rgb(180,180,180)',
   left:20,
   marginTop:10,
   height:Util.pixel*100,
   width:Util.size.width/2-20,
},
teamrecruitcancelfont:{
  color:'#000',
  fontSize:16,
  top:Util.pixel*30,
  textAlign:'center',
},
teamrecruit:{
  backgroundColor:'red',
  left:20,
   height:Util.pixel*100,
    marginTop:10,
   width:Util.size.width/2-20,
},
teamrecruitfont:{
  color:'#fff',
  fontSize:16,
  top:Util.pixel*30,
  textAlign:'center',
},

 centertextareacount:{
   position:'absolute',
   marginTop:-15,
   right:25,
   color:'rgb(180,180,180)',
   backgroundColor:'rgb(50,50,50)',
  },

 });
