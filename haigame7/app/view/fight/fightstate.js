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

import styles from '../../styles/msg_list_style';
import Header from '../common/headernav';
var Swipeout = require('react-native-swipeout');
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('../common/util');
//https://gist.github.com/iahu/0e524f4612a8925f2f9c
//http://bbs.reactnative.cn/topic/52/listview-datasource-clonewithrows-%E7%9A%84%E5%8F%82%E6%95%B0%E9%97%AE%E9%A2%98/2

var README_URL = 'https://coding.net/u/levi/p/imouto-host/git/raw/master/README.md';
var MAP = {'Acrylated':'AcrylicHosts','Hosts-ä': 'Hosts-a'};
var BASE_URL = 'https://coding.net/u/levi/p/imouto-host/git/raw/master/';
var GOOGLE_HOSTS_URL = 'https://raw.githubusercontent.com/txthinking/google-hosts/master/hosts';
// Buttons
var swipeoutBtns = [
  {
    text: '删除',
    backgroundColor: '#f61d4b'
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
	      <View style={FightStateStyle.loading}>
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
      <View style={FightStateStyle.container}>
        <Header screenTitle='约战动态'  navigator={this.props.navigator}/>
          <View style={[FightStateStyle.centerbg]}>
          <ListView
    					style={FightStateStyle.listGroup}
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
      <View>
        <TouchableOpacity
          onPress={this._onLoadMore.bind(this)}
          >
          <View style={{alignSelf: 'center'}}>
            <Text style={[FightStateStyle.itemTitle,{marginTop:10}]}>
              {this.state.footerMsg}
            </Text></View>
        </TouchableOpacity>
      </View>
    );
  }
  _renderRow(rowData, sectionID, rowID) {
    return(
      <Swipeout right={swipeoutBtns} close={true}>
        <TouchableOpacity  underlayColor="#06f">
        <View style={[FightStateStyle.listItem,{backgroundColor:'#000'}]} id={rowID}>
    				<View style={FightStateStyle.itemContent}>
    				<Text style={FightStateStyle.itemTitle}>{'战队  '}<Text style={{color:rgb(208, 46, 70)}}>{rowData.title}</Text>{'  向战队  '}<Text style={{color:rgb(230, 193, 39)}}>{rowData.content}</Text>{'  发出约战'}</Text>
           <View style={{flexDirection:'row'}}>
           <Icon name='times-circle-o' size={13} style={{color:'rgb(55, 110, 161)',}} />
	          <Text style={[FightStateStyle.itemTitle,{fontSize:12,marginLeft:Util.pixel*10}]}>{rowData.time}</Text>

           <Icon name='money' size={13} style={{color:'rgb(55, 110, 161)',marginLeft:Util.pixel*20}} />
           <Text style={[FightStateStyle.itemTitle,{fontSize:12,marginLeft:Util.pixel*10}]}>{rowData.money}{'氦金'}</Text>
           </View>
          </View>
	    	</View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}
var FightStateStyle = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },
  loading: {
   height: 36,
   flex: 1,
   alignItems: 'center',
   alignSelf: 'stretch',
   justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20
  },
  lightGrayText: {
   color: '#666'
  },
  buttonSmall: {
   borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3385ff',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 9,
    paddingRight: 9,
    marginRight: 6
  },
  buttonSmallText: {
   fontSize: 12,
    color: '#3385ff'
  },
  listTitle: {
   paddingLeft: 6,
   marginBottom: 10
  },
  listGroup: {

  },
  listItem: {
   flex: 1,
   flexDirection: 'row',
   paddingLeft: 6,
   paddingRight: 6,
   paddingTop: 10,
   paddingBottom: 10,
   borderWidth: 1,
   borderColor: '#ddd',
   marginTop: -1,
   backgroundColor: '#fff'
  },
  itemContent: {
   flex: 1,
   paddingLeft: 10
  },
  itemTitle: {
   fontSize: 14,
   marginBottom: 6,
   color:'rgb(150,150,150)',
  },
  itemDesc: {
   fontSize: 12,
   color: '#333'
  },
  separator: {
   height: 1,
   backgroundColor: '#eee'
  },
  updatePressed: {
   backgroundColor: '#eee',
   borderColor: '#eee'
  }
});
