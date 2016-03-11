'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Navigator,
  ScrollView
  } = React;

 import styles from '../../styles/userstyle';


var UserInfo = React.createClass({



  render:function(){

    return (
      <View >
      <View style={styles.bgImageWrapper}>
      <View style={[styles.centerbg,{backgroundColor:'#000'}]}>
      </View>
      </View>
      <Header initObj={{title:'我的资料',}}   navigator={this.props.navigator}></Header>

        <ScrollView style={styles.centerfootbg}>
        <TouchableOpacity style={styles.centerlicontent} >

          <Text style={[styles.centerlitext,{marginLeft:10,marginTop:30,color:'rgb(120,120,120)'}]}>头像</Text>
          <TouchableOpacity style={styles.centertitle} onPress={this._pressUserInfo}>
          <Image style={styles.infoimage} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
          </TouchableOpacity>
            <Icon name="angle-right" size={25} style={[styles.infoangelright,{top:10}]} />
          <View style={[styles.infosplit,{top:35}]}></View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>昵称</Text>
          <Text style={[styles.infotextright]}>昵称123123</Text>
            <Icon name="angle-right" size={25} style={[styles.infoangelright]} />
              <View style={[styles.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:30,color:'rgb(120,120,120)'}]}>性别</Text>
          <Text style={[styles.infotextright,{marginTop:30}]}>男</Text>
          <Icon name="angle-right" size={25} style={[styles.infoangelright,{marginTop:25}]} />
            <View style={[styles.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>地区</Text>
          <Text style={[styles.infotextright]}>昵称123123</Text>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />
            <View style={[styles.infosplit,{marginTop:55}]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>生日</Text>
          <Text style={[styles.infotextright]}>昵称123123</Text>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />
            <View style={[styles.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>手机</Text>
          <Text style={[styles.infotextright]}>12323232323</Text>
          <View style={{marginLeft:28}}></View>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />
            <View style={[styles.infosplit]}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerlicontent} >
          <Text  style={[styles.centerlitext,{marginLeft:10,marginTop:25,color:'rgb(120,120,120)'}]}>个性签名</Text>
          <Text style={[styles.infotextright]}>昵称123123</Text>
          <Icon name="angle-right" size={25} style={styles.infoangelright} />

        </TouchableOpacity>

        </ScrollView>
    </View>
    );
  },
});


module.exports = UserInfo;
