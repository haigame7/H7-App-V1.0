'use strict'

var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
import React,{
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
  ToastAndroid
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import Recharge from './recharge';
import AssertService from '../../network/assertservice';
import Spinner from 'react-native-loading-spinner-overlay';
// const jsonData = '[{"assertType" : "收入123", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"}, {"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"}, {"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入1", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"}]';
  const jsonData = '[{}]'
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
        totalAsset: 8888,
        myRank: 8888,
        phoneNum: this.props.phoneNum?this.props.phoneNum : '15101075739' ,
        isFetchData: true,
        keykey: 0,
        isOpen: true,
      }
    }

    componentWillMount() {

    }
    componentDidMount() {
      AssertService.getTotalAssertAndRank(this.state.phoneNum,(response) => {
        console.log(response);
      //   if (response[0].MessageCode == '0') {
      //     this.setState({
      //       myRank: response[1].MyRank,
      //   totalAsset: response[1].TotalAsset,
      //   isOpen: false
      //     });
      //   } else {
      //     this.setState({isOpen: false})
      //     console.log('请求错误' + response[0].MessageCide);
      //   }
      });

      AssertService.fetchAssertList(this.state.phoneNum,(response) => {
        console.log(response);

        // if (response.MessageCode == '0' || response[0].MessageCode == '0') {
        // this.setState({isOpen: false})
        // } else {
        //   this.setState({isOpen: false})
        //   console.log('请求错误');
        // }
      });
    }
    getData() {
      // let _ds = JSON.parse(JSON.stringify(['hu','haoran']));

      // let _ds = JSON.parse(jsonData);
      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithRows(_ds),
      //   loaded: true
      // });
    }

    gotoRecharge(name) {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
        this.props.navigator.push({name: name,component: Recharge,params:{data:this.state.data},sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
      }
      return;
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
      console.log('8888888888');
      if (this.state.keykey > 3) {
        this.setState({
          footerMsg: "木有更多多数据了~~~~"
        });
      }else{
        this.setState({
          footerMsg: "正在加载....."
        });
        let jsonstr='[{"GainWay": "氦金充值", "VirtualMoney": "+200","GainTime": "2010/01/01"}]';
        let newData = JSON.parse(jsonstr)
        let data = this.state.db.concat(newData)
        //这等到有api在搞吧
        setTimeout(()=>{
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loaded: true,
            footerMsg: "点击加载更多",
            keykey: this.state.keykey += 1,
            db: data
          });
        },2000);
      }
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
    _renderFooter() {
      return(
        <TouchableOpacity style={commonstyle.defaultview} onPress={this._onLoadMore.bind(this)}>
          <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
        </TouchableOpacity>
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
                  <Icon name="upload" size={25} color={'#D31B25'}/>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>总金额</Text>
                </View>
                <Text style={[commonstyle.yellow, commonstyle.fontsize22]}>{this.state.totalAsset}</Text>
              </View>

              <View style={styles.headtabline}></View>

              <TouchableOpacity style={[commonstyle.col1, styles.assetlabel]}>
                <View style={commonstyle.row}>
                  <Icon name="upload" size={25} color={'#D31B25'}/>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>财富排行</Text>
                </View>
                <Text style={[commonstyle.yellow, commonstyle.fontsize22]}>{this.state.myRank}</Text>
              </TouchableOpacity>
            </View>

            <TouchableHighlight style={[styles.btn, commonstyle.btnwhitered]} underlayColor={'#FFFFFF'} onPress={() => this.gotoRecharge('recharge')}>
              <Text style={commonstyle.red} >{'氦金充值'}</Text>
            </TouchableHighlight>
            </Image>

            <View style={styles.assetlistblock}>
              <ListView
                dataSource={this.state.dataSource}
                // refreshControl={
                //     <RefreshControl
                //       refreshing={this.state.isRefreshing}
                //       onRefresh={this._onRefresh.bind(this)}
                //       tintColor="#ff0000"
                //       title="Loading..."
                //       colors={['#ff0000', '#00ff00', '#0000ff']}
                //       progressBackgroundColor="#ffff00"
                //     />
                //   }
                renderRow= {this._renderRow.bind(this)}
                renderFooter={this._renderFooter.bind(this)}
              />
            </View>
          </View>
        </View>
      );
    }
  }