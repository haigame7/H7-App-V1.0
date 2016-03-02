'use strict';

import React, {
  Text,
  View,
  Navigator,
  BackAndroid,
  Component,
  StyleSheet
} from 'react-native';

import MainScreeStyle from '../styles/MainScreeStyle'

export default class MainScree extends Component {

  render() {
    return(
      <View style={MainScreeStyle.container}>
        <Text style={MainScreeStyle.welcome}>
          Main Screen.
        </Text>
        <Image style={_styles.image} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
      </View>
    );
  }
}

const _styles = StyleSheet.Ceate({
    image: {
      width: 15,
      height: 15
    }
});
