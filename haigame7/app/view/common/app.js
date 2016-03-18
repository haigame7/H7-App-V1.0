import React, { Component, View, Text, ScrollView,AsyncStorage ,TouchableOpacity} from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

var Headernav = require('./headernav');
var Match  = require('../match.js');
var Fight  = require('../fight.js');
var User  = require('../user.js');
import Team from '../team.js';
import Rank from '../rank.js';
import Login from '../user/login';
import GlobalVariable from '../../constants/globalvariable';
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

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
    this.state = {
      userdata: undefined,
    }
  }
  componentWillMount() {
    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
      if( value == undefined) {
        this.refs.headernav.updateComponent({name:'用户中心',component:Login});
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
    // let toggle = "tab2";
    // setInterval(() => {
    //   console.log(`goto ${toggle}`);
    //   this.refs['myTabbar'].gotoTab(toggle);
    //   toggle = toggle == "tab2"? "tab3" : "tab2";
    // }, 1000);
    //
    //
    //
    // let toggleShow = true;
    // setInterval(() => {
    //   toggleShow = !toggleShow;
    //   this.refs['myTabbar'].getBarRef().show(toggleShow);
    // }, 200);


    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab('tab2');
    // }, 2000);
    //
    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab("tab3");
    // }, 4000);
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
            ref="headernav"
            screenTitle='赛事'
            iconName='user'
            nextComponent={{name:'用户中心',component:User}}
            isPop={false}
            navigator={this.props.navigator} />
           <Match navigator={this.props.navigator}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="约战" >
          <IconWithBar label="约战" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Fight} ontype={glypy.FightOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
           <Headernav
             screenTitle='约战'
             iconName='user'
             nextComponent={{name:'用户中心',component:User}}
             isPop={false}
             navigator={this.props.navigator} />
           <Fight navigator={this.props.navigator}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="排行">
          <IconWithBar label="排行" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Rank} ontype={glypy.RankOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
           <Headernav
             screenTitle='排行'
             iconName='user'
             nextComponent={{name:'用户中心',component:User}}
             isPop={false}
             navigator={this.props.navigator} />
           <Rank navigator={this.props.navigator}/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="组队">
          <IconWithBar label="组队" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Team} ontype={glypy.TeamOn} from={'tabbaricon'}/>
          <RawContent>
          <View>
            <Headernav
              screenTitle='组队'
              iconName='user'
              nextComponent={{name:'用户中心',component:User}}
              isPop={false}
              navigator={this.props.navigator} />
           <Team navigator={this.props.navigator}/>
          </View>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}
