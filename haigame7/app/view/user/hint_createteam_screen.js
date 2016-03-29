'use strict';
import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
var Icon = require('react-native-vector-icons/Iconfont');

import commonstyle from '../../styles/commonstyle';
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
    }
  }
  _openModa() {
    this.setState({isOpen: true});
  }
  _closeModa() {
    console.log('******');
     this.setState({isOpen: false});
  }

  _createTeam(){
    console.log('创建战队去了');
  }
  _joinTeam(){
    console.log('加入战队去了');
  }
  render(){
    let BContent = <Button onPress={this._closeModa.bind(this)} ><Icon name="error" size={20} color={'#FF0000'} /></Button>;
    return(
      <View style={styles.wrapper}>
       <Button onPress={this._openModa.bind(this)} style={styles.btn}>点击弹出Modal</Button>
       <Modal isOpen={this.state.isOpen} onClosed={this._closeModa.bind(this)} style={[commonstyle.modal, commonstyle.modalmiddle]} position={"center"}>
          <View style={commonstyle.modalclose}>{BContent}</View>
          <View style={commonstyle.modaltext}>
            <Text style={commonstyle.cream}>亲爱的用户，你还没有建立或加入战队呢，赶快点击下面按钮，开启你的约战之旅吧！！！</Text>
            <Text style={commonstyle.cream}>说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊</Text>
          </View>
          <View style={[commonstyle.row, commonstyle.modalbtn]}>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btncreamblack]} activeOpacity={0.8} onPress={this._createTeam.bind(this)} style={commonstyle.black}>创建战队</Button>
            <Button containerStyle={[commonstyle.col1, commonstyle.modalbtnfont, commonstyle.btnredwhite]} activeOpacity={0.8} onPress={this._joinTeam.bind(this)} style={commonstyle.white}>加入战队</Button>
          </View>
        </Modal>
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
