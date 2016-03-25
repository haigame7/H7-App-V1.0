'use strict';
/**
 * APPs我的赛事
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */

import React, {
    View,
    Text,
    Image,
    StyleSheet,
    Component,
    TouchableOpacity,
    Navigator,
    ScrollView,
    TouchableHighlight,
    } from 'react-native';
var Util = require('../common/util');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import commonstyle from '../../styles/commonstyle';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
     steamname:'',
     eteamname:'',
     money:0,
     }
    }
  componentDidMount(){
    this.setState({
      steamname:this.props.steamname,
      eteamname:this.props.eteamname,
      money:this.props.money,
    });
  }

renderfightdetailList(){
    return(
     <View>
     <View style={[fightdetailStyles.centertextarea]}>
     <Icon name="bell" size={60}  style={[commonstyle.red]}/>
     <Text style={[commonstyle.white,fightdetailStyles.fightdetailtext]}>{'['+this.state.steamname+'] 战队'}</Text>
      <Text style={[commonstyle.white,fightdetailStyles.fightdetailtext]}>{'向你的战队 ['+this.state.eteamname+'] 发起挑战'}</Text>
       <Text style={[commonstyle.red,commonstyle.fontsize14,fightdetailStyles.fightdetailtext]}>{'压注金额'+this.state.money+'氦金'}</Text>
       <Text style={[commonstyle.yellow,fightdetailStyles.fightdetailtext]}>{' 是否接受挑战？'}</Text>
     </View>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style = {fightdetailStyles.fightdetailcancel}  >
      <Text style = {fightdetailStyles.fightdetailcancelfont}> {'认怂'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style = {fightdetailStyles.fightdetail}  >
      <Text style = {fightdetailStyles.fightdetailfont}> {'接受挑战'}</Text>
    </TouchableOpacity>
    </View>

      </View>

    );
  }

render() {
    let fightdetaillist = this.renderfightdetailList();
  return (
    <View style={fightdetailStyles.container}>
     <Header screenTitle="约战详情"   navigator={this.props.navigator}></Header>

          <View style={[fightdetailStyles.centerbg]}>
          {fightdetaillist}
          </View>
        </View>
    );
  }
}
var fightdetailStyles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },
 centertextarea:{
   left:20,
   top:10,
   width:Util.size.width-40,
   height:Util.size.height/2-60,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'rgb(50,50,50)',
 },
 listviewboxicon:{
  borderColor:'#D31B25',
  borderWidth:1,
 },
 fightdetailtext:{
   marginTop:10,

 },
 fightdetailcancel:{
   backgroundColor:'rgb(180,180,180)',
    left:20,
    marginTop:10,
    height:Util.pixel*100,
    width:Util.size.width/2-20,
 },
 fightdetailcancelfont:{
   color:'#000',
   fontSize:16,
   top:Util.pixel*30,
   textAlign:'center',
 },
 fightdetail:{
   backgroundColor:'red',
   left:20,
    height:Util.pixel*100,
     marginTop:10,
    width:Util.size.width/2-20,
 },
 fightdetailfont:{
   color:'#fff',
   fontSize:16,
   top:Util.pixel*30,
   textAlign:'center',
 },

  centertextareacount:{
    position:'absolute',
    marginTop:-15,
    right:25,
    color:'rgb(180,180,180)',
    backgroundColor:'rgb(50,50,50)',
   },
 });
