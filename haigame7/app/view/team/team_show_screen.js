'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  ToastAndroid
} from 'react-native';
import Button from 'react-native-button';
import Header from '../common/headernav';
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
        navigator: undefined,
        isCaptain: true,
         iconText: '创建战队',
  defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
    }
  }
  componentDidMount(){
      this.setState({
        navigator: this.props.navigator,
        isCaptain: true,
      });
      //暂时不好使
      if (!this.state.isCaptain) {
        this.setState({
          iconText: undefined,
        });
      }

  }

_callback() {
  ToastAndroid.show("回调方法",ToastAndroid.SHORT)
  this.state.navigator.pop()
}
render() {
  let teamUser = (
    <View>
      <View>
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
      </View>
    </View>
    )
    let btn;
    if (this.state.isCaptain) {
      btn = (
        <View style={{flexDirection: 'row'}}>
          <Button>招募队员</Button>
          <Button style={{position: 'relative',left: 10}}>解散战队</Button>
        </View>
      )
    } else {
      btn = (
        <View style={{flexDirection: 'row'}}>

        </View>
      )
    }
  return(
    <View>
    <Header screenTitle='战队信息' isPop={true} iconText={this.state.iconText} callback={this._callback.bind(this)} navigator={this.props.navigator}/>
      <View>
        <View>
          <Image style={{width:40,height:40}} source={{uri:this.state.defaultTeamLogo}} />
          <Text>KICK ASS 战队</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text>战斗力</Text><Text>1300</Text><Text>氦金</Text><Text>1000</Text>
          </View>
          <View>
            <Text>战队宣言：宣言宣言宣言宣言宣言</Text>
          </View>
        </View>
      </View>
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Text>战队战绩</Text><Text>参赛场次 <Text>20场</Text> 胜率 <Text>20场</Text></Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>成立日期</Text><Text>2016/02/15</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>招募信息</Text><Text>本队需要萌妹子本队需要萌妹子本队需要萌妹子本队需要萌妹子本队需要萌妹子</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>战队成员</Text>
            {teamUser}
          </View>
        </ScrollView>
        {btn}
      </View>
    </View>

  );
}

}
