'use strict';
/**
 * APPs我的约战
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('./common/util');
var Progress = require('react-native-progress');
var {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  ScrollView
  } = React;




export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navbar: 0,
      subnavbar:1,
      invite:0,
      data:{
        odd:50,
      },
    }
  }


  render(){
    return (
      <View style={styles.container}>

        <View style={styles.nav}>
           <View style={styles.sub_nav}>
           <TouchableOpacity style={styles.sub_nav_item} >
           <Text style={styles.sub_nav_item_text}>{'我的约战'}</Text>
          <Text style={[styles.sub_nav_item_text,{color:'rgb(208, 46, 70)',fontSize:14,top:-3}]}>{'(10)'}</Text>
           <View style={styles.sub_nav_item_line}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.sub_nav_item}>
           <Text style={styles.sub_nav_item_text}>{'约战动态'}</Text>
          <Text style={[styles.sub_nav_item_text,{color:'rgb(208, 46, 70)',fontSize:14,top:-3}]}>{'(10)'}</Text>
           </TouchableOpacity>
           </View>
          <View style={[styles.infosplit]}></View>
          </View>
          <View style={[styles.centerbg]}>
          <View style={[styles.teamrecruit]}>
            <TouchableOpacity>
          <Image style={[styles.teamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        </TouchableOpacity>
          <View style={[styles.teamcontent]}>
           <View style={[styles.teamrowtext,{marginTop:Util.pixel*20}]}>
           <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
           </View>
           <View style={[styles.teamrowtext]}>
           <Text style={[styles.teamcontenttext,{fontSize:14,fontWeight:'bold',color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
           <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
           <Text style={[styles.teamcontenttext,{fontSize:14,fontWeight:'bold',color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
           <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
           </View>
           {/*胜率*/}
           <View style={[styles.teamrowtext]}>
           <Text style={[styles.teamcontenttext,{fontSize:14,color:'#fff',}]}>{'胜率: '}{this.state.data.odd}{'%'}</Text>
           <Progress.Bar progress={0.5} width={120} color={'rgb(230, 193, 39)'} unfilledColor={'rgb(50,50,50)'} style={{top:Util.pixel*15,}} />
           </View>
           {/*胜负*/}
            <View style={[styles.teamrowtext]}>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'战'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'胜'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'负'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'拒'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            </View>
           </View>
            <TouchableOpacity style={styles.teamangleright}>
            <Text style={{fontSize:12,color:'rgb(55, 110, 161)'}}>{'约战规则'}</Text>
            <Icon name='angle-right' size={13} style={{color:'rgb(55, 110, 161)',marginLeft:Util.pixel*7,marginBottom:Util.pixel*10}} />
            </TouchableOpacity>

          </View>
           <View style={[styles.teamsplit]}></View>
          </View>
     </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },
  teamlist:{
    height:Util.size.height*13/84,
    flexDirection:'row',
  },
  teamrowtext:{
    flexDirection:'row',
  },
  teamrecruit:{
    height:Util.size.height*11/40,
    flexDirection:'row',
  },
  teamimage:{
    width:80,
    height:80,
    margin:10,
    borderRadius: 40,
  },
  teamrecruitimage:{
    width:50,
    height:50,
    margin:10,
    marginTop:25,
    borderRadius: 25,
  },
  teamangleright:{
    flexDirection:'row',
    top:Util.pixel*30,
    left:Util.pixel*10,
  },
  teamcontenttext:{
    color:'rgb(150,150,150)',
    fontSize:12,
    top:Util.pixel*10,
    marginBottom:Util.pixel*8,
  },
  teamheroimagecontainer:{
       margin:10,
       top:Util.pixel*10,
       flexDirection:'row',
       borderRadius: 5,
  },
  infosplit:{
    position:'absolute',
    left:0,
    marginTop:Util.pixel*65-1,
    height:Util.pixel,
    width:Util.size.width,
    backgroundColor:'rgb(50,50,50)',
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },

  nav:{
  height:Util.pixel*65,
   flexDirection:'row',
   backgroundColor:'rgb(0, 0, 0)'
  },
  sub_nav:{
    position:'absolute',
    flexDirection:'row',
    left:0,
    width:Util.size.width,
    height:Util.size.height/18,
  },
  nav_item:{

  left:Util.size.width/5,
  top:Util.pixel*25,
  marginRight:Util.size.width*3/10,
  },
  sub_nav_item:{
      flexDirection:'row',
    left:Util.size.width/6,
    top:Util.pixel*20,
    marginRight:Util.size.width*1/5,
  },
  nav_item_line:{
    position:'absolute',
    left:-Util.size.width/6,
    marginTop:Util.pixel*30,
    height:Util.pixel*4,
    width:Util.size.width*7/15,
    backgroundColor:'rgb(120,120,120)',
  },
  nav_item_line_active:{
    position:'absolute',
    left:-Util.size.width/6,
    marginTop:Util.pixel*30,
    height:Util.pixel*4,
    width:Util.size.width*7/15,
    backgroundColor:'red',
  },
  nav_item_text:{
   fontSize:15,
   color:'rgb(150,150,150)'
 },
 nav_item_text_active:{
  fontSize:15,
  color:'red'
},
  sub_nav_item_text:{
   fontSize:12,
  marginRight:Util.pixel*20,
   color:'rgb(150,150,150)'
 },

 sub_nav_item_line:{
   position:'absolute',
   width:Util.pixel,
   height:Util.pixel*30,

   left:Util.size.width/3,
   backgroundColor:'rgb(150,150,150)',
 }
});
