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
        component: GiftedlistView,
        sceneConfig:Navigator.SceneConfigs.FloatFromBottom
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
      </View>
    );
  }
});

module.exports = Match;
