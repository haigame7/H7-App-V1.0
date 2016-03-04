'use strict';

var React = require('react-native');
var Util = require('../view/common/Util');
var {
  StyleSheet
  } = React;

var HeaderStyle = StyleSheet.create({
    go:{
      borderLeftWidth: 4 * Util.pixel,
      borderBottomWidth: 4 * Util.pixel,
      width:15,
      height:15,
      transform: [{rotate: '45deg'}],
      borderColor:'#FFF',
      marginLeft:10
    },
    row:{
     flexDirection:'row'
    },
    header:{
     height:50,
     backgroundColor:'rgb(240, 12, 12)'
    },
    fontFFF:{
     color:'#fff',
     fontSize:17,
     fontWeight:'bold'
    },
    title:{
     flex:1
    },
    titlePos:{
     textAlign:'center',
     marginLeft:-20,
     width:200
    },
    center:{
     justifyContent:'center',
     alignItems:'center'
    }
  });

module.exports = HeaderStyle;
