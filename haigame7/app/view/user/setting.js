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
  AsyncStorage,
  ScrollView
  } = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import ReSetPwd from './reset_pwd_screen';
import About from './about_screen';
import Share from './share_screen';
import GlobalVariable from '../../constants/globalvariable'
import Toast from '@remobile/react-native-toast';

import * as httpCache from '../../components/common/cache'
export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      alertvoice:false,
      messages: [],
      allcache: 0
    }
  }

  componentWillMount() {
    this.getData()
  }
  componentDidMount() {

  }

  async getData(){
    try {
      this.setState({
        allcache: Math.round((await httpCache.getSize()/1024)/1024*10)/10 + 'M',
      });
    } catch(err){
      Toast('获取错误', err.message);
    }
  }
  async clearCache(){
    try {
      await httpCache.clear();
      Toast.show('清除缓存成功');
      await this.getData();
    } catch(err){
      Toast('清除失败', err.message);
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
 onLoginout(){

       AsyncStorage.removeItem(GlobalVariable.USER_INFO.USERSESSION).then((value)=>{
         Toast.show("退出登录");
         if(this.props.updateLoginState){
           this.props.updateLoginState();
          }
       });
         this.props.navigator.popToTop();

 }
 _toNextScreen(params){
    // Toast.show("this is a message")
    let _this = this;
    this.props.navigator.push({
      name: params.name,
      component: params.component,
      sceneConfig:params.sceneConfig || undefined,
      params: {
        ...this.props,
      }
    })
  }

  render(){
    //分享功能能
    // <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this._toNextScreen.bind(this,{"name":"分享","component":Share})}>
    //   <Text style={styles.listviewtextleft}>分享H7给朋友们</Text>
    //   <View style={styles.listviewtextbox} ></View>
    //   <Text style={styles.listviewtextright}>微信</Text>
    //   <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
    // </TouchableOpacity>

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

          <TouchableOpacity style={styles.listview} activeOpacity={0.8} onPress={this.clearCache.bind(this)}>
            <Text style={styles.listviewtextleft}>清空缓存</Text>
            <View style={styles.listviewtextbox} ></View>
            <Text style={styles.listviewtextright}>{this.state.allcache}</Text>
            <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
          </TouchableOpacity>

          <View style={styles.listbox}></View>

          <TouchableOpacity style={styles.listview} activeOpacity={0.8}  onPress={this._toNextScreen.bind(this,{"name":"关于H7","component":About})}>
            <Text style={styles.listviewtextleft}>关于H7</Text>
            <View style={styles.listviewtextbox} ></View>
            <Icon name="angle-right" size={20} color={'#484848'} style={styles.listviewiconright} />
          </TouchableOpacity>


          <TouchableHighlight style = {this.state.loading ? [styles.btn, styles.btndisable] : styles.btn} onPress = {() => this.onLoginout() } underlayColor = {'#FF0000'}  >
             <Text style = {styles.btnfont}> { '退出登录'}</Text>
          </TouchableHighlight>
        </ScrollView>
    </View>
    );
  }
}
