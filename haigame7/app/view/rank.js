'use strict';
/**
 * APPs我的排行
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Util = require('./common/util');
var Icon = require('react-native-vector-icons/FontAwesome');
var {
  View,
  Text,
  Image,
  StyleSheet,
  } = React;

var RankStyle = require('../styles/rankstyle');

var Rank = React.createClass({
  render: function () {
    return (
    <View style={styles.container}>

      <View style={styles.nav}>
        <View style={styles.nav_item}>
        <Text style={styles.nav_item_text}>荣耀团队</Text>
        <View style={styles.nav_item_line}></View>
        </View>
        <View style={styles.nav_item}>
        <Text style={styles.nav_item_text}>名人堂</Text>
        <View style={styles.nav_item_line}></View>
        </View>
         <View style={styles.sub_nav}>
         <View style={styles.sub_nav_item}>
         <Text style={styles.sub_nav_item_text}>热度</Text>
         <Icon name="angle-down" size={10} style={styles.sub_nav_item_icon}/>
         <View style={styles.sub_nav_item_line}/>
         </View>
         <View style={styles.sub_nav_item}>
         <Text style={styles.sub_nav_item_text}>战斗力</Text>
         <Icon name="angle-down" size={10} style={styles.sub_nav_item_icon}/>
         <View style={styles.sub_nav_item_line}/>
         </View>
         <View style={styles.sub_nav_item}>
         <Text style={styles.sub_nav_item_text}>氦金</Text>
         <Icon name="angle-down" size={10} style={styles.sub_nav_item_icon}/>

         </View>
         </View>
        <View style={[styles.infosplit]}></View>
        </View>
        <View style={[styles.centerbg]}>
         <View style={[styles.ranklist]}>
         <Image style={[styles.rankimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={[styles.rankcontent]}>
          <Text style={[styles.rankcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
          <Text style={[styles.rankcontenttext,]}>{'生命不息,电竞不止~~1231231231'}</Text>
           <View style={[styles.rankrowtext]}>
           <Text style={[styles.rankcontenttext,{color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
           <Text style={[styles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
           <Text style={[styles.rankcontenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
           <Text style={[styles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
           </View>
          </View>
         </View>
          <View style={[styles.ranksplit]}></View>
          <View style={[styles.ranklist]}>
          <Image style={[styles.rankimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
           <View style={[styles.rankcontent]}>
           <Text style={[styles.rankcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
           <Text style={[styles.rankcontenttext,]}>{'生命不息,电竞不止~~1231231231'}</Text>
            <View style={[styles.rankrowtext]}>
            <Text style={[styles.rankcontenttext,{color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
            <Text style={[styles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
            <Text style={[styles.rankcontenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
            <Text style={[styles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
            </View>
           </View>
          </View>
          <View style={[styles.ranksplit]}></View>
          <View style={[styles.ranklist]}>
          <Image style={[styles.rankimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
           <View style={[styles.rankcontent]}>
           <Text style={[styles.rankcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
           <Text style={[styles.rankcontenttext,]}>{'生命不息,电竞不止~~1231231231'}</Text>
            <View style={[styles.rankrowtext]}>
            <Text style={[styles.rankcontenttext,{color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
            <Text style={[styles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
            <Text style={[styles.rankcontenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
            <Text style={[styles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
            </View>
           </View>
          </View>
           <View style={[styles.ranksplit]}></View>
        </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },
  infosplit:{
    position:'absolute',
    left:0,
    marginTop:Util.size.height/9-1,
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
 ranklist:{
   height:Util.size.height*13/84,
   flexDirection:'row',
 },
 rankimage:{
   width:80,
   height:80,
   margin:10,
   borderRadius: 40,
 },
 rankcontent:{
   flexDirection:'column',
 },
 rankcontenttext:{
   color:'rgb(150,150,150)',
   top:Util.pixel*40,
   marginBottom:Util.pixel*15,
 },
 rankrowtext:{
   flexDirection:'row',
 },
 ranksplit:{
   position:'absolute',
   left:0,
   height:Util.pixel,
   width:Util.size.width,
   backgroundColor:'rgb(50,50,50)',
 },
  nav:{
  height:Util.size.height/9,
   flexDirection:'row',
   backgroundColor:'rgb(0, 0, 0)'
  },
  sub_nav:{
    position:'absolute',
    flexDirection:'row',
    left:0,
    marginTop:Util.size.height/18,
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
    top:Util.pixel*30,
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
  nav_item_text:{
   fontSize:15,
   color:'rgb(150,150,150)'
 },
  sub_nav_item_text:{
   fontSize:12,
   color:'rgb(150,150,150)'
 },
 sub_nav_item_icon:{
   marginLeft:Util.pixel*6,
   color:'rgb(150,150,150)'
 },
 sub_nav_item_line:{
   width:Util.pixel,
   height:Util.pixel*30,
   left:Util.size.width/10,
   backgroundColor:'rgb(150,150,150)',
 }

 });
module.exports = Rank;
