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
import styles from '../../styles/userstyle';
import ShowMsg from './message_show_screen';
import Header from '../common/headernav';
var Swipeout = require('react-native-swipeout');
var Icon = require('react-native-vector-icons/FontAwesome');

var swipeoutBtns = [
  {
    text: '删除',
    backgroundColor: '#D31B25'
  }
]
const jsonData = '[{"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}, {"title" : "标题", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}]';
export default class extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row1','row2']),
      pressTest: 0,
      loaded: false,
      updatePressed: false,
      onpress: this._onItemPress.bind(this),
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
    // fetch(README_URL)
    // .then((response) => response.text())
    // .then((responseText) => {
    //   let f = responseText.match(/\- (.+)/g);
    //   f = f.map((line, idx) => {
		// 			let l = line.replace(/^\s?-\s?/, '') + '\n';
		// 			let a = l.split(/\s?\:\s?/);
		// 			return {
		// 				title: a.shift(),
		// 				desc: a.join(':').split(' ').shift()
		// 			};
		// 		});
    //     f.push({
    //       title: 'google-hosts',
    //       desc: '每天2:00-3:00'
    //     });
    //     var _ds = JSON.parse(JSON.stringify(f));
    //     // console.log(_ds);
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(_ds),
    //       loaded: true
    //     });
    // }).done();

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
        <Header screenTitle='我的信息{33}' isPop={true} navigator={this.props.navigator}/>
        <ListView style={commonstyle.bodyer}
          dataSource={this.state.dataSource}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor="#ff0000"
              title="Loading..."
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"/>
          }
          renderRow= {this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        />
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
      let jsonstr='[{"title" : "标题123123", "content": "内容*****", "time": "2010/01/01","sendP": "naive","isRead": "false"}]'
      let newData = JSON.parse(jsonstr)
      let dd = _ds.push(newData)
      //这等到有api在搞吧
      setTimeout(()=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(_ds),
          loaded: true,
          footerMsg: "点击加载更多",
          keykey: this.state.keykey += 1
        });
      },2000);
    }

  }

  _renderFooter() {
    return(
      <TouchableOpacity style={commonstyle.paginationview} underlayColor='#000000' activeOpacity={0.8} onPress={this._onLoadMore.bind(this)}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{this.state.footerMsg}</Text>
      </TouchableOpacity>
    );
  }
  _renderRow(rowData, sectionID, rowID) {
    return(
      <Swipeout right={swipeoutBtns} close={true}>
        <TouchableOpacity style={[commonstyle.row, styles.msglist]} activeOpacity={0.8} onPress={this.state.onpress} underlayColor="#000000" id={rowID}>
          <View style={styles.msgliststatus}></View>
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}><Text style={commonstyle.yellow}>发件人{rowData.title}{rowData.desc}</Text></View>
              <View style={styles.msglistdata}><Text style={commonstyle.gray}>14:21</Text></View>
            </View>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}><Text style={commonstyle.cream}>标题{rowData.title}</Text></View>
              <View style={styles.msglisticon}><Icon name="angle-right" size={15} color={'#484848'} /></View>
            </View>
            <Text style={[commonstyle.gray, commonstyle.fontsize12]}>内容：{rowData.desc}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }

  _onItemPress(rowData) {
    let _nav = this.props.navigator;
    if (_nav) {
      _nav.push({
        name: 'ShowMsg',
        component: ShowMsg,
        params: {
         rowData: rowData,
       }
      });
    }
  }
}
