'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
var {
  View,
  Component,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  Switch,
  ScrollView
  } = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      alertvoice:false,
      messages: []
    }
  }

  openalert(alertvoice){
  if(alertvoice){
      this.setState({alertvoice: false});
   }else{
      this.setState({alertvoice: true});
   }
  return this.state.notshow;
}

  render(){

    return (
      <View >
        <Header screenTitle='系统设置' navigator={this.props.navigator}/>

        <ScrollView style={commonstyle.bodyer}>
          <View style={styles.listview}>
            <Text style={styles.listviewtextleft}>系统消息提示音</Text>
            <View style={styles.listviewtextbox} >
              <Switch onValueChange={(value) =>this.openalert(this.state.alertvoice)} style={[styles.switchSetting]} value= {this.state.alertvoice}/>
            </View>
          </View>

          <TouchableOpacity style={styles.listview} activeOpacity={0.8}>
            <Text style={styles.listviewtextleft}>清空缓存</Text>
            <View style={styles.listviewtextbox} ></View>
            <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listview} activeOpacity={0.8}>
            <Text style={styles.listviewtextleft}>更改密码</Text>
            <View style={styles.listviewtextbox} ></View>
            <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
          </TouchableOpacity>

          <View style={styles.listbox}></View>

          <TouchableOpacity style={styles.listview} activeOpacity={0.8}>
            <Text style={styles.listviewtextleft}>关于H7</Text>
            <View style={styles.listviewtextbox} ></View>
            <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listview} activeOpacity={0.8}>
            <Text style={styles.listviewtextleft}>共享H7给朋友们</Text>
            <View style={styles.listviewtextbox} ></View>
            <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
          </TouchableOpacity>

          <TouchableHighlight style = {this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} underlayColor = {'#FF0000'}  >
             <Text style = {styles.btnfont}> { '退出登录'}</Text>
          </TouchableHighlight>
        </ScrollView>
    </View>
    );
  }
}
