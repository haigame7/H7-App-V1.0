'use strict';

var React = require('react-native');

var {
  StyleSheet
  } = React;

var SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FF1493',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent'
  }
});

module.exports = SplashStyle;
