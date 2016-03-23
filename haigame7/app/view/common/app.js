import React, { Component, View, Text, ScrollView,AsyncStorage ,TouchableOpacity} from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

var Headernav = require('./headernav');
var Match  = require('../match.js');

var User  = require('../user.js');
import Team from '../team.js';
import Rank from '../rank.js';
import Fight from '../fight.js';
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
let userdata = {
  'PhoneNumber': '15101075739',
  'UserWebNickName': 'UserWebNickName',
  'UserWebPicture': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==',
  'Sex': '男',
  'Address': 'Address',
  'Birthday': 'Birthday',
  'Hobby': '文能提笔安天下武能上马定乾坤！'
}
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
    this.state = {
               userdata: userdata,
               updateUserData: this.updateUserData.bind(this)
    }
  }
  componentWillMount() {
    AsyncStorage.getItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
      if( value != undefined) {
        this.refs.header_match.updateComponent({name:'登陆1',component:Login});
        this.refs.header_fight.updateComponent({name:'登陆2',component:Login});
        this.refs.header_rank.updateComponent({name:'登陆3',component:Login});
        this.refs.header_team.updateComponent({name:'登陆4',component:Login});
      } else {
        userdata = value;
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

  updateUserData(userdata) {
    this.setState({
      userdata: userdata
    })
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
      </Tabbar>
    );
  }
}
