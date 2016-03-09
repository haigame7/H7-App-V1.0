
'use strict';

/**
 * [APP入口]
 * @author aran.hu
 */
var React = require('react-native');
var {
  Text,
  View,
  Navigator,
  BackAndroid,
  AppRegistry,
  Component,
  Alert,
  Platform,
  ToastAndroid
} = React;

// var IndexStyle = require('./app/styles/IndexStyle'); // 样式
// var TimerMixin = require('react-timer-mixin'); // RN的计时器
// var SplashScreen = require('./app/view/common/SplashScreen'); // 飞屏
// var MainScreen = require('./app/view/common/MainScreen'); // 主屏
// var Header = require('./app/view/common/Header'); // 主屏
// var _navigator; // 页面管理器

// 后退按钮 Android
// BackAndroid.addEventListener('hardwareBackPress', function () {
//   if (_navigator && _navigator.getCurrentRoutes().length > 1) {
//     _navigator.pop();
//     return true;
//   }
//   return false;
// });


// var haigame7 = React.createClass({
//    //mixins: [TimerMixin], // 延迟器 可以不用这个了 官网可以改成es6的方式
//   //  // 初始化状态
//    getInitialState: function () {
//      return {
//        splashed: true
//      };
//    },
//    // 页面加载
//   componentDidMount: function () {
//     //mixin fun
//     this.timer = setTimeout(
//       ()=> {
//         this.setState({splashed: false});
//         console.log('生效啦');
//       }, 2000);
//     },
//
//     // 线路映射
//     /**
//      * [routeMapper description]
//      * @param  {[type]} route:     Map           [router parameter]
//      * @param  {[type]} navigator: Navigator     [navigator compoent]
//      * @return {[type]}            [description]
//      * http://www.cnblogs.com/flyingzl/articles/4913693.html 后面按照这个改就行
//      */
//     routeMapper: function (route: Map, navigator: Navigator) {
//       _navigator = navigator;
//       if (route.name === 'home') {
//         return (
//           <View>
//           <Header initObj={{
//           title:'Main',
//           backName:'',
//          }}   navigator={this.props.navigator}></Header>
//           <View style={IndexStyle.container}>
//             <MainScreen/>
//           </View>
//           </View>
//         );
//       }
//     },
//
//     render: function () {
//         if (!this.state.splashed) {
//           // 初始路径
//           var initialRoute = {name: 'home'};
//           return (
//             <Navigator
//             style={IndexStyle.container}
//             initialRoute={initialRoute}
//             configureScene={() => Navigator.SceneConfigs.FadeAndroid}
//             renderScene={this.routeMapper}/>
//           );
//         } else {
//           return (
//             <SplashScreen/> /*飞屏*/
//           );
//         }
//       }
// });
//
// AppRegistry.registerComponent('haigame7', () => haigame7);
//
import App from './app/view/common/app';
// var Header = require('./app/view/common/Header'); // 主屏
let _navigator;
let lastBackPressed;
let _timer;
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

      if (routers.length > 1) {
        nav.pop();
        return true;
      }else {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
          //最近2秒内按过back键，可以退出应用。
          // ToastAndroid.show('这里应该退出',ToastAndroid.SHORT);
          return false;
        }
        lastBackPressed = Date.now();
        //不好用。。。。
        // ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
        console.log('再按一次退出应用');
        return true;
      }
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        console.log('卸载');
        _timer && clearTimeout(_timer);
      }
  render() {
      var defaultName = 'AppComponent';
      var defaultComponent = App;
      return (
        <Navigator
          initialRoute={{ name: defaultName,component: defaultComponent }}
          configureScene={(route) => {
            return route.sceneConfig || Navigator.SceneConfigs.VerticalDownSwipeJump;
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
