'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator
} from 'react-native';

import Header from '../common/headernav';
export default class extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <View>
        <Header initObj={{title:'信息{1}',}} navigator={this.props.navigator}></Header>
        <Text>这里是MSG 详情</Text>

      </View>
    );
  }
}
