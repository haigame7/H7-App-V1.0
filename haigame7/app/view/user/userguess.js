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
    ListView,
    TouchableOpacity,
    Navigator,
    ScrollView,
    TouchableHighlight,
    } from 'react-native';
var Util = require('../common/util');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var commonstyle = require('../../styles/commonstyle');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import GuessService from '../../network/guessservice';
import FightService from '../../network/fightservice';
import GlobalSetup from '../../constants/globalsetup';
import GlobalVariable from '../../constants/globalvariable';

export default class extends Component{
  constructor(props) {
    super(props);
    var dataguess = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      navbar: 0,
      userphone:this.props.phoneNum?this.props.phoneNum : '13439843883' ,
      dataguessSource:dataguess.cloneWithRows(['row1']),
      guesslist:[],
      userdata:{
        userid:0,
        userteamid:0,
        userasset:0
      },
      }
    }
 componentDidMount(){
   this.initData();
 }
 initData(){
   FightService.getUserDefaultTeam({phone:this.state.userphone},(response) => {
   if (response !== GlobalSetup.REQUEST_SUCCESS) {
     if(response[0].MessageCode == '40001'){
       Alert.alert('服务器请求异常');
     }else if(response[0].MessageCode == '0'){
       this.setState({
        userdata:{
          userid:response[1].Creater,
         userteamid:response[1].TeamID,
         userasset:response[1].Asset,
       },
       });
       this.getUserGuessList(response[1].Creater);
     }
    }else{
        Alert.alert('请求错误');
    }
  });
 }
 getUserGuessList(userID){
   GuessService.myGuessList({userID:userID,guessID:0,startpage:GlobalVariable.PAGE_INFO.StartPage,pagecount:GlobalVariable.PAGE_INFO.PageCount},(response) => {
     if (response !== GlobalSetup.REQUEST_SUCCESS) {
       if(response[0].MessageCode == '40001'){
         Alert.alert('服务器请求异常');
       }else if(response[0].MessageCode == '0'){
         let newData = response[1];
         this.setState({
           dataguessSource: this.state.dataguessSource.cloneWithRows(newData),
           isOpen: true,
         });
        }
      }
       else{
           Alert.alert('请求错误');
         }
   });
 }
 renderguessList(rowData){
   console.log(rowData);
    return(
      <View style={[styles.guesslist]}>
       <View style={[styles.guessli]}>
          <View style={[styles.guesslititle]}><Text style={[styles.guesslititletext]}>{rowData.MatchName}</Text></View>
          <View style={[styles.guesslicontent]}>
           <View style={[styles.flexcolumn]}>
          <Image style={styles.guesslistimg} source={{uri:rowData.STeamLogo}} />
          <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{rowData.STeamName}</Text>
          </View>
          <View style={styles.guesslistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'胜'}<Text>{'VS'}</Text>{'负'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{rowData.GuessTime}</Text>
          </View>
          <View style={[styles.flexcolumn]}>
         <Image style={styles.guesslistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         <Text style={[commonstyle.white, commonstyle.fontsize14,{marginTop:5}]}>{'犀利拍立冬至'}</Text>
         </View>
         </View>
         <View style={[styles.guessresult]}>
         <View style={[styles.flexrow,{marginBottom:5}]}>
           <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'竞猜结果'}</Text>
           <Text style={[commonstyle.white, commonstyle.fontsize12 ]}>{'  犀利拍立冬至'}</Text>
           <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'       押注金额'}</Text>
           <Text style={[commonstyle.white, commonstyle.fontsize12]}>{'  '}{rowData.BetMoney}{'氦金'}</Text>
         </View>
         </View>
       </View>
      </View>
    );
  }
  _renderFooter(){

  }
render() {
  return (
    <View style={styles.container}>
     <Header screenTitle="我的竞猜"   navigator={this.props.navigator}></Header>

          <View style={[styles.centerbg]}>
          <ListView
            dataSource={this.state.dataguessSource}
            renderRow={this.renderguessList.bind(this)}
            renderFooter={this._renderFooter.bind(this)}
          />
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
  flexrow:{
    flexDirection:'row',
  },
  flexcolumn:{
    flexDirection:'column',
    alignItems:'center',
   justifyContent:'center',
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
  },
  guesslist:{
   flex:1,
   paddingLeft:10,
   paddingRight:10,

  },
  guessli:{
  width: Util.size.width-20,
  marginTop:10,
  height:Util.size.height*13/40,
  backgroundColor: '#232220',
  borderColor:'gray',
  borderWidth:1,

  },
  guesslititle:{
   backgroundColor:'rgb(120,120,120)',
   height:Util.pixel*50,
   alignItems:'center',
   justifyContent:'center',
  },
  guesslititletext:{
   fontSize:14,
  },
  guesslicontent:{
   paddingTop:20,
   flexDirection:'row',
   alignItems:'center',
  justifyContent:'center',
  },
  guesslistimg: {
     width: 70,
     height: 70,
     borderRadius: 35,
     borderWidth: 2,
     borderColor: 'rgba(255, 255, 255, 0.6)',
     marginRight: 10,
  },
  guesslistcenter: {
    width:Util.size.width/3,
    alignItems:'center',
   justifyContent:'center',
  },
  guesslisttext: {
     marginTop: 5,
     marginBottom: 5,
  },
  guessresult:{
   backgroundColor:'rgba(182, 29, 38, 0.92)',
     width:Util.size.width-60,
     left:20,
     height:60,
     borderRadius:2,
     top:10,
   alignItems:'center',
    justifyContent:'center',
  },

 });
