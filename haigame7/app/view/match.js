'use strict';
/**
 * APPs我的首页
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');

var {
  View,
  Text,
  Image,
  TouchableOpacity,
  Navigator
  } = React;
import GiftedlistView from '../../temp/giftedlistView';
import SectionView from '../../temp/listviewsection';
import SectionHeader from '../../temp/sectionHeader';
import MyApply from './user/myapply_screen';
import MyReceiveApply from './user/myreceiveapply_screen';
import MySendApply from './user/mysendapply_screen';
import ApplyJoin from './user/applyjoin_screen';
import Login from './user/login';
var MatchStyle = require('../styles/matchstyle');

var Match = React.createClass({

  getInitialState() {
    return {
      _navigator: this.props.navigator
    };
  },

  _pressButton() {
    const nav = this.props.navigator;
    if(nav) {
      nav.push({
        name: 'listview',
        component: Login,
        sceneConfig:Navigator.SceneConfigs.FloatFromBottom
      })
    }else{
      console.log('导航设置错误');
    }
  },
  _pressButton_1() {
    const nav = this.props.navigator;
    if(nav) {
      nav.push({
        name: 'listview',
        component: MyApply
      })
    }else{
      console.log('导航设置错误');
    }
  },
  _pressButton_2() {
    const nav = this.props.navigator;
    if(nav) {
      nav.push({
        name: 'listview',
        component: MyReceiveApply
      })
    }else{
      console.log('导航设置错误');
    }
  },
  _pressButton_3() {
    const nav = this.props.navigator;
    if(nav) {
      nav.push({
        name: 'listview',
        component: MySendApply
      })
    }else{
      console.log('导航设置错误');
    }
  },
  _pressButton_4() {
    const nav = this.props.navigator;
    if(nav) {
      nav.push({
        name: 'listview',
        component: ApplyJoin
      })
    }else{
      console.log('导航设置错误');
    }
  },
  render: function () {
    return (
      <View >
        <Text >
          Match Screen.
        </Text>
        <Image style={{width: 15,height: 15}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
        <TouchableOpacity  onPress={this._pressButton}>
          <Text >列表测试</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this._pressButton_1}>
          <Text >我的申请</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this._pressButton_2}>
          <Text >我收到的申请</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this._pressButton_3}>
          <Text >已邀请</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this._pressButton_4}>
          <Text >被邀请</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = Match;
