/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IndexStyle from '../styles/IndexStyle';// 样式
import TimerMixin from 'react-timer-mixin';// RN的计时器
import SplashScreen from './app/view/common/SplashScreen'; // 飞屏
import MainScreen from './app/view/common/MainScreen'; // 飞屏

var _navigator;// 页面管理器

// 后退按钮 Android
BackAndroid.addEventListener('hardwareBackPress', function () {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

class haigame7 extends Component {
  mixins: [TimerMixin],//延迟器
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true
    };
  }

  componentDidMount() {
    this.setTimeout (()=>{
      this.setState({showSplash: false});
    },2000);
  }

  routeMapper(route,navigator) {
    _navigator = navigator;
    if (route.name === 'home') {
        return (
          <View style={IndexStyle.container}>
            <MainScreen/>
          </View>
        );
      }
  }

  render() {
      if(!this.state.showSplash) {
        var initialRoute = {name: 'home'};
        return (
          <Navigator
          style={IndexStyle.container}
          initialRoute={initialRoute}
          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
          renderScene={this.routeMapper}
          />
        );
      } else {
        return (
          <SplashScreen/> /*飞屏*/
        );
      }
  }
}
AppRegistry.registerComponent('haigame7', () => haigame7);
