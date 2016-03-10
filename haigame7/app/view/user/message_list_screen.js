'use strict';
 
const React = require('react-native');
const {
  AppRegistry,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  View,
} = React;
 
const styles = StyleSheet.create({
  row: {
    borderColor: 'red',
    borderWidth: 5,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  scrollview: {
    flex: 1,
  },
});
 
const Row = React.createClass({
  _onClick: function() {
    this.props.onClick(this.props.data);
  },
  render: function() {
    return (
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text}
          </Text>
        </View>
    );
  },
});
 
const RefreshControlDemo = React.createClass({
  getInitialState() {
    return {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: '初始行 ' + i})),
    };
  },
  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return <Row key={ii} data={row}/>;
    });
    return (
      <ScrollView
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
            progressBackgroundColor="#ffffff"
          />
        }>
        {rows}
      </ScrollView>
    );
  },
  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // 准备下拉刷新的5条数据
      const rowData = Array.from(new Array(5))
      .map((val, i) => ({
        text: '刷新行 ' + (+this.state.loaded + i)
      }))
      .concat(this.state.rowData);
 
      this.setState({
        loaded: this.state.loaded + 5,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
  },
});
 module.exports = RefreshControlDemo;
// AppRegistry.registerComponent('RefreshControlDemo', () => RefreshControlDemo);
