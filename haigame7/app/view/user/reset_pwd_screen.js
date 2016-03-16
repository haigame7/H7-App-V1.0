'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator,
  TextInput,
  ToastAndroid
} from 'react-native';
// var Header = require('../common/headernav');
import Header from '../common/headernav';
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navigator: this.props.navigator
    }
  }

  _callback() {
    ToastAndroid.show("回调方法",ToastAndroid.SHORT)
    this.state.navigator.pop()
  }

  render() {
    return(
      <View>
        <Header screenTitle='重置密码' isPop={true} iconText='完成' callback={this._callback.bind(this)} navigator={this.props.navigator}/>
         <View>
           <Text>原始密码</Text>
             <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                defaultValue="原始密码"
              />
         </View>
         <View>
           <Text>新密码</Text>
             <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                defaultValue="原始密码"
              />
         </View>
         <View>
           <Text>更新的密码</Text>
             <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                defaultValue="原始密码"
              />
         </View>
      </View>

    );
  }
}
