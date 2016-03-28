'use strict'

var React = require('react-native');
var Headernav = require('../common/headernav'); 
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

var commonstyle = require('../../styles/commonstyle');
var styles = require('../../styles/matchstyle');
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
        <Headernav screenTitle='Dota2争霸赛'  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View><Text style={commonstyle.cream}>比赛规则待定（图文形式）</Text></View>
        </View>
      </View>
    );
  }
}