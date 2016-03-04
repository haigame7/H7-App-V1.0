'use strict';

/**
 * 我的样式
 * @param  {[type]} 'react-native' [description]
 * @return {[type]}                [description]
 * @author aran.hu
 */
var React = require('react-native');

var {
  StyleSheet
  } = React;
var Dimensions = require('Dimensions');
var {
    width,
    height
} = Dimensions.get('window')
var UserStyle = StyleSheet.create({
  loginbg:{
    margin: 0,
    width,
    height,
    padding: 10,
    alignItems: 'center',
  },
  codes: {
    top: 2,
    right: 4,
    height: 32,
    borderRadius: 2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    backgroundColor: '#FFCA00',
  },
});

module.exports = UserStyle;
