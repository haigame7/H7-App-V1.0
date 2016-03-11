'use strict';


import { StyleSheet, Platform } from 'react-native';
var Util = require('../view/common/util');


export default StyleSheet.create({
    loginbg: {
        flex: 1,
        height: Util.size.height - 48,
        width: Util.size.width,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        height: 100
    },
    //输入框
    logininput: {
        height: 40,
        width: Util.size.width - 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D31B25',
        borderRadius: 3,
        marginTop: 20,
        marginLeft: 36,
        marginRight: 36,
        backgroundColor: 'rgba(0, 0, 0,0.6)',
    },
    logininputfont: {
        color: '#FFFFFF',
    },
    //链接组
    linkblock: {
        height:20,
        width: Util.size.width - 72,
        marginTop: 10,
        marginLeft: 36,
        marginRight: 36,
    },
    link: {
      height: 20,
      justifyContent: 'center',
    },
    linkleft: {
      textAlign: 'left',
    },
    linkright: {
      textAlign: 'right',
    },
    //按钮
    btn: {
        height:40,
        width: Util.size.width - 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderRadius: 2,
        backgroundColor: '#D31B25',
        marginTop: 20,
        marginLeft: 36,
        marginRight: 36,
    },
    btnfont: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    //原
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 27
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
        width: Util.size.width / 4,
        height: 35,
        borderRadius: 5,
        marginTop: -40,
        marginRight: 5,
        alignSelf: 'flex-end'
    },
    cetifyButtonDisabled: {
        backgroundColor: 'rgba(252, 204, 95,0.61)',
        padding: 15,
        width: Util.size.width / 4,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'stretch'
    },

    buttonText: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    certifyButtonText: {
        fontSize: 11,
        color: 'black',
        marginTop: -3,
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
        width: Util.size.width - 40,
        height: 80,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },
    inputContainerSecond: {
        width: Util.size.width - 40,
        height: 80,
        marginTop: -10,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },
    inputText: {
        marginLeft: 40,
        backgroundColor: 'rgba(45, 50, 45, 0.68)',
        borderColor: 'rgb(240, 12, 12)',
        borderWidth: 1,
        borderRadius: 5,
        height: 45
    },
    linkText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 8
    },
    linkTextLeft: {
        fontSize: 13,
        color: '#fff',
        marginTop: -20,
        marginLeft: 40,
    },
    linkTextRight: {
        fontSize: 13,
        marginTop: -20,
        color: 'rgb(46, 97, 209)',
        marginLeft: Util.size.width / 2 - 40,
    },
    submitText: {
        marginBottom: Util.size.width / 2 + 40,
        marginLeft: 40,
        width: Util.size.width - 80,

    },
    switchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    switchBarText: {
        color: 'rgb(154, 156, 157)',
        fontSize: 15,
        marginRight: 10
    },
    switchBarButton: {
        marginTop: -10,
        marginRight: 40
    },
    centerbg: {
       flex:1,
       backgroundColor:'rgb(70, 70, 70)',
       height: Util.size.height,
       width: Util.size.width,
   },
   centerheadbg: {
       flex:1,
      height: Util.size.height*4/11,
       width: Util.size.width,
   },
   centerfootbg:{
     height: Util.size.height*7/11,
     width: Util.size.width,
   },
   centertitle:{
     justifyContent: 'center',
     alignItems: 'center',
   },
   centertab:{
     flexDirection:'row',
     top:Util.size.height*1/15,
   },
   centertabname:{
     color:'rgb(230, 193, 39)',
     marginLeft:Util.size.width*1/9,
     marginRight:Util.size.width*1/9,
   },
   centertabattr:{
     color:'red',
     fontSize:16,
     marginTop:5,
     marginLeft:Util.size.width*1/9,
     marginRight:Util.size.width*1/9,
   },
   centerimage:{
    width:100,
    height:100,
    borderRadius: 50,
    top:Util.size.height*1/40-5
   },
   centername:{
     color:'#fff',
     fontSize:18,
     top:Util.size.height*1/25
   },
   centersign:{
     color:'rgb(120,120,120)',
     width:Util.size.width-80,
     marginLeft:40,
     marginRight:40,
     textAlign:'center',
     top:Util.size.height*1/20
   },
   centerlitext:{
     marginTop:10,
     color:'#fff',
   },
   centerliicon:{
     margin:5,
     height:30,
     borderRadius:5,
     width:30,
   },
   centerangelright:{
     marginTop:10,
     marginLeft: Util.size.width*7/11,
     color:'rgb(90,90,90)',
   },
   centersplit: {
     position:'absolute',
     left: 40,
     marginTop:40,
     backgroundColor:'rgb(50,50,50)',
     width:Util.size.width*9/11,
     height: Util.pixel,
   },
   centersplitvertical:{
     marginTop:20,
     backgroundColor:'rgb(255,255,255)',
     width:Util.pixel,
     height:Util.size.width*1/20,
     marginBottom:20,

   },
   centersplitblock: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'rgb(70,70,70)',
     height: 20
   },
   centerlicontent:{
     flexDirection:'row',
   },
   infotextright:{
     marginTop:25,
     position:'absolute',
     right: Util.size.width*1/8,
     color:'rgb(90,90,90)',
   },
   infoangelright:{
     marginTop:20,
     position:'absolute',
     left: Util.size.width*10/11,
     color:'rgb(90,90,90)',
   },
   infoimage:{
    width:78,
    height:78,
    borderRadius: 39,
    left: Util.size.width*4/7,
    top:Util.size.height*1/40-10
   },
   infosplit: {
     position:'absolute',
     left: 10,
     marginTop:58,
     backgroundColor:'rgb(50,50,50)',
     width:Util.size.width*10/11,
     height: Util.pixel,
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
    width:Util.size.width/4,
    height:35,
    borderRadius:5,
    marginTop: -40,
    marginRight:5,
    alignSelf: 'flex-end'
  },
  cetifyButtonDisabled: {
    backgroundColor: 'rgba(252, 204, 95,0.61)',
    padding: 15,
    width:Util.size.width/4,
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
    width:Util.size.width-40,
    height:80,
    marginTop:20,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent'
  },
  inputContainerSecond: {
    width:Util.size.width-40,
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
   marginLeft:Util.size.width/2-40,
  },
   setpwdText:{
    marginLeft:40,
    width:Util.size.width-60,
    color:'rgb(121, 121, 121)',
  },
});
