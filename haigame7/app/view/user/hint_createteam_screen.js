'use strict';
import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
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
     this.setState({isOpen: false});
  }

  _createTeam(){
    console.log('创建战队去了');
  }
  _joinTeam(){
    console.log('加入战队去了');
  }
  render(){
    let BContent = <Button onPress={this._closeModa.bind(this)} >X</Button>;
    return(
      <View style={styles.wrapper}>
       <Button onPress={this._openModa.bind(this)} style={styles.btn}>点击弹出Modal</Button>
       <Modal isOpen={this.state.isOpen} style={[styles.modal, styles.modal4]} position={"center"} backdropContent={BContent}>
          <View>
            <Text style={styles.text_1}>亲爱的用户，你还没有建立或加入战队呢，赶快点击下面按钮，开启你的约战之旅吧！！！</Text>
            <Text style={styles.text_2}>说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊</Text>
            <View style={{flexDirection: 'row'}}>
            <Button onPress={this._createTeam.bind(this)} style={styles.btn_create}>创建战队</Button>
            <Button onPress={this._joinTeam.bind(this)} style={[styles.btn_join,{position: 'relative',left: 10}]}>加入战队</Button>
            </View>
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
