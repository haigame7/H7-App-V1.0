'use strict';
/**
 * 团队排行组件
 * @return {[teamranklist Component]}
 * @author aran.hu
 */

var Icon = require('react-native-vector-icons/FontAwesome');

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

var UserRankList = React.createClass({
  getInitialState() {
    return {
      movie: this.props.movie,

    }
  },
  render: function() {
    //返回团队排行组件
    return(
      <View>
        <TouchableOpacity style={styles.ranklist} activeOpacity={0.8}>
          <Image style={styles.ranklistimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          <View style={styles.ranklistcenter}>
            <Text style={[commonstyle.white, commonstyle.fontsize14]}>{this.state.movie.title}</Text>
            <Text style={[commonstyle.gray, commonstyle.fontsize12, styles.ranklisttext]}>{'生命不息,电竞不止~~1231231231'}</Text>
            <View style={styles.ranklistrow}>
              <Text style={commonstyle.yellow}>{'战斗力:  '}</Text>
              <Text style={commonstyle.red}>{'12345'}</Text>
              <Text style={commonstyle.yellow}>{'  氦金:  '}</Text>
              <Text style={commonstyle.red}>{'12345'}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});
module.exports = UserRankList;
