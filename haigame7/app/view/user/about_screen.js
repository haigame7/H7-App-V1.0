'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  Image,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import Header from '../common/headernav'; //导航有问题
var Icon = require('react-native-vector-icons/Iconfont');
export default class extends React.Component {
  constructor(props){
    super(props);

  }

  _help() {
    ToastAndroid.show('帮助反馈',ToastAndroid.SHORT);
  }
  _update() {
    ToastAndroid.show('检查版本更新',ToastAndroid.SHORT);
  }
  _website() {
    ToastAndroid.show('访问官网',ToastAndroid.SHORT);
  }
  _userAgreement() {
    ToastAndroid.show('用户协议',ToastAndroid.SHORT);
  }

  render() {
    return(
      <View >
        <Header screenTitle='关于H7'  navigator={this.props.navigator}/>
        <Image source={require('../../images/loginbg.jpg')} style={styles.loginbg} resizeMode={"cover"} >
          <ScrollView style={[commonstyle.bodyer, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}>
            <View activeOpacity = {1} style = {styles.logo}>
              <Image style = {{width: 80, height: 80, }} source = { require('../../images/logo.png') }/>
            </View>
            <View style={styles.abouttext}>
              <Text style={commonstyle.cream}>        今大可乐手机初期作为小众手机，圈了一批忠实用户。在2014年12月9日进行的京东众筹中，更是以25分钟1650万的金额刷新国内众筹的最高金额纪录和最快速度纪录。</Text>
              <Text style={commonstyle.cream}>        众筹会的一个亮点是“免费”模式，大可乐采用了“一次众筹 终身免费换新”的方式，开创了行业首个免费模式：一万名参与众筹的用户，将实现每年一次免费换新机，并参与大可乐今后每款旗舰产品的打造，可谓一“筹”成名。借力京东金融众筹的平台，和“免费”换机的噱头，大可乐手机成功吸引了大批消费者的关注。不过此次众筹看起来更像是一次手机的预售营销活动。</Text>
              <Text style={commonstyle.cream}>        以众筹的名义，借免费换新的由头，让消费者们提前预付。</Text>
              <Text style={commonstyle.cream}>        今大可乐手机初期作为小众手机，圈了一批忠实用户。在2014年12月9日进行的京东众筹中，更是以25分钟1650万的金额刷新国内众筹的最高金额纪录和最快速度纪录。</Text>
              <Text style={commonstyle.cream}>        众筹会的一个亮点是“免费”模式，大可乐采用了“一次众筹 终身免费换新”的方式，开创了行业首个免费模式：一万名参与众筹的用户，将实现每年一次免费换新机，并参与大可乐今后每款旗舰产品的打造，可谓一“筹”成名。借力京东金融众筹的平台，和“免费”换机的噱头，大可乐手机成功吸引了大批消费者的关注。不过此次众筹看起来更像是一次手机的预售营销活动。</Text>
              <Text style={commonstyle.cream}>        以众筹的名义，借免费换新的由头，让消费者们提前预付。</Text>
            </View>

            <View style={[styles.listview, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}></View>
            <TouchableOpacity style={[styles.listview, {backgroundColor: 'rgba(0, 0, 0, 0)',}]} activeOpacity={0.8}  onPress={this._help.bind(null,this)}>
              <Text style={styles.listviewtextleft}>帮助与反馈</Text>
              <View style={styles.listviewtextbox} ></View>
              <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listview, {backgroundColor: 'rgba(0, 0, 0, 0)',}]} activeOpacity={0.8}  onPress={this._update.bind(null,this)}>
              <Text style={styles.listviewtextleft}>检查版本更新</Text>
              <View style={styles.listviewtextbox} ></View>
              <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
            </TouchableOpacity>

            <View style={commonstyle.row}>
              <TouchableOpacity style={styles.aboutbtn} onPress={this._website.bind(null,this)}>
                <Text style={commonstyle.red}>官方网站</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.aboutbtn} onPress={this._userAgreement.bind(null,this)}>
                <Text style={commonstyle.red}>用户协议</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.listbox, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}></View>
            <View style={[styles.listbox, {backgroundColor: 'rgba(0, 0, 0, 0)',}]}></View>
          </ScrollView>
        </Image>
      </View>
    );
  }
}
