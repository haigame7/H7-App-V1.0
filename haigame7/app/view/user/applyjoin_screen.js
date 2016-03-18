'use strict';
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
import Button from 'react-native-button';
import Header from '../common/headernav';
import GiftedListView from 'react-native-gifted-listview';
import GiftedSpinner from 'react-native-gifted-spinner';
import Util from '../common/util';

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      statuText: '等待回复',
    }
  }
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var header = ' 2016 / 03 / 0'+page;
      var rows = {};
      rows[header] = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 5) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }

  _onPress(rowData) {
    console.log(rowData+' pressed');
  }

  _renderRowView(rowData) {
    // 注: Button这要是做不成圆角形式，请告知 会用TouchableHighlight重写
    //    只做出这三个按钮的样式即可
    return (
      <TouchableHighlight
        style={customStyles.row}
        underlayColor='#c8c7cc'
        onPress={null}
      >
      <View style={[screenStyles.ranklist]}>
      <Image style={[screenStyles.rankimage]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
       <View style={[screenStyles.rankcontent]}>
       <Text style={[screenStyles.rankcontenttext,]}>{'生命不息,电竞不止~~1231231231'}</Text>
        <View style={[screenStyles.rankrowtext]}>
        <Text style={[screenStyles.rankcontenttext,{color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
        <Text style={[screenStyles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
        <Text style={[screenStyles.rankcontenttext,{color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
        <Text style={[screenStyles.rankcontenttext,{color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
        </View>
        <View style={{flexDirection: 'row',position: 'relative',top: 20}}>
          <Text style={{color:'rgb(208, 46, 70)'}}>擅长英雄</Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              </View>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
        <Button style={{backgroundColor: "rgb(208, 46, 70)",width:50}}>同意</Button>
        <Button style={{backgroundColor: "#5E5E5E",width:50,position: 'relative',left: 10}}>拒绝</Button>
        <Button style={{backgroundColor: "#5E5E5E",width:60,position: 'relative',left: 20}}>已加入</Button>
        </View>
       </View>
      </View>
      </TouchableHighlight>
    );
  }

  _renderSectionHeaderView(sectionData, sectionID) {
    return (
      <View style={customStyles.header}>
        <Text style={customStyles.headerTitle}>
          {sectionID}
        </Text>
      </View>
    );
  }

  _renderRefreshableWaitingView(refreshCallback) {
    if (Platform.OS !== 'android') {
      return (
        <View style={customStyles.refreshableView}>
          <Text style={customStyles.actionsLabel}>
            ↓
          </Text>
        </View>
      );
    } else {
      return (
        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
          style={customStyles.refreshableView}
        >
          <Text style={customStyles.actionsLabel}>
            ↻
          </Text>
        </TouchableHighlight>
      );
    }
  }


  _renderRefreshableWillRefreshView() {
    return (
      <View style={customStyles.refreshableView}>
        <Text style={customStyles.actionsLabel}>
          ↻
        </Text>
      </View>
    );
  }

  _renderRefreshableFetchingView() {
    return (
      <View style={customStyles.refreshableView}>
        <GiftedSpinner />
      </View>
    );
  }

  _renderPaginationWaitingView(paginateCallback) {
    return (
      <TouchableHighlight
        underlayColor='#c8c7cc'
        onPress={paginateCallback}
        style={customStyles.paginationView}
      >
        <Text style={[customStyles.actionsLabel, {fontSize: 13}]}>
          加载更多
        </Text>
      </TouchableHighlight>
    );
  }

  _renderPaginationFetchigView() {
    return (
      <View style={customStyles.paginationView}>
        <GiftedSpinner />
      </View>
    );
  }

  _renderPaginationAllLoadedView() {
    return (
      <View style={customStyles.paginationView}>
        <Text style={customStyles.actionsLabel}>
          没有更多数据了
        </Text>
      </View>
    );
  }

  _renderEmptyView(refreshCallback) {
    return (
      <View style={customStyles.defaultView}>
        <Text style={customStyles.defaultViewTitle}>
          Sorry, there is no content to display
        </Text>

        <TouchableHighlight
          underlayColor='#c8c7cc'
          onPress={refreshCallback}
        >
          <Text>
            ↻
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  /**
   * Render a separator between rows
   */
  _renderSeparatorView() {
    return (
      <View style={customStyles.separator} />
    );
  }
  render() {
    //优化时候告知下 aran
    return(
      <View style={screenStyles.container}>
        <Header screenTitle='申请加入' isPop={true} navigator={this.props.navigator}/>
        <GiftedListView
          rowView={this._renderRowView}

          onFetch={this._onFetch}
          initialListSize={3} // the maximum number of rows displayable without scrolling (height of the listview / height of row)

          firstLoader={true} // display a loader for the first fetching

          pagination={true} // enable infinite scrolling using touch to load more
          paginationFetchigView={this._renderPaginationFetchigView}
          paginationAllLoadedView={this._renderPaginationAllLoadedView}
          paginationWaitingView={this._renderPaginationWaitingView}

          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          refreshableViewHeight={50} // correct height is mandatory
          refreshableDistance={40} // the distance to trigger the pull-to-refresh - better to have it lower than refreshableViewHeight
          refreshableFetchingView={this._renderRefreshableFetchingView}
          refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
          refreshableWaitingView={this._renderRefreshableWaitingView}

          emptyView={this._renderEmptyView}

          renderSeparator={this._renderSeparatorView}

          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}

          PullToRefreshViewAndroidProps={{
            colors: ['#fff'],
            progressBackgroundColor: '#003e82',
          }}
        />
      </View>
    );
  }
}

var customStyles = {
  separator: {
    height: 1,
    backgroundColor: '#636363'
  },
  refreshableView: {
    height: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsLabel: {
    fontSize: 20,
    color: '#007aff',
  },
  paginationView: {
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  defaultViewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  row: {
    padding: 10,
    height: 130
  },
  header: {
    backgroundColor: '#2E2E2E',
    padding: 2,
  },
  headerTitle: {
    color: '#636363',
  },
};

var screenStyles = {
  container: {
    flex: 1,
    backgroundColor:'rgb(0, 0, 0)',
  },
  navBar: {
    height: 64,
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
  },
  ranklist:{
    height:Util.size.height*13/84,
    flexDirection:'row',
  },
  rankimage:{
    width:80,
    height:80,
    margin:10,
    borderRadius: 40,
  },
  rankcontent:{
    flexDirection:'column',
  },
  rankcontenttext:{
    color:'rgb(150,150,150)',
    top:Util.pixel*40,
    marginBottom:Util.pixel*15,
  },
  rankrowtext:{
    flexDirection:'row',
  },
};
