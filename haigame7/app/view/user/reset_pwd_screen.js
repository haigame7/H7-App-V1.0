'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator,
  TextInput
} from 'react-native';
// var Header = require('../common/headernav');
import Header from '../common/headernav';
export default class extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <View>
        <Header initObj={{title:'赛事',}}
         navigator={this.props.navigator}></Header>
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
