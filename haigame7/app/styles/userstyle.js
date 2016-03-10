'use strict';

import {StyleSheet} from 'react-native';
var Dimensions = require('Dimensions');
export default StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop:20,
    height: 100
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 27
  },
  bgImageWrapper: {
       position: 'absolute',
       top: 0, bottom: 0, left: 0, right: 0
   },
   loginbg: {
       flex: 1,
       height: Dimensions.get('window').height,
       width: Dimensions.get('window').width,
   },
   centerbg: {
       flex:1,
       backgroundColor:'rgb(70, 70, 70)',
       height: Dimensions.get('window').height,
       width: Dimensions.get('window').width,
   },
   centerheadbg: {
       flex:1,
      height: Dimensions.get('window').height*4/11,
       width: Dimensions.get('window').width,
   },
   centerfootbg:{
     height: Dimensions.get('window').height*7/11,
     width: Dimensions.get('window').width,
   },
   centerlitext:{
     color:'rgb(90, 90, 90)',
   },
   centerliicon:{
     margin:10,
     height:40,
     width:40,
   },
   centerlicontent:{
     flexDirection:'row',
   },
  button: {
    backgroundColor: 'rgb(240, 12, 12)',
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  buttonDisabled: {
    backgroundColor: 'rgba(240, 12, 12,0.61)',
    padding: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  certifyButton: {
    backgroundColor: 'rgb(252, 204, 95)',
    padding: 15,
    width:Dimensions.get('window').width/4,
    height:35,
    borderRadius:5,
    marginTop: -40,
    marginRight:5,
    alignSelf: 'flex-end'
  },
  cetifyButtonDisabled: {
    backgroundColor: 'rgba(252, 204, 95,0.61)',
    padding: 15,
    width:Dimensions.get('window').width/4,
    borderRadius:5,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },

  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },
  certifyButtonText:{
    fontSize: 11,
    color: 'black',
    marginTop:-3,
    alignSelf: 'center'

  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    height: 60,
    backgroundColor: '#D6D2D2'
  },
  orText: {
    alignSelf: 'center',
    marginTop: 20
  },
  message: {
    color: 'red',
    marginLeft: 5
  },
  inputContainer: {
    width:Dimensions.get('window').width-40,
    height:80,
    marginTop:20,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },
  inputContainerSecond: {
    width:Dimensions.get('window').width-40,
    height:80,
    marginTop:-10,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },
  inputText: {
    marginLeft:40,
    backgroundColor: 'rgba(45, 50, 45, 0.68)',
    borderColor:'rgb(240, 12, 12)',
    borderWidth:1,
    borderRadius:5,
    height: 45
  },
  linkText:{
   flex:1,
   flexDirection:'row',
   alignItems:'flex-start',
   margin:8
  },
  linkTextLeft:{
  fontSize:13,
  color:'#fff',
  marginTop:-20,
  marginLeft:40,
  },
  linkTextRight:{
   fontSize:13,
   marginTop:-20,
   color:'rgb(46, 97, 209)',
   marginLeft:Dimensions.get('window').width/2-40,
  },
  setpwdText:{
    marginLeft:40,

    width:Dimensions.get('window').width-60,
    color:'rgb(121, 121, 121)',

  },
  submitText:{
   marginBottom:Dimensions.get('window').width/2+40,
   marginLeft:40,
   width:Dimensions.get('window').width-80,

 },
 switchBarContainer:{
   flexDirection:'row',
   justifyContent:'flex-end',
 },
 switchBarText:{
   color:'rgb(154, 156, 157)',
   fontSize:15,
   marginRight:10
 },
 switchBarButton:{
  marginTop:-10,
  marginRight:40
 },

});
