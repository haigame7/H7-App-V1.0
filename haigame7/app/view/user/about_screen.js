'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  Navigator,
  Image,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import Header from '../common/headernav'; //导航有问题
import Util from '../common/util';
const fullImage = {uri: 'http://img1.imgtn.bdimg.com/it/u=2633980629,4278863756&fm=21&gp=0.jpg'};
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
        <Header initObj={{title:'关于H7',}} navigator={this.props.navigator}></Header>
          <View>
            <Image style={styles.centerimage} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            <Text>今大可乐手机初期作为小众手机，圈了一批忠实用户。在2014年12月9日进行的京东众筹中，更是以25分钟1650万的金额刷新国内众筹的最高金额纪录和最快速度纪录。
                众筹会的一个亮点是“免费”模式，大可乐采用了“一次众筹 终身免费换新”的方式，开创了行业首个免费模式：一万名参与众筹的用户，将实现每年一次免费换新机，并参与大可乐今后每款旗舰产品的打造，可谓一“筹”成名。借力京东金融众筹的平台，和“免费”换机的噱头，大可乐手机成功吸引了大批消费者的关注。不过此次众筹看起来更像是一次手机的预售营销活动。
                以众筹的名义，借免费换新的由头，让消费者们提前预付。</Text>
            <TouchableOpacity  onPress={this._help.bind(null,this)}>
              <Text>帮助与反馈</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={this._update.bind(null,this)}>
              <Text>检查版本更新</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity  onPress={this._website.bind(null,this)}>
              <Text>官方网站</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={this._userAgreement.bind(null,this)}>
              <Text>用户协议</Text>
            </TouchableOpacity>

          </View>
      </View>

    );
  }
}
var styles = StyleSheet.create({
  centerimage:{
   width:100,
   height:100,
   borderRadius: 50,
   top:Util.size.height*1/40-5
  },

});
