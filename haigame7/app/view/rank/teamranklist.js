'use strict';
/**
 * 团队排行组件
 * @return {[teamranklist Component]}
 * @author aran.hu
 */

var Icon = require('react-native-vector-icons/Iconfont');

import React, {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Component,
    TouchableOpacity,
    TouchableHighlight,
    } from 'react-native';

//引用样式文件
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/rankstyle';

var TeamRankList = React.createClass({
  getInitialState() {
    return {
      team: this.props.team,
    }
  },
  render: function() {
    //返回团队排行组件
    return(
      <View>
        <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
          <Image style={styles.ranklistimg} source={{uri:this.props.team.TeamPicture}} />
          <View style={styles.ranklistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{this.props.team.TeamName}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{this.props.team.TeamDescription}</Text>
            <View style={styles.ranklistrow}>
              <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
              <Text style={commonstyle.red}>{this.props.team.FightScore}</Text>
              <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
              <Text style={commonstyle.red}>{this.props.team.Asset}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});
module.exports = TeamRankList;
