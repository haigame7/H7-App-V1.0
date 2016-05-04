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
  RefreshControl,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Iconfont';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import ShowMsg from './message_show_screen';
import Header from '../common/headernav';
import UserService from '../../network/userservice';
import Toast from '@remobile/react-native-toast';

export default class extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      data: [],
      pressTest: 0,
      loaded: false,
      userData: {},
      listdata:{
        userID: this.props.userData.UserID,
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
  componentWillMount() {
    this.setState({loaded: true})
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    UserService.getUserMessage(this.state.listdata,(response) =>{
      if (response[0].MessageCode == '0') {
        let newData = response[1];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newData),
          data:newData,
          loaded: false,
        });
      } else {
        Toast.show('请求错误' + response[0].Message);
      }
    })
  }
  gotoRoute(params) {
    if (this.props.navigator) {
      this.props.navigator.push({ component: ShowMsg, params:{'messagedata':params}, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      UserService.setMessageRead({'messageID':params.MessageID},(response) =>{
        if (response[0].MessageCode == '0') {
          console.log('设置成功' + response[0].Message);
        
        } else {
          Toast.show('请求错误' + response[0].Message);
        }
      })
    }
  }
  _onRefresh() {
    this.setState({
      isRefreshing: true
    });
    setTimeout(()=>{
      this.setState({
        isRefreshing: false
      });
    },1000);
  }
  _onLoadMore(param,data) {
    if (this.state.keykey > 0) {
      this.setState({
        footerMsg: "木有更多数据了..."
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
              footerMsg: "木有更多数据了...",
            });
          }else{
            for(var item in nextData){
              _ds.push(nextData[item])
            }
            setTimeout(()=>{
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(_ds),
                date:_ds,
                loaded: false,
                footerMsg: "点击加载更多",
              });
            },1000);
          }
        } else {
          Toast.show('请求错误' + response[0].Message);
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
    );
  }
  render() {
    return(
      <View style={styles.container}>
        <Header screenTitle='我的消息' isPop={true} navigator={this.props.navigator}/>
        <ListView style={commonstyle.bodyer}
          dataSource={this.state.dataSource}
          renderRow= {this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        />
        <Spinner visible={this.state.loaded} />
      </View>
    );
  }
}
