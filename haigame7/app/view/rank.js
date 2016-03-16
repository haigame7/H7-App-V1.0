'use strict';
/**
 * APPs我的排行
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var Util = require('./common/util');
var Icon = require('react-native-vector-icons/FontAwesome');
var RankStyle = require('../styles/rankstyle');
import React, {
    View,
    Text,
    Image,
    StyleSheet,
    Component,
    TouchableOpacity,
    TouchableHighlight,
    } from 'react-native';

    export default class extends Component{
      constructor(props) {
        super(props);
        this.state = {
          navbar: 0,
          data:{
              subnavbar:1,
              subnavbarname:'热度',
          },
          }
        }

  _switchNavbar(nav){
    var name ='热度';
     if(nav==1){
       name = '大神系数';
     }
    this.setState({
      navbar:nav,
      data:{subnavbar:1,subnavbarname:name},
    });
    return;
  }
  _switchSubNavbar(sub){
    var name ='热度';
     if(this.state.navbar==1){
       name = '大神系数';
     }
    this.setState({
      data:{subnavbar:sub,subnavbarname:name},
    });
    return;
  }
  renderrankList(){
    if(this.state.navbar==0){
      return(
        <View>
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
      );
    }
    else{
      return(
        <View></View>
      );
    }
  }
  render() {
      let ranklist = this.renderrankList();
    return (

    <View style={styles.container}>

      <View style={styles.nav}>
        <TouchableOpacity style={styles.nav_item}  onPress = {() => this._switchNavbar(0)} >
        <Text style={this.state.navbar==0?styles.nav_item_text_active:styles.nav_item_text}>荣耀团队</Text>
        <View style={this.state.navbar==0?styles.nav_item_line_active:styles.nav_item_line}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav_item}  onPress = {() => this._switchNavbar(1)}>
        <Text style={this.state.navbar==1?styles.nav_item_text_active:styles.nav_item_text}>名人堂</Text>
        <View style={this.state.navbar==1?styles.nav_item_line_active:styles.nav_item_line}></View>
        </TouchableOpacity>
         <View style={styles.sub_nav}>
         <TouchableOpacity style={styles.sub_nav_item}  onPress = {() => this._switchSubNavbar(1)}>
         <Text style={this.state.navbar==0?styles.sub_nav_item_text:styles.sub_nav_item_text_switch}>{this.state.data.subnavbarname}</Text>
         <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==1?styles.sub_nav_item_icon_active:styles.sub_nav_item_icon}/>
         <View style={styles.sub_nav_item_line}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.sub_nav_item} onPress = {() => this._switchSubNavbar(2)}>
         <Text style={styles.sub_nav_item_text}>战斗力</Text>
         <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==2?styles.sub_nav_item_icon_active:styles.sub_nav_item_icon}/>
         <View style={styles.sub_nav_item_line}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.sub_nav_item} onPress = {() => this._switchSubNavbar(3)}>
         <Text style={styles.sub_nav_item_text}>氦金</Text>
         <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==3?styles.sub_nav_item_icon_active:styles.sub_nav_item_icon}/>

         </TouchableOpacity>
         </View>
        <View style={[styles.infosplit]}></View>
        </View>
        <View style={[styles.centerbg]}>
        {ranklist}
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
   color:'rgb(150,150,150)'
 },
 sub_nav_item_text_switch:{
   fontSize:12,
   left:-20,
    color:'rgb(150,150,150)'
 },
 sub_nav_item_icon:{
   marginLeft:Util.pixel*6,
   color:'rgb(150,150,150)'
 },
 sub_nav_item_icon_active:{
   marginLeft:Util.pixel*6,
   color:'red'
 },
 sub_nav_item_line:{
   position:'absolute',
   width:Util.pixel,
   height:Util.pixel*30,

   left:Util.size.width/5,
   backgroundColor:'rgb(150,150,150)',
 }

 });
