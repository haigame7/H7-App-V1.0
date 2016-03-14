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

  render() {
    return(
      <View >
        <Header initObj={{title:'分享',}} navigator={this.props.navigator}></Header>
          <View>
            <Image style={styles.centerimage} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />


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
