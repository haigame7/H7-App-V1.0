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
import Header from '../common/headernav';
import GiftedListView from 'react-native-gifted-listview';
import GiftedSpinner from 'react-native-gifted-spinner';

export default class extends React.Component {

  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var header = 'Header '+page;
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
      <TouchableHighlight
        style={customStyles.row}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <Text>{rowData}</Text>
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
          Load more
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
          ~
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
    return(
      <View style={screenStyles.container}>
        <Header screenTitle='我的申请' isPop={true} navigator={this.props.navigator}/>
        <GiftedListView
          rowView={this._renderRowView}

          onFetch={this._onFetch}
          initialListSize={12} // the maximum number of rows displayable without scrolling (height of the listview / height of row)

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
    backgroundColor: '#CCC'
  },
  refreshableView: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsLabel: {
    fontSize: 20,
    color: '#007aff',
  },
  paginationView: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
    height: 44,
  },
  header: {
    backgroundColor: '#50a4ff',
    padding: 10,
  },
  headerTitle: {
    color: '#fff',
  },
};

var screenStyles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  }
};
