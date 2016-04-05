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
    this.state = {
      navbar: 0,
      subbar: 0,
      databoboSource: databobo.cloneWithRows([]),
      bobolist:[],
      boboid: 2,
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
  _switchNavbar(nav){
    this.setState({
      navbar:nav,
    });
    return;
  }
  _switchSubbar(sub){
    this.setState({
      subbar:sub,
    });
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
      <TouchableOpacity style={[commonstyle.viewcenter, styles.carousellist]} activeOpacity={0.8} >
        <Image style={this.state.boboid==rowData.BoBoID?styles.carousellistimgactive:styles.carousellistimg} source={{uri:rowData.UserPicture}} />
        <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.Name}</Text>
      </TouchableOpacity>
    );
  }
  rendercarousellist(){
    return(
      <View style={styles.carouselview}>
        <Carousel  hideIndicators={true} animate={false} delay={5000}  loop={true} >
          <View style={styles.carousellistblock}>
            <ListView style={styles.carousellist} horizontal={true}
              dataSource={this.state.databoboSource}
              renderRow={this._renderBoBoRow.bind(this)}
              renderFooter={this._renderFooter.bind(this)}
            />
          </View>
        </Carousel>
      </View>
    );
  }
  renderscheduleList(){
    if(this.state.navbar==0){
      return(
        <View>
          <View style={[commonstyle.row, styles.schedulelist]}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
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
              <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
            </View>
          </View>
        </View>
      );
    }
    else{
      return(
        <View>
          <View style={[commonstyle.row, styles.schedulelist]}>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
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
                <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'查看详情'}</Text>
              </View>
            </View>
            <View style={[commonstyle.col1, commonstyle.viewcenter]}>
              <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
            </View>
          </View>
        </View>
      );
    }
  }
  render() {
    let schedulelist = this.renderscheduleList();
    let carousel = this.rendercarousellist();
    return (
      <View style={styles.container}>
        <Header screenTitle="Dota2争霸赛赛程"   iconText='我的赛程' callback={this.gotoRoute.bind(this,'carouselrule')} navigator={this.props.navigator}/>
        {/*轮播*/}
        {carousel}
        {/*轮播end*/}
        <View style={styles.nav}>
          <View style={styles.navtab}>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
             <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>05/12</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.navbar==1?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
              <Text style={this.state.navbar==1?commonstyle.red:commonstyle.white}>05/13</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.navbar==2?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(2)}>
              <Text style={this.state.navbar==2?commonstyle.red:commonstyle.white}>05/14</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.centerbg}>
          {schedulelist}
        </ScrollView>
      </View>
    );
  }
}
