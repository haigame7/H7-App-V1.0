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
  View,
  Platform,
  Navigator
} from 'react-native';

import App from './app/view/common/app';
// var Header = require('./app/view/common/Header'); // 主屏
let _navigator;
class haigame7 extends Component {
  componentWillMount() {
      if (Platform.OS === 'android') {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
      }
    }
    componentWillUnmount() {
      if (Platform.OS === 'android') {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
      }
    }
    onBackAndroid(){
      const nav = _navigator;
      const routers = nav.getCurrentRoutes();
      var lastBackPressed = Date.now();
      if (routers.length > 1) {
        nav.pop();
        return true;
      }else {
        console.log(lastBackPressed);
        console.log(lastBackPressed + 2000 >=Date.now());
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
          //最近2秒内按过back键，可以退出应用。
          return false;
        }
        lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
        return true;
      }
    }

  render() {
      var defaultName = 'AppComponent';
      var defaultComponent = App;
      return (
        <Navigator
          initialRoute={{ name: defaultName,component: defaultComponent }}
          configureScene={(route) => {
            return route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component  = route.component;
            _navigator = navigator //android 设置返回按键导航
            return <Component {...route.params} navigator={navigator} />
          }}/>
      );
    }
}


AppRegistry.registerComponent('haigame7', () => haigame7);
