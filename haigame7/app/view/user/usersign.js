'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var {
  View,
  Component,
  Text,
  TextArea,
  StyleSheet,
  TextInput,
  Navigator,
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
        <Header screenTitle='个性签名' iconText='完成' navigator={this.props.navigator}/>
        <View style={styles.loginbg}>
          <View style={styles.textareabox}>
            <TextInput
            style={styles.textareainput}
            multiline={true}
            placeholder='生命不息，电竞不止...'
            placeholderTextColor='#C3C3C3'
            {...this.props}
            onChangeText={(text) => this.onChange(text)}
            value={this.state.value}
            maxLength={200}></TextInput>
            <Text style={styles.textareanumber}>{this.state.textnumber}/200</Text>
          </View>
        </View>
      </View>
    );
  }
}
