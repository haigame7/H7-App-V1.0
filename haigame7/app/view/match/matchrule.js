'use strict'

var React = require('react-native');
var Headernav = require('../common/headernav');
var {
  View,
  Component,
  Text,
  WebView,
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
      matchdata:{},
      messages: [],
      scalingEnabled: true,
      urlcontent:this.props.matchdata.introduce,
    }
  }
  onChange(text){
    this.setState(
      {
        matchdata:this.props.matchdata,
      }
    );
  }

  render(){
    return (
      <View>
        <Headernav screenTitle='Dota2争霸赛'  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
       <WebView
         source={{html: this.state.urlcontent}}
         scalesPageToFit={true}
         />
        </View>
      </View>
    );
  }
}
