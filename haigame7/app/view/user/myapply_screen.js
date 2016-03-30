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
import GlobalVariable from '../../constants/globalvariable';
import GlobalSetup from '../../constants/globalsetup'
export default class extends React.Component {

  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userData:{},
      dataSource: ds.cloneWithRows(['row1','row2','row3']),
      myapplyList:[],
      statuText: '等待回复',
    }
  }
 componentWillMount(){
   this.setState({
     userData:this.props.userData,
   });

 }
 componentDidMount(){
    this.initData();
 }

 initData(){
   console.log(this.state.userData.UserID);
   TeamService.myApplyTeamList({userID:this.state.userData.UserID,startpage:GlobalVariable.PAGE_INFO.StartPage,pagecount:GlobalVariable.PAGE_INFO.PageCount-4},(response) => {
   if (response !== GlobalSetup.REQUEST_SUCCESS) {
     if(response[0].MessageCode == '40001'){
       Toast.show('服务器请求异常');
     }else if(response[0].MessageCode == '0'){
       console.log(response);
       let newData = response[1];
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         myapplyList:newData,
       });
     }
    }else{
        Toast.show('请求错误');
    }
  });
 }
  _onPress(rowData) {
    console.log(rowData+' pressed');
  }
  parseSendState(state){
   let result = '';
    
  }
  _renderRow(rowData) {
     let state = this.parseSendState(rowData.State);
    return (
      <TouchableHighlight style={styles.listblock} underlayColor='#000000' onPress={null} >
        <View style={commonstyle.row}>
          <Image style={styles.listblockimg} source={{uri:rowData.TeamLogo}} />
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}>
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.TeamName}</Text>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{rowData.TeamDescription}</Text>
              </View>
              <View style={[commonstyle.btnbordergray, styles.listblockbtn]}>
                <Text style={commonstyle.gray}>等待回复</Text>
              </View>
            </View>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{rowData.FightScore}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{rowData.Asset}</Text>
            </View>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{rowData.SendTime}</Text>
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
