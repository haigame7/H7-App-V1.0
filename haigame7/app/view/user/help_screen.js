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
  TouchableOpacity,
  TextInput
} from 'react-native';
import Header from '../common/headernav'; //导航有问题
import Util from '../common/util';
const fullImage = {uri: 'http://img1.imgtn.bdimg.com/it/u=2633980629,4278863756&fm=21&gp=0.jpg'};
export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '右上角的提交都还没有',
    }

  }


  render() {
    return(
      <View >
        <Header initObj={{title:'分享',}} navigator={this.props.navigator}></Header>
          <View>
            <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(text) => this.setState({text})}
             default={this.state.text}
           />


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
