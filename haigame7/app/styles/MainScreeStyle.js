/**
 * 主题控件
 */
'use strict';

var React = require('react-native');

var {
  StyleSheet
  } = React;

var MainScreeStyle = StyleSheet.create({
  container: {
  },
  heads: {
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  },
  bodys:{
    flex: 1,
    margin: 0,
    height,
    alignItems: 'center',
  },
  foots: {
    height: 40,
    backgroundColor: '#FF0009',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    bottom: 0, 
  },
  loginbg:{
    margin: 0,
    width,
    height,
    padding: 10,
    alignItems: 'center',
  },
  btndefault: {
    height:40,
    width: btnwidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 2,
    backgroundColor: '#FF0009',
  },
  btnactive: {
    height:40,
    width: btnwidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 2,
    backgroundColor: '#FFFF00',
  },
  btnfont: {
    fontSize: 20,
    color: '#FFFFFF',
  }
});

module.exports = MainScreeStyle;
