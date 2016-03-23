'use strict';
/**
 * 排行
 * @return {[rank Component]}
 * @author aran.hu
 */
var Util = require('./common/util');
var Icon = require('react-native-vector-icons/FontAwesome');

import React, {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Component,
    ListView,
    TouchableOpacity,
    TouchableHighlight,
    } from 'react-native';

//引用样式文件
import commonstyle from '../styles/commonstyle';
import styles from '../styles/rankstyle';
//引用个人排行组件
import UserRankList from './rank/userranklist';
//引用团队排行组件
import TeamRankList from './rank/teamranklist';

var NAVBAR_DATA={first:"荣耀团队",second:"名人堂"};
var NAVSUBBAR_TEAM={first:"热度",second:"战斗力",third:"氦金"};
var NAVSUBBAR_USER={first:"大神系数",second:"战斗力",third:"氦金"};
//思路：1.分出两个组件：个人排行和团队排行
//2.
var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 2;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navbar: 0,
      data:{subnavbar:1,},
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      }
    }

    componentDidMount() {
        this.fetchData();
      }

    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true,
          });
        })
        .done();
    }

  _switchNavbar(nav){
    this.setState({
      navbar:nav,
      data:{subnavbar:1},
    });
  }

  _switchSubNavbar(sub){
    this.setState({
      data:{subnavbar:sub},
    });
  }

  renderSubData(){
    if(this.state.navbar==0){
      //返回团队排行分类
      return(NAVSUBBAR_TEAM);
    }
    else{
      //返回个人排行分类
      return(NAVSUBBAR_USER);
    }
  }

  renderRankList(){
    if(this.state.navbar==0){
      //返回团队组件
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTeamRankList}
      />
    }
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderUserRankList}
      />
    );

  }

  renderUserRankList(user){
      //返回个人组件
      return(<UserRankList movie={user}/>);
  }

  renderTeamRankList(team){
      //返回团队组件
      return(<TeamRankList movie={team}/>);
  }

  render() {
    let ranklist = this.renderRankList();
    let navdata=NAVBAR_DATA;
    let navsubdata=this.renderSubData();
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.navtab}>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtnactive:styles.navbtn} activeOpacity={0.8}  onPress = {() => this._switchNavbar(0)} >
              <Text style={this.state.navbar==0?commonstyle.red:commonstyle.white}>{navdata.first}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={this.state.navbar==0?styles.navbtn:styles.navbtnactive} activeOpacity={0.8}  onPress = {() => this._switchNavbar(1)}>
              <Text style={this.state.navbar==0?commonstyle.white:commonstyle.red}>{navdata.second}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navsub}>
            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8}  onPress = {() => this._switchSubNavbar(1)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{navsubdata.first}</Text>
              <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==1?commonstyle.red:commonstyle.gray}/>
            </TouchableOpacity>

            <View style={styles.navsubline}></View>

            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress = {() => this._switchSubNavbar(2)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{navsubdata.second}</Text>
              <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==2?commonstyle.red:commonstyle.gray}/>
            </TouchableOpacity>

            <View style={styles.navsubline}></View>

            <TouchableOpacity style={styles.navsubblock} activeOpacity={0.8} onPress = {() => this._switchSubNavbar(3)}>
              <Text style={[commonstyle.gray, commonstyle.fontsize12]}>{navsubdata.third}</Text>
              <Icon name="angle-down" size={10}  style={this.state.data.subnavbar==3?commonstyle.red:commonstyle.gray}/>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollview}>
        {ranklist}
        </ScrollView>
      </View>
    );
  }
}
