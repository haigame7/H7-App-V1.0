'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';
import Header from '../common/headernav';
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
        navigator: undefined,
        isCaptain: true,
  defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
    }
  }
  componentDidMount(){
      this.state = {
        navigator: this.props.navigator,
      }
  }
render() {
  let myHero = (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
      </View>
    </View>
    )
    let removeBtn;
    if (this.state.isCaptain) {
      removeBtn = (
        <View style={{flexDirection: 'row'}}>
          <Button>移出战队</Button>
        </View>
      )
    } else {
      removeBtn = (
        <View style={{flexDirection: 'row'}}>

        </View>
      )
    }
  return(
    <View>
    <Header screenTitle='战队信息' isPop={true} navigator={this.props.navigator}/>
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
            <Text>个性签名：宣言宣言宣言宣言宣言</Text>
          </View>
        </View>
      </View>
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Text>性别</Text><Text>男</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>地区</Text><Text>北京-西城</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>擅长位置</Text><Text>变声凹凸曼</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>注册时间</Text><Text>2019/01/01</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>擅长英雄</Text>
            {myHero}
          </View>
        </ScrollView>
        {removeBtn}
      </View>
    </View>

  );
}

}
