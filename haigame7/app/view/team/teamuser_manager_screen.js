'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ToastAndroid,
  ListView,
  ScrollView
} from 'react-native';
import Header from '../common/headernav';
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
            navigator: undefined,
             teamName: undefined,
               isUsed: false,
      defaultTeamName: '请输入战队名称',
    defaultUserAvatar: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
        defaultAddPic: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
    }
  }
componentDidMount(){
    this.setState({
      navigator: this.props.navigator,
    });
}
_callback(){
  ToastAndroid.show("回调方法",ToastAndroid.SHORT)
  this.state.navigator.pop()
}

  render() {
    let users = (
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
            <View>
              <Text>用户名称</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>战斗力</Text>
                <Text>123123</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
            <View>
              <Text>用户名称</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>战斗力</Text>
                <Text>123123</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );


    return(
      <View>
      <Header screenTitle='队员管理' isPop={true}  navigator={this.props.navigator}/>
        <View>
              <View>
                  <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
                <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
                <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
                <Image style={{width:40,height:40}} source={{uri:this.state.defaultUserAvatar}} />
              </View>
        </View>
        <View>
          <Text>-----------------这里是分割线-----------------</Text>
        </View>
        {users}
      </View>

    );
  }

}
