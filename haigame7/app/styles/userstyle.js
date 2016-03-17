'use strict';

import { StyleSheet, Platform } from 'react-native';
var Util = require('../view/common/util');
export default StyleSheet.create({
    //登陆界面
    loginbg: {
        flex: 1,
        height: Util.size.height - 48,
        width: Util.size.width,
        backgroundColor: '#000000',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        height: 100
    },
    //个人中心
    headbg: {
        flex: 1,
        height: 260,
        width: Util.size.width,
    },
    headportrait: {
        width: 100,
        height: 100,
        borderWidth: 4,
        borderRadius: 50,
        borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    headportraitv: {
        position: 'absolute',
        flexDirection: 'row',
        left: Util.size.width/2 + 20,
        bottom: 0,
        width: 50,
    },
    headportraitvfont: {
        color: '#FFFFFF',
        fontSize: 10,
    },
    headname: {
        fontSize: 18,
    },
    headtext: {
        marginTop: 5,
        paddingLeft: 60,
        paddingRight: 60,
    },
    headtextfont: {
        textAlign: 'center',
    },
    headtab: {
        marginTop: 20,
    },
    headtabli: {
        alignItems: 'center',
        width: Util.size.width/3-1,
        height: 40,
    },
    headtabtitle: {
        alignItems: 'center',
        height: 20,
    },
    headtabnumber: {
        alignItems: 'center',
        height: 20,
    },
    headtabline: {
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#FFFFFF',
        width:Util.pixel,
        height: 20,

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
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    btncode: {
        position: 'absolute',
        top: 2,
        right: 4,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height:32,
        borderWidth: 0,
        borderRadius: 2,
        backgroundColor: '#FFCA00',
    },
    btncodefont: {
        fontSize: 14,
        color: '#282828',
    },
    btndisable: {
        backgroundColor: '#484848',
    },
    //区域块
    loginblock: {
        width: Util.size.width - 72,
        marginTop: 20,
        marginLeft: 36,
        marginRight: 36,
    },
    blocktop: {
        marginTop: 10,
        alignItems: 'center',
    },
    blockbottom: {
        marginBottom: 10,
        alignItems: 'center',
    },
    //文本框
    textareabox: {
        margin: 10,
        width: Util.size.width - 20,
        height: 80,
        backgroundColor: '#484848',
        justifyContent: 'flex-start',
    },
    textareainput: {
        height: 50,
        color: '#C3C3C3',
        alignItems: 'flex-start',
    },
    textareanumber: {
        position: 'absolute',
        right: 5,
        bottom: 0,
        color: '#C3C3C3',
    },
    //列表块
    listview: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#484848',
        backgroundColor: '#000000',
    },
    listviewiconleft: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginRight: 10,
    },
    listviewiconright: {
        width:15,
        height: 30,
        marginLeft: 10,
    },
    listviewtextbox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    listviewtext: {
        flex: 1,
        color: '#FFFFFF',
        marginTop: 5,
    },
    listviewtextleft: {
        color: '#C3C3C3',
        marginTop: 5,
        justifyContent: 'center',
    },
    listviewtextright: {
        color: '#484848',
        justifyContent: 'center',
    },
    listviewtextimg: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    listbox: {
        height: 20,
        backgroundColor: '#484848',
        marginTop: -1,
    },
    //模态框
    pickerview: {
        backgroundColor:'#FFFFFF',
    },
    //滑块
    switchblock: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 36,
        marginRight: 36,
        width: Util.size.width - 72,
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    switchtext: {
        flex: 1,
        color: '#C3C3C3',
        textAlign: 'right',
        marginRight: 10
    },
    switchbar: {
        width: 50,
        height: 20,
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
        backgroundColor: 'rgba(240, 12, 12,0.6)',
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
        backgroundColor: 'rgba(252, 204, 95,0.6)',
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
        backgroundColor: 'rgba(45, 50, 45, 0.6)',
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
       backgroundColor:'rgb(0, 0, 0)',
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
  setpwdText:{
    marginLeft:40,
    width:Util.size.width-60,
    color:'rgb(121, 121, 121)',
  },
});