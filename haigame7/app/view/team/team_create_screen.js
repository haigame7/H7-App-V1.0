'use strict';
/**
 * APP 创建战队
 * @author Drex
 */
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import Header from '../common/headernav';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      imgnull: 0,
      navigator: undefined,
      teamName: undefined,
      isUsed: false,
      defaultTeamName:'请输入战队名称',
      defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
    }
  }
  renderteamimg(){
    if(this.state.imgnull==0){
      return(
        <View>
          <TouchableOpacity style={commonstyle.viewcenter} activeOpacity={0.8}>
            <Text style={[commonstyle.gray, commonstyle.fontsize22]}>+</Text>
            <Text style={commonstyle.gray}>添加战队头像</Text>
          </TouchableOpacity>
        </View>
      );
    }else{
      return(
        <View>
          <TouchableOpacity style={commonstyle.viewcenter} activeOpacity={0.8}>
            <Image style={styles.teamcreateportrait} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          </TouchableOpacity>
        </View>
      );
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
    let teamimg = this.renderteamimg();
    return(
      <View>
        <Header screenTitle='创建战队' isPop={true} iconText='完成' callback={this._callback.bind(this)} navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View style={styles.teamcreate}>
            <View style={styles.teamcreateimg}>{teamimg}</View>
            <View style={[commonstyle.btnborderred, styles.teamcreateinput]}>
              <TextInput placeholder={'请输入战队名称'} placeholderTextColor={'#484848'} style={[commonstyle.cream, styles.teamcreateinputfont]} onChangeText={(text) => this.setState({teamName: text})} />
            </View>
            <View style={commonstyle.viewleft}>
              <Text style={commonstyle.gray}>温馨提示：</Text>
              <Text style={commonstyle.gray}>您的战队战队创建完成后，将会有一次更改名称及战队LOGO的机会</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
