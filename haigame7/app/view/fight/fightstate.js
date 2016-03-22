'use strict';
import React, {
  ScrollView,
  StyleSheet,
  View,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  RefreshControl
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/fightstyle';
import Header from '../common/headernav';
var Swipeout = require('react-native-swipeout');
var Icon = require('react-native-vector-icons/FontAwesome');

// Buttons
var swipeoutBtns = [
  {
    text: '删除',
    backgroundColor: '#D31B25'
  }
]
const jsonData = '[{"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"}, {"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"},{"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"},{"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"}, {"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"},{"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"}]';
export default class extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      pressTest: 0,
      loaded: false,
      updatePressed: false,
      onpress: undefined,
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
    // let _ds = JSON.parse(JSON.stringify(['hu','haoran']));
    let _ds = JSON.parse(jsonData);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(_ds),
      loaded: true
    });
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
        <Header screenTitle='约战动态'  navigator={this.props.navigator}/>
        <View style={commonstyle.bodyer}>
          <ListView
            dataSource={this.state.dataSource}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh.bind(this)}
                tintColor="#ff0000"
                title="Loading..."
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
            }
            renderRow= {this._renderRow.bind(this)}
            renderFooter={this._renderFooter.bind(this)}
          />
        </View>
      </View>
    );
  }
  _onLoadMore() {
    if (this.state.keykey > 3) {
      this.setState({
        footerMsg: "木有更多多数据了~~~~"
      });
    }else{
      let _ds = JSON.parse(jsonData);
      this.setState({
        footerMsg: "正在加载....."
      });
      let jsonstr='[{"title" : "[犀利拍立冬至]", "content": "[神马神马132]", "time": "2010/01/01","money":"100","sendP": "naive","isRead": "false"}]'
      let newData = JSON.parse(jsonstr)
      for(var item in newData){
        _ds.push(newData[item])
      }
      //这等到有api在搞吧
      setTimeout(()=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(_ds),
          loaded: true,
          footerMsg: "点击加载更多",
          keykey: this.state.keykey += 1
        });
      },1000);
    }

  }

  _renderFooter() {
    return(
      <TouchableHighlight underlayColor='#000000' style={commonstyle.paginationview} onPress={this._onLoadMore.bind(this)}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
      </TouchableHighlight>
    );
  }
  _renderRow(rowData, sectionID, rowID) {
    return(
      <Swipeout right={swipeoutBtns} close={true}>
        <TouchableOpacity style={styles.textlist} activeOpacity={0.8} underlayColor="#000000" id={rowID}>
          <Text style={commonstyle.cream}>{'战队  '}<Text style={commonstyle.red}>{rowData.title}</Text>{'  向战队  '}<Text style={commonstyle.yellow}>{rowData.content}</Text>{'  发出约战'}</Text>
          <View style={styles.userlistteambox}>
            <Icon name='times-circle-o' size={13} style={styles.textlisticon} color={'#484848'} />
            <Text style={[commonstyle.gray, styles.textlistfont]}>{rowData.time}</Text>
            <Icon name='money' size={13} style={styles.textlisticon} color={'#484848'} />
            <Text style={commonstyle.gray}>{rowData.money}{'氦金'}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}