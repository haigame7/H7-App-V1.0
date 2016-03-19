'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';
import Header from '../common/headernav';
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
            navigator: undefined,
             teamName: undefined,
               isUsed: false,
      defaultTeamName:'请输入战队名称',
      defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
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
    return(
      <View>
      <Header screenTitle='创建战队' isPop={true} iconText='完成' callback={this._callback.bind(this)} navigator={this.props.navigator}/>
        <View>
            <Image style={{width:40,height:40}} source={{uri:this.state.defaultTeamLogo}} />
        </View>
        <View>
          <TextInput
            textAlign={'center'}
            defaultValue={this.state.defaultTeamName}
            onChangeText={(text) => this.setState({teamName: text})}
           />
        </View>
        <View>
          <Text>温馨提示：</Text>
          <Text>您的战队战队创建完成后，将会有一次更改名称及战队LOGO的机会</Text>
        </View>
      </View>

    );
  }

}
