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

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';
import Header from '../common/headernav';

const jsonData = '[{"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}]';
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
      <View>
        <View style={[commonstyle.row, styles.teammanagelist]}>
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <Image style={styles.teammanagelistimg} source={{uri:this.state.defaultUserAvatar}} />
              <View style={commonstyle.col1}>
                <Text style={commonstyle.cream}>用户名称</Text>
                <Text style={commonstyle.yellow}>战斗力<Text style={commonstyle.red}>123123</Text></Text>
              </View>
            </View>
          </View>
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <Image style={styles.teammanagelistimg} source={{uri:this.state.defaultUserAvatar}} />
              <View style={commonstyle.col1}>
                <Text style={commonstyle.cream}>用户名称</Text>
                <Text style={commonstyle.yellow}>战斗力<Text style={commonstyle.red}>123123</Text></Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );

    return(
      <View>
        <Header screenTitle='队员管理' isPop={true}  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View style={styles.teammanage}>
            <View style={[commonstyle.row, styles.teammanagelader]}>
              <Image style={styles.teammanageimg} source={{uri:this.state.defaultUserAvatar}} />
            </View>
            <View style={[commonstyle.row, styles.teammanageuser]}>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}><Image style={styles.teammanageimg} source={{uri:this.state.defaultUserAvatar}}/></View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}><Image style={styles.teammanageimg} source={{uri:this.state.defaultUserAvatar}}/></View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}><Image style={styles.teammanageimg} source={{uri:this.state.defaultUserAvatar}}/></View>
              <View style={[commonstyle.col1, commonstyle.viewcenter]}><Image style={styles.teammanageimg} source={{uri:this.state.defaultUserAvatar}}/></View>
            </View>
          </View>
          <View style={styles.teammanageline}></View>
          <ScrollView style={styles.scrollview}>{users}</ScrollView>
        </View>
      </View>
    );
  }
}
