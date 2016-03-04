'use strict';

var React = require('react-native');
var Util = require('../view/common/util');
var {
  StyleSheet
  } = React;

var CommonStyle = StyleSheet.create({
    headerGo:{
      borderLeftWidth: 4 * Util.pixel,
      borderBottomWidth: 4 * Util.pixel,
      width:15,
      height:15,
      transform: [{rotate: '45deg'}],
      borderColor:'#FFF',
      marginLeft:10,
      marginTop:20,
    },
    headerRow:{
     flexDirection:'row'
    },
    header:{
     height:65,
     backgroundColor:'rgb(240, 12, 12)'
    },
    headerFontFFF:{
     color:'#fff',
     fontSize:17,
     marginTop:20,
     marginRight:-20,
     fontWeight:'bold'
    },
    headerImage:{
    width: 20,
    height: 20,
    marginRight:10,
    marginTop:20
   },
    headerTitle:{
     flex:1
    },
    headerTitlePos:{
     textAlign:'center',
     marginLeft:-20,
     width:200
    },
    headerCenter:{
     justifyContent:'center',
     alignItems:'center'
    }
  });

module.exports = CommonStyle;
