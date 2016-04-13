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

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      navigator: undefined,
      teamData: {},
      isUsed: false,
    }
  }
  componentDidMount(){
      this.setState({
        navigator: this.props.navigator,
        teamData:this.props.teamData
      });
  }
  _callback(){
    ToastAndroid.show("回调方法",ToastAndroid.SHORT)
    this.state.navigator.pop()
  }
  renderHeroImageItem(groups){
    var items = Object.keys(groups).map(function(item,key) {
    if(item<4){
      return(
        <View key={key} style={[commonstyle.col1, commonstyle.viewcenter]}>
        <Image style={styles.teammanageimg} source={{uri:groups[item].UserPicture}} />
        </View>
      );
     }
    });
    return(
      <View style={[commonstyle.row, styles.teammanageuser]}>{items}</View>
    );
  }
  renderTeamUserDetail(groups){
    var items = Object.keys(groups).map(function(item,key) {
    if(item>4){
      return(
        <View key={key} style={commonstyle.col1}>
          <View style={commonstyle.row}>
            <Image style={styles.teammanagelistimg} source={{uri:groups[item].UserPicture}} />
            <View style={commonstyle.col1}>
              <Text style={commonstyle.cream}>用户名称</Text>
              <Text style={commonstyle.yellow}>战斗力<Text style={commonstyle.red}>123123</Text></Text>
            </View>
          </View>
        </View>
      );
     }
    });
    return(
        <View style={[commonstyle.row, styles.teammanagelist]}>
        {items}
        </View>
    );
  }
  render() {
    let users = this.renderTeamUserDetail(this.props.teamData.TeamUserPicture);
    var items =this.renderHeroImageItem(this.props.teamData.TeamUserPicture);
    return(
      <View>
        <Header screenTitle='队员管理' isPop={true}  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <View style={styles.teammanage}>
            <View style={[commonstyle.row, styles.teammanagelader]}>
              <Image style={styles.teammanageimg} source={{uri:this.state.teamData.CreaterPicture}} />
            </View>
           {items}
          </View>
          <View style={styles.teammanageline}></View>
          <ScrollView style={styles.scrollview}>{users}</ScrollView>
        </View>
      </View>
    );
  }
}
