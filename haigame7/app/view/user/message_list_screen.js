'use strict';
import React, {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ListView,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  RefreshControl
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import ShowMsg from './message_show_screen';
import Header from '../common/headernav';
import Swipeout from 'react-native-swipeout';
import UserService from '../../network/userservice';
import Icon from 'react-native-vector-icons/Iconfont';

var swipeoutBtns = [
  {
    text: '删除',
    backgroundColor: '#D31B25'
  }
]
export default class extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      data: [],
      pressTest: 0,
      loaded: false,
      listdata:{
        userID: 62,
        startpage: 1,
        pagecount: 5,
      },
      updatePressed: false,
      isRefreshing: false,
      dataCount:0,
      keykey:0,
      footerMsg: "点击加载更多"
    }
  }
  componentDidMount() {
    // this.makeData();
    this.getData();

  }

  getData() {
    UserService.getUserMessage(this.state.listdata,(response) =>{
      if (response[0].MessageCode == '0') {
        let newData = response[1];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newData),
          data:newData,
          loaded: true,
        });
      } else {
        console.log('请求错误' + response[0].Message);
      }
    })
  }
  gotoRoute(params) {
    if (this.props.navigator) {
      this.props.navigator.push({ component: ShowMsg, params:{'messagedata':params}, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
    }
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    return this.renderList();
  }

  renderLoadingView() {
    return (
      <View style={commonstyle.loading}>
        <Text>
          Loading ...
        </Text>
      </View>
    );
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
  renderList() {
    return(
      <View style={styles.container}>
        <Header screenTitle='我的消息' isPop={true} navigator={this.props.navigator}/>
        <ListView style={commonstyle.bodyer}
          dataSource={this.state.dataSource}
          renderRow= {this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        />
      </View>
    );
  }
  _onLoadMore(param,data) {
    if (this.state.keykey > 0) {
      this.setState({
        footerMsg: "木有更多数据了~~~~"
      });
    }else{
      let _ds = data;
      let _params = param;
      _params.startpage = _params.startpage+1;
      this.setState({
        footerMsg: "正在加载.....",
      });
      UserService.getUserMessage(_params,(response) => {
        if (response[0].MessageCode == '0') {
          let nextData = response[1];
          if(nextData.length<1){
            this.setState({
              keykey:1,
              footerMsg: "木有更多数据了~~~~",
            });
          }else{
            for(var item in nextData){
              _ds.push(nextData[item])
            }
            setTimeout(()=>{
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(_ds),
                date:_ds,
                loaded: true,
                footerMsg: "点击加载更多",
              });
            },1000);
          }
        } else {
          console.log('请求错误' + response[0].MessageCode);
        }
      });
    }
  }

  _renderFooter() {
    return(
      <TouchableOpacity style={commonstyle.paginationview} underlayColor='#000000' activeOpacity={0.8} onPress={this._onLoadMore.bind(this,this.state.listdata,this.state.data)}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
      </TouchableOpacity>
    );
  }
  _renderRow(rowData, sectionID, rowID) {
    let point = 0;
    if(rowData.State == '未读'){
      point = 1;
    }
    return(
      <Swipeout right={swipeoutBtns} close={true}>
        <TouchableOpacity style={[commonstyle.row, styles.msglist]} activeOpacity={0.8} onPress={()=>this.gotoRoute(rowData)} underlayColor="#000000" id={rowID}>
          <View style={point == 1 ? styles.msgliststatus : styles.msgliststatusno}></View>
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}><Text style={commonstyle.yellow}>发件人: </Text></View>
              <View style={styles.msglistdata}><Text style={[commonstyle.gray, commonstyle.fontsize12]}>{rowData.Time}</Text></View>
            </View>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}><Text style={commonstyle.cream}>{rowData.Title}</Text></View>
              <View style={styles.msglisticon}><Icon name="angle-right" size={15} color={'#484848'} /></View>
            </View>
            <Text style={[commonstyle.gray, commonstyle.fontsize12]}>内容：{rowData.Content}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}
