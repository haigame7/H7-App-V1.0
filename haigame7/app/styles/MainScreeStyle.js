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
    flex: 1,
  },
  heads: {
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
  },
  bodys:{
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
  row: {
    height:20,
    width: width - 72,
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  col1: {
    flex: 1,
    height: 20,
  },
  col2: {
    flex: 2,
    height: 20,
  },
  col3: {
    flex: 3,
    height: 20,
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  white: {
    color: 'white',
  },
  blue: {
    color: 'blue',
  },
  btn: {
    height:40,
    width: width - 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 2,
    backgroundColor: '#D31B25',
    marginTop: 20,
  },
  btnactive: {
    height:40,
    width: width - 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 2,
    backgroundColor: '#FFFF00',
  },
  btnfont: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  input: {
    height:40,
    width: width - 72,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D31B25',
    borderRadius: 3,
    marginTop: 20,
  },
  inputfont: {
    color: '#000000',
    opacity: 1,
  },
});

module.exports = MainScreeStyle;
