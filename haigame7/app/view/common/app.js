'use strict';
import React,
{ Component, View, Text, ScrollView,AsyncStorage ,TouchableOpacity,Dimensions,Platform,Navigator,BackAndroid}
from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
import Toast from '@remobile/react-native-toast';
import Headernav from './headernav';
import User from '../user.js';
import Team from '../team.js';
import Rank from '../rank.js';
import Fight from '../fight.js';
import Match from '../match.js';
import Login from '../user/login';
import GlobalVariable from '../../constants/globalvariable';
import UserService from '../../network/userservice';

import Cache from '../../../temp/cache'
import userdata from '../../modules/data_model'
import SplashScreen from '@remobile/react-native-splashscreen';
/*暂时留着*/
// let userdata = {
//   'PhoneNumber': '15101075739',
//   'UserWebNickName': 'naive',
//   'UserWebPicture': '',
//   'Sex': '1',
//   'Address': '广东-广州-越秀区',
//   'Birthday': '2000-01-01',
//   'Hobby': '我干！'
// }

const glypy = glypyMapMaker({
  MatchOn: 'e623',
  Match: 'e624',
  FightOn: 'e625',
  Fight: 'e626',
  TeamOn: 'e627',
  Team: 'e628',
  RankOn: 'e621',
  Rank: 'e622'
});
let _navigator;
var BaseLeftToRightGesture = {

  // If the gesture can end and restart during one continuous touch
  isDetachable: false,

  // How far the swipe must drag to start transitioning
  gestureDetectMovement: 2,

  // Amplitude of release velocity that is considered still
  notMoving: 0.3,

  // Fraction of directional move required.
  directionRatio: 0.66,

  // Velocity to transition with when the gesture release was "not moving"
  snapVelocity: 2,

  // Region that can trigger swipe. iOS default is 30px from the left edge
  edgeHitWidth: 30,

  // Ratio of gesture completion when non-velocity release will cause action
  stillCompletionRatio: 3 / 5,

  fullDistance: Dimensions.get('window').width,

  direction: 'left-to-right',

};
var BaseOverswipeConfig = {
  frictionConstant: 1,
  frictionByDistance: 1.5,
};
export default class haigame7 extends Component {

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
          configureScene={(route,_navigator) => {
            let config = route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump;
            if(_navigator.length == 1) {
              config.gestures.jumpForward.overswipe = null;
              config.gestures.jumpBack.overswipe = null;
            }
            return config;
          }}
          renderScene={(route, navigator) => {
            // console.log(navigator.getCurrentRoutes().length);
            let config = route.sceneConfig
            if (config != undefined) {
              if(navigator.getCurrentRoutes().length == 1){
                config.gestures.jumpBack = {
                  ...BaseLeftToRightGesture,
                  overswipe: BaseOverswipeConfig,
                  edgeHitWidth: null,
                  isDetachable: true,
                }
              } else {
                console.log('设置回退为空');
                config.gestures.jumpBack = {
                  ...BaseLeftToRightGesture,
                  overswipe: null,
                  edgeHitWidth: null,
                  isDetachable: true,
                }
              }
            }

            let Component  = route.component;
            _navigator = navigator //android 设置返回按键导航
            return <Component {...route.params} navigator={navigator} />
          }}/>
      );
    }
}



/** 首页 */
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
    this.state = {
               userData: {},
    }
  }
  componentWillMount() {
    this.updateLoginState();
    // console.log(userdata);

    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
    //   let data = JSON.parse(value);
    //   AsyncStorage.setItem(GlobalVariable.USER_INFO.USERSESSION, JSON.stringify(data));
      if( value == undefined) {
        this.refs.header_match.updateComponent({name:'登陆1',component:Login});
        this.refs.header_fight.updateComponent({name:'登陆2',component:Login});
        this.refs.header_rank.updateComponent({name:'登陆3',component:Login});
        this.refs.header_team.updateComponent({name:'登陆4',component:Login});
      } else {
        let jsondata = JSON.parse(value);
        this.setState({userData: jsondata})
      }
    });
  }
  componentWillReceiveProps(nextProps) {
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }
  componentWillUpdate() {
  }
  componentDidMount() {
    setTimeout(()=>{
      SplashScreen.hide()
    },2000)
  }
  updateLoginState(){
    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
      if( value == undefined) {
        this.refs.header_match.updateComponent({name:'登陆1',component:Login});
        this.refs.header_fight.updateComponent({name:'登陆2',component:Login});
        this.refs.header_rank.updateComponent({name:'登陆3',component:Login});
        this.refs.header_team.updateComponent({name:'登陆4',component:Login});
        this.refs.content_team.updateContentData({userData:''});
        this.refs.content_fight.updateContentData({userData:''});
        this.refs.content_rank.updateContentData({userData:''});
        this.refs.content_match.updateContentData({userData:''});
      } else {
        let jsondata = JSON.parse(value);
        this.setState({userData: jsondata});
        this.refs.header_match.updateComponent({name:'用户中心',component:User});
        this.refs.header_fight.updateComponent({name:'用户中心',component:User});
        this.refs.header_rank.updateComponent({name:'用户中心',component:User});
        this.refs.header_team.updateComponent({name:'用户中心',component:User});
        this.refs.content_team.updateContentData({userData:this.state.userData});
        this.refs.content_fight.updateContentData({userData:this.state.userData});
        this.refs.content_rank.updateContentData({userData:this.state.userData});
        this.refs.content_match.updateContentData({userData:this.state.userData});
      }
    });
  }
  gotoRef(toggle){
      this.refs['myTabbar'].gotoTab(toggle);
  }

  tabbarToggle() {
    this.refs['myTabbar'].getBarRef().show(this.toggle);
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <Tabbar ref="myTabbar" barColor={'rgb(0, 0, 0)'}>
        <Tab name="赛事">
          <IconWithBar label='赛事' onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Match} ontype={glypy.MatchOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
          <Headernav
            ref="header_match"
            screenTitle='赛事'
            iconName='user'
            nextComponent={{name:'用户中心',component:User}}
            gotoRef={this.gotoRef.bind(this)}
            updateLoginState={this.updateLoginState.bind(this)}
            isPop={false}
            navigator={this.props.navigator} {...this.state}/>
           <Match
            ref="content_match"
            updateLoginState={this.updateLoginState.bind(this)}
            navigator={this.props.navigator} {...this.state}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="约战" >
          <IconWithBar label="约战" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Fight} ontype={glypy.FightOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
           <Headernav
             ref="header_fight"
             screenTitle='约战'
             iconName='user'
             nextComponent={{name:'用户中心',component:User}}
             gotoRef={this.gotoRef.bind(this)}
             updateLoginState={this.updateLoginState.bind(this)}
             isPop={false}
             navigator={this.props.navigator} {...this.state}/>
           <Fight
             ref="content_fight"
             updateLoginState={this.updateLoginState.bind(this)}
             navigator={this.props.navigator} {...this.state}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="排行">
          <IconWithBar label="排行" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Rank} ontype={glypy.RankOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
           <Headernav
             ref="header_rank"
             screenTitle='排行'
             iconName='user'
             nextComponent={{name:'用户中心',component:User}}
             gotoRef={this.gotoRef.bind(this)}
             updateLoginState={this.updateLoginState.bind(this)}
             isPop={false}
             navigator={this.props.navigator} {...this.state}/>
           <Rank
            ref="content_rank"
            updateLoginState={this.updateLoginState.bind(this)}
            navigator={this.props.navigator} {...this.state}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="组队">
          <IconWithBar label="组队" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Team} ontype={glypy.TeamOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
            <Headernav
              ref="header_team"
              screenTitle='组队'
              iconName='user'
              nextComponent={{name:'用户中心',component:User}}
              updateLoginState={this.updateLoginState.bind(this)}
              isPop={false}
              navigator={this.props.navigator} {...this.state}/>
           <Team
             ref="content_team"
             updateLoginState={this.updateLoginState.bind(this)}
             navigator={this.props.navigator} {...this.state}/>
          </View>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}
