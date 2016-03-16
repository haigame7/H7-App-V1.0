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
        <Header screenTitle='信息标题' isPop={true} navigator={this.props.navigator}/>
        <Text>这里是MSG 详情</Text>

      </View>
    );
  }
}
