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
   bgImage: {
       flex: 1,
       resizeMode: "stretch"
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
  buttonText: {
    fontSize: 15,
    color: 'white',
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
    width:Dimensions.get('window').width-20,
    height:80,
    marginTop:20,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },
  inputText: {
    marginLeft:20,
    backgroundColor: 'rgba(45, 50, 45, 0.68)',
    borderColor:'rgb(240, 12, 12)',
    borderWidth:1,
    borderRadius:5,
    height: 50
  },
  linkText:{
   flex:1,
   flexDirection:'row',
   alignItems:'flex-start',
   margin:8
  },
  linkTextLeft:{
  fontSize:15,
  color:'#fff',
  marginLeft:10,
  },
  linkTextRight:{
   fontSize:15,
   color:'rgb(53, 159, 187)',
   marginLeft:Dimensions.get('window').width/2-10,
  },
  submitText:{
   marginBottom:Dimensions.get('window').width/2,
   marginLeft:20,
   width:Dimensions.get('window').width-40,

  }
});
