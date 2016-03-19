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
    ScrollView,
    StyleSheet,
    Component,
    TouchableOpacity,
    TouchableHighlight,
    } from 'react-native';

import commonstyle from '../styles/commonstyle';
import styles from '../styles/rankstyle';
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
          <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
            <Image style={styles.ranklistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.ranklistcenter}>
              <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{'生命不息,电竞不止~~1231231231'}</Text>
              <View style={styles.ranklistrow}>
                <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
                <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
            <Image style={styles.ranklistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.ranklistcenter}>
              <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{'生命不息,电竞不止~~1231231231'}</Text>
              <View style={styles.ranklistrow}>
                <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
                <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
            <Image style={styles.ranklistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.ranklistcenter}>
              <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{'生命不息,电竞不止~~1231231231'}</Text>
              <View style={styles.ranklistrow}>
                <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
                <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
            <Image style={styles.ranklistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.ranklistcenter}>
              <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{'生命不息,电竞不止~~1231231231'}</Text>
              <View style={styles.ranklistrow}>
                <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
                <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
            <Image style={styles.ranklistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <View style={styles.ranklistcenter}>
              <Text style={[commonstyle.white, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
              <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{'生命不息,电竞不止~~1231231231'}</Text>
              <View style={styles.ranklistrow}>
                <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
                <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
                <Text style={commonstyle.red}>{'12345'}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
          <View style={styles.navtab}>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)} >
              <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>荣耀团队</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
              <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>名人堂</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navsub}>
            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8}  onPress = {() => this._switchSubNavbar(1)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{this.state.data.subnavbarname}</Text>
              <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==1?commonstyle.red:commonstyle.gray}/>
            </TouchableOpacity>

            <View style={styles.navsubline}></View>

            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress = {() => this._switchSubNavbar(2)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>战斗力</Text>
              <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==2?commonstyle.red:commonstyle.gray}/>
            </TouchableOpacity>

            <View style={styles.navsubline}></View>

            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress = {() => this._switchSubNavbar(3)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>氦金</Text>
              <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==3?commonstyle.red:commonstyle.gray}/>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollview}>
        {ranklist}
        </ScrollView>
      </View>
    );
  }
}
