'use strict';
/**
 * 我的受邀
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
import Button from 'react-native-button';
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
    // 注: Button这要是做不成圆角形式，请告知 会用TouchableHighlight重写
    //    只做出这三个按钮的样式即可
    return (
      <TouchableHighlight style={styles.listblock} underlayColor='#000000' onPress={null}>
        <View style={commonstyle.row}>
          <Image style={styles.listblockimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={commonstyle.col1}>
            <Text style={[commonstyle.cream, commonstyle.fontsize14]}>{'犀利拍立冬至'}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize14]}>{'生命不息,电竞不止~~1231231231'}</Text>
            <View style={styles.listblocktext}>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'战斗力:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
              <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金:  '}</Text>
              <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'12345'}</Text>
            </View>
            <View style={styles.listblocktext}>
              <Button containerStyle={[commonstyle.btnredwhite, styles.listblockbutton]} style={[commonstyle.white, commonstyle.fontsize12]} activeOpacity={0.8}>同意</Button>
              <Button containerStyle={[commonstyle.btngrayblack, styles.listblockbutton]} style={[commonstyle.black, commonstyle.fontsize12]} activeOpacity={0.8}>拒绝</Button>
              <Button containerStyle={[commonstyle.btnborderred, styles.listblockbutton]} style={[commonstyle.red, commonstyle.fontsize12]} activeOpacity={0.8}>已同意</Button>
              <Button containerStyle={[commonstyle.btnbordergray, styles.listblockbutton]} style={[commonstyle.gray, commonstyle.fontsize12]} activeOpacity={0.8}>已拒绝</Button>
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
    return(
      <View style={styles.container}>
        <Header screenTitle='受邀信息' isPop={true} navigator={this.props.navigator}/>
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
          refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
          refreshableWaitingView={this._renderRefreshableWaitingView}

          emptyView={this._renderEmptyView}

          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}

          PullToRefreshViewAndroidProps={{ colors: ['#FFFFFF'], progressBackgroundColor: '#000000'}}
        />
      </View>
    );
  }
}