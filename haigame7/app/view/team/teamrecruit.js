'use strict'

var React = require('react-native');
var Headernav = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
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


import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
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
        <Headernav screenTitle='发布招募'  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View style={styles.recruitbox}>
            <TextInput style={styles.recruitinput} multiline={true} placeholder='此处为填写招募队员信息...' placeholderTextColor='#C3C3C3' {...this.props} onChangeText={(text) => this.onChange(text)} value={this.state.value} maxLength={200}/>
            <Text style={styles.recruitnumber}>{this.state.textnumber}/200</Text>
          </View>
          <View style={styles.recruitbtnblock}>
            <TouchableOpacity style = {[commonstyle.btncreamblack, styles.recruitbtn]} activeOpacity={0.8}>
              <Text style = {commonstyle.black}> {'取消'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[commonstyle.btnredwhite, styles.recruitbtn]} activeOpacity={0.8}>
              <Text style = {commonstyle.white}> {'发布'}</Text>
            </TouchableOpacity>
          </View>
        </View>
     </View>
    );
  }
}