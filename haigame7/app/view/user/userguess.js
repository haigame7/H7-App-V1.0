'use strict';
/**
 * APP 我的竞猜
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
import Util from '../common/util';
import Header from '../common/headernav'; // 主屏
import Icon from 'react-native-vector-icons/Iconfont';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/matchstyle';

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
      keykey:0,
      footerMsg: "点击加载更多",
      requestData:{
        userID:0,
        guessID:0,
        startpage:0,
        pagecount:0,
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
        requestData:{
          userID:response[1].Creater,
          guessID:0,
         startpage:GlobalVariable.PAGE_INFO.StartPage,
         pagecount:GlobalVariable.PAGE_INFO.PageCount-2
       },
       });
       this.getUserGuessList();
     }
    }else{
        Alert.alert('请求错误');
    }
  });
 }
 getUserGuessList(){
   GuessService.myGuessList(this.state.requestData,(response) => {
     if (response !== GlobalSetup.REQUEST_SUCCESS) {
       if(response[0].MessageCode == '40001'){
         Alert.alert('服务器请求异常');
       }else if(response[0].MessageCode == '0'){
         console.log(response[1]);
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
    return(
      <View style={styles.guesslistblock}>
        <View style={styles.guesslist}>
          <View style={[styles.guesslisttitle]}>
            <Text style={commonstyle.black}>{rowData.MatchName}</Text>
          </View>
          <View style={[commonstyle.row, styles.guesslistcontent]}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.guesslistimg} source={{uri:rowData.STeamLogo}} />
              <Text style={[commonstyle.white, commonstyle.fontsize14, styles.guesslisttext]}>{rowData.STeamName}</Text>
            </View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Text style={[commonstyle.blue, commonstyle.fontsize22]}>{'VS'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12 ]}>{rowData.GuessTime}</Text>
            </View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.guesslistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.white, commonstyle.fontsize14, styles.guesslisttext]}>{'犀利拍立冬至'}</Text>
            </View>
          </View>
          <View style={styles.guesslistresult}>
            <View style={[commonstyle.row, styles.guesslistresulttext]}>
              <View style={commonstyle.col1}>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'竞猜结果  '}<Text style={[commonstyle.white, commonstyle.fontsize12 ]}>{rowData.Result}</Text></Text>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12, styles.guesslistresulttextfont]}>{'我的选择  '}<Text style={[commonstyle.white, commonstyle.fontsize12 ]}>{rowData.BetTeamName}</Text></Text>
              </View>
              <View style={commonstyle.col1}>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'押注金额  '}<Text style={[commonstyle.white, commonstyle.fontsize12]}>{rowData.BetMoney}{'氦金'}</Text></Text>
                <Text style={[commonstyle.yellow, commonstyle.fontsize12, styles.guesslistresulttextfont]}>{'竞猜收益  '}<Text style={[commonstyle.white, commonstyle.fontsize12]}>{'  '}{rowData.Result==GlobalVariable.GUESS_INFO.NoStart||GlobalVariable.GUESS_INFO.Starting?(rowData.BetMoney*rowData.Odds):0}{'氦金'}</Text></Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  _renderFooter(){
    return(
      <TouchableHighlight   underlayColor='#000000' style={commonstyle.paginationview} onPress={this._onLoadMore.bind(this)}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
      </TouchableHighlight>
    );
  }
  _onLoadMore() {
    if (this.state.keykey > 0) {
      this.setState({
        footerMsg: "木有更多多数据了~~~~"
      });
    }else{
      let _ds = this.state.guesslist;
      let _params = this.state.requestData;
      _params.startpage = _params.startpage+1;
      this.setState({
        footerMsg: "正在加载....."
      });
      {/*加载下一页*/}
      GuessService.myGuessList(_params,(response) => {
        if (response[0].MessageCode == '0') {
          let nextData = response[1];
          if(nextData.length<3){
            this.setState({
              keykey:1,
            });
          }
          for(var item in nextData){
            _ds.push(nextData[item])
          }
        } else {
          console.log('请求错误' + response[0].MessageCode);
        }
      });
      //这等到有api在搞吧
      setTimeout(()=>{
        this.setState({
          dataguessSource: this.state.dataguessSource.cloneWithRows(_ds),
          loaded: true,
          footerMsg: "点击加载更多",
        });
      },1000);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header screenTitle="我的竞猜" navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <ListView
            dataSource={this.state.dataguessSource}
            renderRow={this.renderguessList.bind(this)}
            renderFooter={this._renderFooter.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }
}