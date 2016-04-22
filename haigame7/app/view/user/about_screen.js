'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Linking,
  View,
  ScrollView,
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import Header from '../common/headernav'; //导航有问题
import Help from './help_screen';
import Toast from '@remobile/react-native-toast';
var Icon = require('react-native-vector-icons/Iconfont');
export default class extends React.Component {
  constructor(props){
    super(props);

  }

  _help() {
    Toast.show('帮助反馈');
  }
  _update() {
    ToastAndroid.show('检查版本更新',ToastAndroid.SHORT);
  }
  _website() {
    Toast.show('正在建设...');
    return;
    let url = "http://sso.haigame7.com";
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }
  _userAgreement() {
    Toast.show('用户协议');
  }
  _toNextScreen(params){
     // Toast.show("this is a message")
     let _this = this;
     this.props.navigator.push({
       name: params.name,
       component: params.component,
       sceneConfig:params.sceneConfig || undefined,
       params: {
         ...this.props,
       }
     })
   }
  render() {
    return(
      <View >
        <Header screenTitle='关于H7'  navigator={this.props.navigator}/>
        <Image source={require('../../images/loginbg.jpg')} style={styles.loginbg} resizeMode={"cover"} >
          <ScrollView style={[commonstyle.bodyer, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}>
            <View activeOpacity = {1} style = {styles.logo}>
              <Image style = {{width: 80, height: 80, }} source = { require('../../images/logo.png') }/>
            </View>
            <View style={styles.abouttext}>
              <Text style={commonstyle.cream}>        氦7互娱，以不分等级、不看背景、全民电竞、全民娱乐为宗旨，力争打造全国最优秀的非职业电子竞技约战平台。为广大电子竞技爱好者提供一个全新的以促进电竞社交、分享电竞经验、提高电竞水平为目的的互动交流平台。</Text>
              <Text style={commonstyle.cream}>        氦7互娱以草根电竞、全民电竞的理念为基础，致力为中国电竞崛起做贡献，为中国职业电竞输送人才，传播电竞正能量。</Text>
              <Text style={commonstyle.cream}>        氦7互娱始终坚持以“诚信、创新、沟通”为团队宗旨，服务于中国电子竞技行业。奉行“质量第一，信誉第一”的原则。开拓创新，积极进取，做中国最好的电子竞技约战平台。</Text>
              <Text style={commonstyle.cream}>        氦7互娱更是会不定期的举办各种赛事。最专业、最权威，是我们的比赛理念。</Text>
              <Text style={commonstyle.cream}>        电竞已经成为时尚，电竞已经成为风向。热爱电竞执着电竞的玩家，氦7互娱将帮助你完成梦想，实现价值！</Text>
              <Text style={commonstyle.cream}>        如果你对我们感兴趣，也是热爱电竞的小伙伴，可以联系我们。</Text>
              <Text style={commonstyle.cream}>        我们的联系方式：yoyo.liu@haigame7.com</Text>
            </View>

            <View style={[styles.listview, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}></View>
            <TouchableOpacity style={[styles.listview, {backgroundColor: 'rgba(0, 0, 0, 0)',}]} activeOpacity={0.8}  onPress={this._toNextScreen.bind(this,{"name":"帮助与反馈","component":Help})}>
              <Text style={styles.listviewtextleft}>帮助与反馈</Text>
              <View style={styles.listviewtextbox} ></View>
              <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
            </TouchableOpacity>


            <View style={commonstyle.row}>
              <TouchableOpacity style={styles.aboutbtn} onPress={this._website.bind(null,this)}>
                <Text style={commonstyle.red}>官方网站</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.aboutbtn} onPress={this._userAgreement.bind(null,this)}>
                <Text style={commonstyle.red}>用户协议</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.listbox, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}></View>
            <View style={[styles.listbox, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}></View>
          </ScrollView>
        </Image>
      </View>
    );
  }
}
