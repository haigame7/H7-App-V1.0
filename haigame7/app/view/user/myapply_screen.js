'use strict';
/**
 * 我的申请
 *
 * @return {[Team Component]}
 * @author Drex
 */
import React, {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Header from '../common/headernav';
import Util from '../common/util';
import TeamService from '../../network/teamservice';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
export default class extends React.Component {

  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userData:this.props.userData,
      dataSource: ds.cloneWithRows(['row1','row2','row3']),
      myapplyList:[],
      statuText: '等待回复',
    }
  }


  _onPress(rowData) {
    console.log(rowData+' pressed');
  }

  _renderRow(rowData) {
    return (
      <TouchableHighlight style={styles.listblock} underlayColor='#000000' onPress={null} >
        <View style={commonstyle.row}>
          <Image style={styles.listblockimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}>
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止~~1231231231'}</Text>
              </View>
              <View style={[commonstyle.btnbordergray, styles.listblockbtn]}>
                <Text style={commonstyle.gray}>等待回复</Text>
              </View>
            </View>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
            </View>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'2015-01-01 21:32:12'}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }




  _renderFooter() {
    return (
      <TouchableHighlight underlayColor='#000000'  style={commonstyle.paginationview}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>加载更多...</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <Header screenTitle='我的申请' isPop={true} navigator={this.props.navigator}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow= {this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        />
      </View>
    );
  }
}
