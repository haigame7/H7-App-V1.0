import React, { Component, View, Text, ScrollView,AsyncStorage ,TouchableOpacity} from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
import Toast from '@remobile/react-native-toast';
var Headernav = require('./headernav');


var User  = require('../user.js');
import Team from '../team.js';
import Rank from '../rank.js';
import Fight from '../fight.js';
import Match from '../match.js';
import Login from '../user/login';
import GlobalVariable from '../../constants/globalvariable';
import UserService from '../../network/userservice';
import Cache from '../../../temp/cache'

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
let userdata = {
  'PhoneNumber': '15101075739',
  'UserWebNickName': 'naive',
  'UserWebPicture': '',
  'Sex': '1',
  'Address': '广东-广州-越秀区',
  'Birthday': '2000-01-01',
  'Hobby': '我干！'
}
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
    this.state = {
               userData: userdata,
    }
  }
  componentWillMount() {

    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
    //   let data = JSON.parse(value);
    //   AsyncStorage.setItem(GlobalVariable.USER_INFO.USERSESSION, JSON.stringify(data));

      if( value != undefined) {
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
            isPop={false}
            navigator={this.props.navigator} {...this.state}/>
           <Match navigator={this.props.navigator} {...this.state}/>
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
             isPop={false}
             navigator={this.props.navigator} {...this.state}/>
           <Fight navigator={this.props.navigator}/>
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
             isPop={false}
             navigator={this.props.navigator} {...this.state}/>
           <Rank navigator={this.props.navigator}/>
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
              isPop={false}
              navigator={this.props.navigator} {...this.state}/>
           <Team navigator={this.props.navigator}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="Test">
          <IconWithBar label="Test" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Team} ontype={glypy.TeamOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
            <Headernav
              ref="header_team"
              screenTitle='Test'
              iconName='user'
              nextComponent={{name:'用户中心',component:User}}
              isPop={false}
              navigator={this.props.navigator} {...this.state}/>
           <Cache />
          </View>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}
