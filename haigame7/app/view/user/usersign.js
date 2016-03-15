'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('../common/util');
var {
  View,
  Component,
  Text,
  TextArea,
  TextInput,
  Navigator,
  StyleSheet,
  ScrollView
  } = React;

 import styles from '../../styles/userstyle';


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
      <View >
      <View style={styles.bgImageWrapper}>

      </View>
      <Header initObj={{title:'个性签名',message:'finish'}}   navigator={this.props.navigator}></Header>
      <View style={[styles.centerbg,{backgroundColor:'#000'}]}>

       <TextInput
      style={[styles.centertextarea,UserSignStyle.centertextarea]}
      multiline={true}
      placeholder='生命不息，电竞不止...'
      placeholderTextColor='rgb(120,120,120)'
      {...this.props}
      defaultValue='生命不息，电竞不止...'
      onChangeText={(text) => this.onChange(text)}
      value={this.state.value}
      maxLength={200}
      ></TextInput>
      <Text style={[styles.centertextareacount,UserSignStyle.centertextareacount]}>{this.state.textnumber}/200</Text>
      </View>

    </View>
    );
  }
}
var UserSignStyle = StyleSheet.create({
centertextarea:{
  left:20,
  width:Util.size.width-40,
  height:Util.size.height/2-40,
  backgroundColor:'rgb(120,120,120)',
},
centertextareacount:{
  height:30,
  color:'rgb(255,255,255)',
},

});
