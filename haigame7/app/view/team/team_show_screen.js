'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import Header from '../common/headernav';
import TeamHeader from './teamheader_screen';
import Modal from 'react-native-modalbox';
import UserHeader from '../user/userheader_screen';
export default class extends React.Component {
  /**
   * @param role 队长 captain | 队员：teamuser | 非本队成员: user
   * @return {[type]} [description]
   */
  constructor() {
    super();
    this.state = {
        navigator: undefined,
             role: 'user',
         iconText: '添加战队',
  defaultTeamLogo: 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png',
           isOpen: false,
       isDisabled: false,
    }
  }
  componentWillMount(){
      this.setState({
        navigator: this.props.navigator,
      });
      if (this.state.role != 'captain') {
        this.setState({
          iconText: undefined,
        });
      }

  }

_callback() {
  ToastAndroid.show("回调方法",ToastAndroid.SHORT)
  this.state.navigator.pop()
}
_openModa() {
  this.setState({isOpen: true});
}
_closeModa() {
  console.log('******');
   this.setState({isOpen: false});
}
render() {
  let myHero = (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
        <Image style={{width:20,height:20}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
      </View>
    </View>
    )
  let BContent = <Button onPress={this._closeModa.bind(this)} >X</Button>;
  let teamUser = (
    <View>
      <TouchableOpacity onPress={this._openModa.bind(this)}>
        <View>
          <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
        <Image style={{width:20,height:20}} source={{uri:this.state.defaultTeamLogo}} />
      </View>
    </View>
    )
  return(
    <View>
    <Header screenTitle='战队信息' isPop={true} iconText={this.state.iconText} callback={this._callback.bind(this)} navigator={this.props.navigator}/>
    <Modal isOpen={this.state.isOpen} onClosed={this._closeModa.bind(this)}style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
       <View>
         <View>
           <UserHeader navigator={this.props.navigator}/>
         </View>
         <View>
           <ScrollView>
             <View style={{flexDirection: 'row'}}>
               <Text>性别</Text><Text>男</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
               <Text>地区</Text><Text>北京-西城</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
               <Text>擅长位置</Text><Text>变声凹凸曼</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
               <Text>注册时间</Text><Text>2019/01/01</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
               <Text>擅长英雄</Text>
               {myHero}
             </View>
           </ScrollView>
         </View>
       </View>
     </Modal>
      <View>
        <TeamHeader navigator={this.props.navigator} />
      </View>
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Text>战队战绩</Text><Text>参赛场次 <Text>20场</Text> 胜率 <Text>20场</Text></Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>成立日期</Text><Text>2016/02/15</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>招募信息</Text><Text>本队需要萌妹子本队需要萌妹子本队需要萌妹子本队需要萌妹子本队需要萌妹子</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>战队成员</Text>
            {teamUser}
          </View>
          <Text>备注：战队成员第一个可以按，就是现实有问题。。。</Text>
        </ScrollView>
      </View>
    </View>
  );
}

}

var styles = StyleSheet.create({
  text_1: {
    color: "#838B8B",
    fontSize: 20
  },
  text_2: {
    color: "#7A7A7A",
    fontSize: 15
  },

  btn_create: {
    backgroundColor: "#3B5998",
    color: "white",
    width: 150,
    height: 30,
    marginLeft:0
  }
  ,btn_join: {
    backgroundColor: "#3B5998",
    color: "white",
    width: 150,
    height: 30,
  }

,
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300,
    backgroundColor: "#292929",
    marginRight:10,
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});
