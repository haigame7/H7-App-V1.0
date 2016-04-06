'use strict';
/**
 * APP 赛程详情
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
  ListView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
var Header = require('../common/headernav'); // 主屏
var commonstyle = require('../../styles/commonstyle');
var styles = require('../../styles/matchstyle');
var Carousel = require('react-native-carousel');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import MatchService from '../../network/matchservice';
import GlobalSetup from '../../constants/globalsetup';
import GlobalVariable from '../../constants/globalvariable';
import Toast from '@remobile/react-native-toast';

export default class extends Component{
  constructor(props) {
    super(props);
    var databobo = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var datamatchdate = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var databobomatch = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      navbar: this.props.boboID,
      subbar: 0,
      databoboSource: databobo.cloneWithRows([]),
      datamatchdateSource: datamatchdate.cloneWithRows([]),
      databobomatchSource: databobomatch.cloneWithRows([]),
      bobolist:[],
      matchdatelist:[],
      bobomatchlist:[],
      boboid: this.props.boboID,
      loaded:false,
      userphone:this.props.phoneNum?this.props.phoneNum : '13439843883' ,
      userdata:{
        userid:0,
        userteamid:0,
        userasset:0
      },
      matchdata:{
        matchID:4,
      },
    }
  }
  componentWillMount() {
    this.initData();
  }
  initData(){
   this.getBoBoList();
   this.getMatchDateList(this.props.matchdata.matchID, this.props.boboID);
  }
  getBoBoList(){
    MatchService.getBoBoList(this.props.matchdata,(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Toast.show('服务器请求异常');
        }else if(response[0].MessageCode == '0'){
          let newData = response[1];
          this.setState({
            databoboSource: this.state.databoboSource.cloneWithRows(newData),
            bobolist:newData,
            loaded:false,
          });
         }
       }
        else{
            Toast.show('请求错误');
          }
    });
  }
  getMatchDateList(matchid, boboid){
    MatchService.getMatchDateList({matchID: matchid,boboID: boboid},(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Toast.show('服务器请求异常');
        }else if(response[0].MessageCode == '0'){
          let newData = response[1];
          this.setState({
            datamatchdateSource: this.state.datamatchdateSource.cloneWithRows(newData),
            matchdatelist:newData,
            loaded:false,
          });
          this.getBoBoMatchList(this.props.matchdata.matchID, this.props.boboID, newData[0].StartTime.toString());
         }
       }
        else{
            Toast.show('请求错误');
          }
    });
  }
  getBoBoMatchList(matchid, boboid, matchdate){
    MatchService.getBoBoMatchList({matchID: matchid,boboID: boboid,matchtime: matchdate},(response) => {
      if (response !== GlobalSetup.REQUEST_SUCCESS) {
        if(response[0].MessageCode == '40001'){
          Toast.show('服务器请求异常');
        }else if(response[0].MessageCode == '0'){
          let newData = response[1];
          this.setState({
            databobomatchSource: this.state.databobomatchSource.cloneWithRows(newData),
            bobomatchlist:newData,
            loaded:false,
          });
         }
       }
        else{
            Toast.show('请求错误');
          }
    });
  }
  _switchNavbar(nav){
    this.setState({
      navbar:nav,
      subbar: 0,
    });
    this.getMatchDateList(this.props.matchdata.matchID, nav);
    return;
  }
  _switchSubbar(sub, date){
    this.setState({
      subbar:sub,
    });
    this.getBoBoMatchList(this.props.matchdata.matchID, this.props.boboID, date);
    return;
  }
  _renderFooter(){

  }
  gotoRoute(name) {
    if (name == 'carouselrule') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
      }
    } else if (name == 'playerinfo') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
      }
    }
  }
  _renderBoBoRow(rowData){
    return(
      <TouchableOpacity style={[commonstyle.viewcenter, styles.carousellist]} activeOpacity={0.8} onPress = {() => this._switchNavbar(rowData.BoBoID)}>
        <Image style={rowData.BoBoID==this.state.navbar?styles.carousellistimgactive:styles.carousellistimg} source={{uri:rowData.UserPicture}} />
        <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.Name}</Text>
      </TouchableOpacity>
    );
  }
  _renderMatchDateRow(rowData,sectionID,rowID){
    return(
      <TouchableOpacity style={[this.state.subbar==rowID?styles.navbtnactive:styles.navbtn, styles.navtime]} activeOpacity={0.8}  onPress = {() => this._switchSubbar(rowID, rowData.StartTime)}>
        <Text style={this.state.subbar==rowID?commonstyle.red:commonstyle.white}>{rowData.StartTime}</Text>
      </TouchableOpacity>
    );
  }
  _renderBoBoMatchRow(rowData){
    if(rowData.Result=='主队胜'){
      return(
          <View style={[commonstyle.row, styles.schedulelist]}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:rowData.STeamLogo}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.STeamName}</Text>
            </View>
            <View style={commonstyle.col1}>
              <View style={[commonstyle.row, styles.schedulelistcenter]}>
                <View style={[commonstyle.btnborderorange, styles.schedulelisttexticon]}>
                  <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
                </View>
                <View style={styles.schedulelistvs}>
                  <Text style={[commonstyle.blue, commonstyle.fontsize18]}>{'VS'}</Text>
                </View>
                <View style={[commonstyle.btnbordercyan, styles.schedulelisttexticon]}>
                  <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
                </View>
              </View>
              <TouchableOpacity style={[commonstyle.btnborderred, styles.schedulelistbtn]} activeOpacity={0.8}>
                <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'查看详情'}</Text>
              </TouchableOpacity>
            </View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:rowData.ETeamLogo}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.ETeamName}</Text>
            </View>
          </View>
        );
    }else if(rowData.Result=='客队胜'){
      return(
          <View style={[commonstyle.row, styles.schedulelist]}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:rowData.STeamLogo}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.STeamName}</Text>
            </View>
            <View style={commonstyle.col1}>
              <View style={[commonstyle.row, styles.schedulelistcenter]}>
                <View style={[commonstyle.btnbordercyan, styles.schedulelisttexticon]}>
                  <Text style={[commonstyle.cyan, commonstyle.fontsize12]}>{'负'}</Text>
                </View>
                <View style={styles.schedulelistvs}>
                  <Text style={[commonstyle.blue, commonstyle.fontsize18]}>{'VS'}</Text>
                </View>
                <View style={[commonstyle.btnborderorange, styles.schedulelisttexticon]}>
                  <Text style={[commonstyle.orange, commonstyle.fontsize12]}>{'胜'}</Text>
                </View>
              </View>
              <TouchableOpacity style={[commonstyle.btnborderred, styles.schedulelistbtn]} activeOpacity={0.8}>
                <Text style={[commonstyle.red, commonstyle.fontsize14]}>{'查看详情'}</Text>
              </TouchableOpacity>
            </View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:rowData.ETeamLogo}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.ETeamName}</Text>
            </View>
          </View>
        );
    }else{
      return(
          <View style={[commonstyle.row, styles.schedulelist]}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:rowData.STeamLogo}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.STeamName}</Text>
            </View>
            <View style={commonstyle.col1}>
              <View style={[commonstyle.row, styles.schedulelistcenter]}>
                <View style={commonstyle.col1}></View>
                <View style={styles.schedulelistvs}>
                  <Text style={[commonstyle.gray, commonstyle.fontsize18]}>{'VS'}</Text>
                </View>
                <View style={commonstyle.col1}></View>
              </View>
              <View style={[commonstyle.btnbordergray, styles.schedulelistbtn]}>
                <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'未开始'}</Text>
              </View>
            </View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:rowData.ETeamLogo}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.ETeamName}</Text>
            </View>
          </View>
        );
    }
  }
  rendercarousellist(){
    return(
      <View style={styles.carouselview}>
        <Carousel  hideIndicators={true} animate={false} delay={5000}  loop={true} >
          <View style={styles.carousellistblock}>
            <ListView style={styles.carousellist} horizontal={true}
              dataSource={this.state.databoboSource}
              renderRow={this._renderBoBoRow.bind(this)}
            />
          </View>
        </Carousel>
      </View>
    );
  }
  render() {
    let carousel = this.rendercarousellist();
    return (
      <View style={styles.container}>
        <Header screenTitle="Dota2争霸赛赛程"   iconText='我的赛程' callback={this.gotoRoute.bind(this,'carouselrule')} navigator={this.props.navigator}/>
        {/*轮播*/}
        {carousel}
        {/*轮播end*/}
        <View style={styles.nav}>
            <View style={styles.navtab}>
          <Carousel  hideIndicators={true} animate={false} delay={5000}  loop={true} >
              <ListView style={styles.navtimetab} horizontal={true}
                  dataSource={this.state.datamatchdateSource}
                  renderRow={this._renderMatchDateRow.bind(this)}
                />
          </Carousel>
            </View>
        </View>
        <ScrollView style={styles.centerbg}>
          <ListView
              dataSource={this.state.databobomatchSource}
              renderRow={this._renderBoBoMatchRow.bind(this)}
              renderFooter={this._renderFooter.bind(this)}
            />
        </ScrollView>
      </View>
    );
  }
}
