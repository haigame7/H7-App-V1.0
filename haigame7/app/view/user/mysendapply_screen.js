'use strict';
/**
 * 发出邀请
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
import GlobalSetup from '../../constants/globalsetup';
import Toast from '@remobile/react-native-toast';
export default class extends React.Component {
  constructor() {
    super();
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userData:{},
      teamID:0,
      dataSource: ds.cloneWithRows([]),
      mysendapplyList:[],
      footerMsg: "点击加载更多",
    }
  }
  componentWillMount(){
    this.setState({
      userData:this.props.userData,
      teamID:this.props.teamID,
    });
  }
  componentDidMount(){
     this.initData();
  }
  initData(){
    TeamService.getInvitedUserList({teamID:this.state.teamID,startpage:GlobalVariable.PAGE_INFO.StartPage,pagecount:GlobalVariable.PAGE_INFO.PageCount-2},(response) => {
    if (response !== GlobalSetup.REQUEST_SUCCESS) {
      if(response[0].MessageCode == '40001'){
        Toast.show('服务器请求异常');
      }else if(response[0].MessageCode == '0'){
        let newData = response[1];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newData),
          mysendapplyList:newData,
        });
      }
     }else{
         Toast.show('请求错误');
     }
   });
  }
  renderHeroImageItem(rowData,key){
    return(
      <Image key={key} style={styles.listblocktexthero} source={{uri:rowData.HeroImage}} />
    );
  }
  _renderRow(rowData) {
    var that = this;
    var items =Object.keys(rowData.HeroImage).map(function(item,key) {
      return that.renderHeroImageItem(rowData.HeroImage[item],key);
    });
    return (
      <TouchableHighlight style={styles.listblock} underlayColor='#000000' onPress={null} >
        <View style={commonstyle.row}>
          <Image style={styles.listblockimg} source={{uri:rowData.UserWebPicture}} />
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}>
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{rowData.UserWebNickName}</Text>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止~~1231231231'}</Text>
              </View>
              <View style={[commonstyle.btnredwhite, styles.listblockbtn]}>
                <Text style={[commonstyle.white, commonstyle.fontsize12]}>等待回复</Text>
              </View>
            </View>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{rowData.GamePower}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{rowData.Asset}</Text>
            </View>
            <View style={commonstyle.row}>
              <View style={styles.listblocktextleft}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12]}>擅长英雄</Text>
              </View>
              <View style={styles.listblocktext}>
              {items}
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  _onLoadMore() {
    if (this.state.keykey > 0) {
      this.setState({
        footerMsg: "木有更多多数据了~~~~"
      });
    }else{
      let _ds = this.state.mysendapplyList;
      let _params ={teamID:this.state.teamID,startpage:GlobalVariable.PAGE_INFO.StartPage,pagecount:GlobalVariable.PAGE_INFO.PageCount-2};
      _params.startpage = _params.startpage+1;
      this.setState({
        footerMsg: "正在加载....."
      });
      {/*加载下一页*/}
      TeamService.getInvitedUserList(_params,(response) => {
        if (response[0].MessageCode == '0') {
          let nextData = response[1];
          if(nextData.length<3){
            this.setState({
              keykey:1,
              footerMsg: "木有更多多数据了~~~~"
            });
          }
          for(var item in nextData){
            _ds.push(nextData[item])
          }
        } else {
          console.log('请求错误' + response[0].MessageCode);
        }
      });
      //这等到有api在搞吧
      setTimeout(()=>{
        if(this.state.keykey==0){
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(_ds),
            footerMsg: "点击加载更多",
          });
        }
      },1000);
    }
  }
  _renderFooter() {
    return (
      <TouchableHighlight underlayColor='#000000' style={commonstyle.paginationview} onPress={this._onLoadMore.bind(this)}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <Header screenTitle='发出邀请' isPop={true} navigator={this.props.navigator}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow= {this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        />
      </View>
    );
  }
}
