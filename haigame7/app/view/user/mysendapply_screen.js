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
import GiftedListView from 'react-native-gifted-listview';
import GiftedSpinner from 'react-native-gifted-spinner';
import Util from '../common/util';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
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
    return (
      <TouchableHighlight style={styles.listblock} underlayColor='#000000' onPress={null} >
        <View style={commonstyle.row}>
          <Image style={styles.listblockimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={commonstyle.col1}>
            <View style={commonstyle.row}>
              <View style={commonstyle.col1}>
                <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
                <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{'生命不息,电竞不止~~1231231231'}</Text>
              </View>
              <View style={[commonstyle.btnredwhite, styles.listblockbtn]}>
                <Text style={[commonstyle.white, commonstyle.fontsize12]}>等待回复</Text>
              </View>
            </View>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
            </View>
            <View style={commonstyle.row}>
              <View style={styles.listblocktextleft}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12]}>擅长英雄</Text>
              </View>
              <View style={styles.listblocktext}>
                <Image style={styles.listblocktexthero} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.listblocktexthero} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
                <Image style={styles.listblocktexthero} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderSectionHeaderView(sectionData, sectionID) {
    return (
      <View style={commonstyle.refreshviewblock}>
        <Text style={[commonstyle.cream, commonstyle.fontsize14]}>
          {sectionID}
        </Text>
      </View>
    );
  }

  _renderRefreshableWaitingView(refreshCallback) {
    if (Platform.OS !== 'android') {
      return (
        <View style={commonstyle.refreshview}>
          <Text style={[commonstyle.cream, commonstyle.fontsize14]}>
            ↓
          </Text>
        </View>
      );
    } else {
      return (
        <TouchableHighlight underlayColor='#000000' onPress={refreshCallback} style={commonstyle.refreshview}>
          <Text style={[commonstyle.cream, commonstyle.fontsize14]}></Text>
        </TouchableHighlight>
      );
    }
  }


  _renderRefreshableWillRefreshView() {
    return (
      <View style={commonstyle.refreshview}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}></Text>
      </View>
    );
  }

  _renderRefreshableFetchingView() {
    return (
      <View style={commonstyle.refreshview}>
        <GiftedSpinner />
      </View>
    );
  }

  _renderPaginationWaitingView(paginateCallback) {
    return (
      <TouchableHighlight underlayColor='#000000' onPress={paginateCallback} style={commonstyle.paginationview}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>加载更多...</Text>
      </TouchableHighlight>
    );
  }

  _renderPaginationFetchigView() {
    return (
      <View style={commonstyle.paginationview}>
        <GiftedSpinner />
      </View>
    );
  }

  _renderPaginationAllLoadedView() {
    return (
      <View style={commonstyle.paginationview}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>
          ~
        </Text>
      </View>
    );
  }

  _renderEmptyView(refreshCallback) {
    return (
      <View style={commonstyle.defaultview}>
        <Text style={[commonstyle.gray, commonstyle.fontsize14]}>
          没有更多内容了...
        </Text>

        <TouchableHighlight underlayColor='#000000' onPress={refreshCallback} >
          <Text></Text>
        </TouchableHighlight>
      </View>
    );
  }
  render() {
    //注: 优化这的UI时候告知我下，aran
    return(
      <View style={styles.container}>
        <Header screenTitle='发出邀请' isPop={true} navigator={this.props.navigator}/>
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

          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}

          PullToRefreshViewAndroidProps={{colors: ['#FFFFFF'], progressBackgroundColor: '#000000'}}
        />
      </View>
    );
  }
}