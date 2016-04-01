'use strict';
/**
 * APP 玩家信息
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/Iconfont');
var Util = require('../common/util');
var {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  ScrollView
  } = React;

import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/teamstyle';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      playerinfo:this.props.playerinfo,
      messages: []
    }
  }
  renderHeroImageItem(rowData,key){
    return(
      <Image key={key} style={styles.listviewheroimg} source={{uri:rowData.HeroImage}} />
    );
  }

  render(){
    var that = this
    var items =Object.keys(that.state.playerinfo.HeroImage).map(function(item,key) {
      return that.renderHeroImageItem(that.state.playerinfo.HeroImage[item],key);
    });
    return (
      <View>
        <Header screenTitle='个人信息'   navigator={this.props.navigator}/>
        <ScrollView style={commonstyle.bodyer}>
          <Image source={require('../../images/userbg.jpg')} style={styles.headbg} resizeMode={"cover"} >
            <View style={styles.blocktop}>
              <Image style={styles.headportrait} source={{uri:this.state.playerinfo.UserWebPicture}} />
              <View style={styles.headportraitv}><Icon name="certified" size={15} color={'#484848'} /><Text style={styles.headportraitvfont}>未认证</Text></View>
            </View>

            <View style={styles.blocktop}>
              <Text style={[styles.headname, commonstyle.white]}>{this.state.playerinfo.UserWebNickName}</Text>
              <View style={[commonstyle.row, styles.headtextblock]}>
                <View style={styles.headtextleft}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  战斗力  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '}{this.state.playerinfo.GamePower}{'  '}</Text>
                </View>
                <View style={styles.headtextline}></View>
                <View style={styles.headtextright}>
                  <Text style={[commonstyle.yellow, commonstyle.fontsize12]}>{'  氦金  '}</Text>
                  <Text style={[commonstyle.red, commonstyle.fontsize12]}>{'  '}{this.state.playerinfo.Asset}{'  '}</Text>
                </View>
              </View>
              <View style={styles.headtext}>
                <Text style={[commonstyle.cream, commonstyle.fontsize12, styles.headtextfont]}>个性签名:生命不息电竞不止生命不息电竞不止生命不息电竞不止</Text>
              </View>
            </View>
          </Image>

          <View style={styles.listblock}>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>性别</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.playerinfo.Sex}</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>地区</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>{this.state.playerinfo.Address}</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>擅长位置</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>辅助</Text></View>
            </View>
            <View style={styles.listview}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>注册时间</Text></View>
              <View style={styles.listviewright}><Text style={commonstyle.cream}>2016/01/23</Text></View>
            </View>
            <View style={[styles.listview, styles.nobottom]}>
              <View style={styles.listviewleft}><Text style={commonstyle.gray}>擅长英雄</Text></View>
              <View style={[styles.listviewright, styles.listviewhero]}>
               {items}
              </View>
            </View>
          </View>

          <TouchableHighlight style = {styles.btn} underlayColor = {'#FF0000'} >
            <Text style = {styles.btnfont}> {'发出邀请' } </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
