'use strict'

import React,
  {
    View,
    Component,
    Text,
    TextArea,
    TextInput,
    Image,
    TouchableOpacity,
    Navigator,
    TouchableHighlight,
    StyleSheet,
    ListView,
    RefreshControl,
    ToastAndroid,
    Alert
  } from 'react-native';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';

import Header from '../common/headernav';
import Icon from 'react-native-vector-icons/Iconfont';
import Recharge from './recharge';
import AssertService from '../../network/assertservice';
import Spinner from 'react-native-loading-spinner-overlay';

export default class extends Component{
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      db: [],
      isRefreshing: false,
      footerMsg: "点击加载更多",
      content: undefined,
      hjData: this.props.hjData,
      userData: this.props.userData,
      isFetchData: true,
      keykey: 0,
      isOpen: true,
    }
  }
    gotoRecharge(name) {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
        this.props.navigator.push({
          name: name,
          component: Recharge,
          params:{
            ...this.props,
          },
          sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
      }
    }
    _onRefresh() {
      this.setState({
        isRefreshing: true
      });
      console.log("下拉刷新");
      setTimeout(()=>{
        this.setState({
          isRefreshing: false
        });
      },1000);
    }
    _onLoadMore() {
      if (this.state.keykey > 3) {
        this.setState({
          footerMsg: "木有更多多数据了~~~~"
        });
      }else{
      }
  }
  componentDidMount() {
    AssertService.fetchAssertList(this.state.userData.PhoneNumber,(response) => {
      console.log(response[0].MessageCode);
      if (response[0].MessageCode == '0') {
        let newData = response[1];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newData),
          db:newData,
          isOpen: false
        });
      } else {
        console.log('请求错误' + response[0].Message);
        this.setState({isOpen: false})
      }
    });
  }
  _renderRow(rowData, sectionID, rowID) {
    return(
      <View style={[commonstyle.row, styles.assetlist]}>
        <View style={commonstyle.col1} >
          <Text style={commonstyle.cream}>{rowData.GainWay}</Text>
        </View>
        <View style={commonstyle.col1}>
          <Text style={commonstyle.red}>{rowData.VirtualMoney}</Text>
        </View>
        <View style={[commonstyle.col1, commonstyle.viewright]}>
          <Text style={commonstyle.gray}>{rowData.GainTime}</Text>
        </View>
      </View>
    );
  }
  render(){
    return (
      <View>
        <Header screenTitle='我的资产' isPop={true}  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <Image source = {require('../../images/assetbg.jpg')} style={styles.assetbg} resizeMode = {"cover"}>
          <View style={[commonstyle.row, styles.assetblock]}>
            <View style={[commonstyle.col1, styles.assetlabel]}>
              <View style={commonstyle.row}>
                <Icon name="money" size={25} color={'#D31B25'} style={commonstyle.iconnobg}/>
                <Text style={[commonstyle.red, commonstyle.fontsize12, styles.assettext]}>总金额</Text>
              </View>
              <Text style={[commonstyle.yellow, commonstyle.fontsize22]}>{this.state.hjData.totalAsset}</Text>
            </View>

            <View style={styles.headtabline}></View>

            <TouchableOpacity style={[commonstyle.col1, styles.assetlabel]}>
              <View style={commonstyle.row}>
                <Icon name="ranking" size={25} color={'#D31B25'} style={commonstyle.iconnobg}/>
                <Text style={[commonstyle.red, commonstyle.fontsize12, styles.assettext]}>财富排行</Text>
              </View>
              <Text style={[commonstyle.yellow, commonstyle.fontsize22]}>{this.state.hjData.myRank}</Text>
            </TouchableOpacity>
          </View>

          <TouchableHighlight style={[styles.btn, commonstyle.btnwhitered]} underlayColor={'#FFFFFF'} onPress={() => this.gotoRecharge('recharge')}>
            <Text style={commonstyle.red} >{'氦金充值'}</Text>
          </TouchableHighlight>
          </Image>

          <View style={styles.assetlistblock}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow= {this._renderRow.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}
