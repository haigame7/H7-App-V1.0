import React, { Component, View, Text, ScrollView } from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

var Header = require('./Header'); // 主屏
var MainScreen = require('./MainScreen'); // 主屏
const glypy = glypyMapMaker({
  Home: 'e900',
  Enshrine: 'e901',
  Message: 'e902',
  Fight: 'e903',
  Favorite: 'e904'
});

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
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
        <Tab name="收藏">
          <IconWithBar label="收藏" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Enshrine} from={'Cochin'}/>
          <RawContent>
          <View>
          <Header initObj={{
          title:'Main',
          backName:'',
         }}   navigator={this.props.navigator}></Header>
         <MainScreen/>
          </View>
          </RawContent>
        </Tab>
        <Tab name="约战" >
          <IconWithBar label="约战" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Fight} from={'Cochin'}/>
          <RawContent >
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('camera')}>Camera</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="消息">
          <IconWithBar label="消息" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Message} from={'Cochin'}/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('stats')}>Stats</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="favorite">
          <IconWithBar label="Fav" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Favorite} from={'Cochin'}/>
          <RawContent>
            <Text onPress={()=>console.log('stats')}>Stats</Text>
          </RawContent>
        </Tab>
        <Tab name="我的">
          <IconWithBar label="我的" onInactiveColor={'white'} onActiveColor={'red'} type={glypy.Home} from={'Cochin'}/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('settings')}>Settings</Text>
            </View>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}
