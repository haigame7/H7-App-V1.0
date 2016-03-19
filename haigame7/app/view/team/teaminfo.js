'use strict';
/**
 * APP 战队信息
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('../common/util');
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

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }


  render(){
    return (
      <View>
        <Header screenTitle='战队信息' navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <View style={styles.headportraitv}><Icon name="book" size={15} color={'#484848'} /><Text style={styles.headportraitvfont}>未认证</Text></View>
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>我的名字</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  1234  '}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  1234  '}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>战队宣言:生命不息电竞不止生命不息电竞不止生命不息电竞不止</Text>
              </View>
            </View>
          </Image>

          <View style={styles.listblock}>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队战绩</Text></View>
              <View style={styles.listviewright}>
                <Text style={commonstyle.cream}>参赛场次  </Text>
                <Text style={commonstyle.yellow}>20场</Text>
                <Text style={commonstyle.cream}>  胜率  </Text>
                <Text style={commonstyle.red}>79%</Text>
              </View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>成立日期</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>2016/02/15</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>招募信息</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>本队需要辅助一名，擅长XX英雄，战队福利优厚，报名从速...</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>战队成员</Text></View>
              <View style={styles.listviewright}>
                <View style={styles.listviewteam}>
                  <Image style={styles.listviewteamleader} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                  <View style={styles.listviewteamblock}>
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                    <Image style={styles.listviewteamimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          
          <TouchableHighlight style = {styles.btn} underlayColor = {'#FF0000'} >
            <Text style = {styles.btnfont}> {'申请加入' } </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
var TeamInfoStyle = StyleSheet.create({
  bgImageWrapper: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
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
 centertitle:{
   justifyContent: 'center',
   alignItems: 'center',
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
   top:Util.size.height*1/18
 },
 contentsplit:{
     backgroundColor:'rgb(255,255,255)',
    top:Util.pixel*5,
    marginLeft:Util.pixel*10,
     width:Util.pixel,
     height:Util.pixel*20,
     marginBottom:20,

 },
 centerfootbg:{
   height: Util.size.height*7/11,
   width: Util.size.width,
 },
 rowtext:{
   flexDirection:'row',
 },

 centerlitext:{
   left:10,
   color:'#fff',
 },
 centersplit: {
   position:'absolute',
   left:10,
   marginTop:30,
   backgroundColor:'rgb(50,50,50)',
   width:Util.size.width,
   height: Util.pixel,
 },
 teamleadercontainer:{
   flexDirection:'column',
     marginLeft:Util.size.width/5-30,
     borderRadius: 15,
 },
 teamheroimagecontainer:{
      marginTop:Util.pixel*10,
      flexDirection:'row',
      borderRadius: 15,
 },
 teamheroimage:{
   width:50,
   height:50,
   borderWidth:1,
   marginRight:Util.pixel*10,
   borderColor:'rgb(120,120,120)',
  borderRadius: 25,
 },
 btn: {
     height:45,
     width: Util.size.width - 72,
     alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 0,
     borderRadius: 2,
     backgroundColor: '#D31B25',
     marginTop: 80,
     marginLeft: 36,
     marginRight: 36,
 },
 btnfont: {
     fontSize: 18,
     color: '#FFFFFF',
 },
});
