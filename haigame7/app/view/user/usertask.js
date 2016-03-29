'use strict';
/**
 * APPs我的赛事
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */

import React, {
    View,
    Text,
    Image,
    StyleSheet,
    Component,
    TouchableOpacity,
    Navigator,
    ScrollView,
    TouchableHighlight,
    } from 'react-native';
var Util = require('../common/util');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navbar: 0,
      data:{
          subnavbar:1,
          subnavbarname:'热度',
      },
      }
    }


rendertaskList(){
    return(
     <View>
     <View style={styles.listview} >

       <TouchableOpacity style={[styles.listviewiconleft,TaskStyles.listviewboxicon]} activeOpacity={0.8}>
        <Icon name="pencil" size={20}  style={[commonstyle.red]}/>
       </TouchableOpacity>

         <Text style={styles.listviewtextleft}>完善资料</Text>
       <Text  style={[styles.listviewtextleft,commonstyle.red,{marginLeft:10}]}>{'+50氦金'}</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} >
       <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </TouchableOpacity>
     </View>
     <View style={styles.listview} >

       <TouchableOpacity style={[styles.listviewiconleft,TaskStyles.listviewboxicon]} activeOpacity={0.8}>
        <Icon name="shield" size={20}  style={[commonstyle.red]}/>
       </TouchableOpacity>

         <Text style={styles.listviewtextleft}>通过认证</Text>
       <Text  style={[styles.listviewtextleft,commonstyle.red,{marginLeft:10}]}>{'+50氦金'}</Text>
          <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} >
       <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </TouchableOpacity>
     </View>
      </View>

    );
  }

render() {
    let tasklist = this.rendertaskList();
  return (
    <View style={TaskStyles.container}>
     <Header screenTitle="我的任务"   navigator={this.props.navigator}></Header>

          <View style={[TaskStyles.centerbg]}>
          {tasklist}
          </View>
        </View>
    );
  }
}
var TaskStyles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },
 listviewboxicon:{
  borderColor:'#D31B25',
  borderWidth:1,
 },
 });
