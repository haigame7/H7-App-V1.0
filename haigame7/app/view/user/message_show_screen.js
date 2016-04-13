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

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import Header from '../common/headernav';
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Title: this.props.messagedata.Title,
      Content: this.props.messagedata.Content,
    }
  }
  render() {
    return(
      <View>
        <Header screenTitle={this.state.Title} isPop={true} navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <Text style={commonstyle.cream}>{this.state.Content}</Text>
        </View>
      </View>
    );
  }
}
