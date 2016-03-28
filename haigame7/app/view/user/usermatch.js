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
var commonstyle = require('../../styles/commonstyle');
var styles = require('../../styles/matchstyle');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

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
    _openModa() {
      this.setState({isOpen: true});
    }
    _closeModa() {
      console.log('******');
       this.setState({isOpen: false});
    }
  _switchNavbar(nav){
    this.setState({
      navbar:nav,
    });
    return;
  }
  gotoRoute(name) {
    if (name == 'matchrule') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
        this.props.navigator.push({ name: name, component: MatchRule, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    } else if (name == 'playerinfo') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
      }
    }
  }
  rendermatchList(){
    if(this.state.navbar==0){
      return(
        <View>
          <View style={[styles.schedulelistblock, commonstyle.btnbordergray]}>
            <View style={styles.schedulelisttitle}><Text style={commonstyle.black}>什么什么鱼汤大赛</Text></View>
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
                <View style={styles.schedulelisttime}><Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'2016/02/23'}</Text></View>
              </View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.schedulelistblock, commonstyle.btnbordergray]}>
            <View style={styles.schedulelisttitle}><Text style={commonstyle.black}>什么什么鱼汤大赛</Text></View>
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
                <View style={styles.schedulelisttime}><Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'2016/02/23'}</Text></View>
              </View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
    else{
      return(
        <View>
          <View style={[styles.schedulelistblock, commonstyle.btnbordergray]}>
            <View style={styles.schedulelisttitle}><Text style={commonstyle.black}>什么什么鱼汤大赛</Text></View>
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
                <View style={styles.schedulelisttime}><Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'2016/02/23'}</Text></View>
              </View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}>
                <Image style={styles.schedulelistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
  render() {
    let matchlist = this.rendermatchList();
    return (
      <View style={styles.container}>
        <Header screenTitle="我的赛事" navigator={this.props.navigator}/>
        <View style={styles.nav}>
          <View style={styles.navtab}>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)}>
              <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>已结束的比赛</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
              <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>未进行的比赛</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.centerbg}>
          {matchlist}
        </ScrollView>
      </View>
    );
  }
}
