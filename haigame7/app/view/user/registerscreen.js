'use strict';

import React, {
  Component,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  Navigator,
  ToastAndroid
} from 'react-native';

import styles from '../../styles/userstyle';
import registerstyles from '../../styles/registerstyle';
import Header from '../common/headernav';
import api, {host, key} from './server';
import Setpwd from './setpwd.js';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        phone: undefined,
        password: undefined,
        passwordd: undefined,
        securitycode: undefined
      },
      loading: false,
      messages: []
    }
  }

  render() {
    let fields = [
      {ref: 'phone', placeholder: '手机号', keyboardType: 'default', secureTextEntry: false, message: '* 手机号必填', style: [styles.inputText]},
      {ref: 'password', placeholder: '密码',keyboardType: 'default', secureTextEntry: false, message: '', style: [styles.inputText]},
      {ref: 'passwordd', placeholder: '确认密码',keyboardType: 'default', secureTextEntry: false, message: '', style: [styles.inputText]},
      {ref: 'securitycode', placeholder: '验证码',keyboardType: 'default', secureTextEntry: false, message: '* 验证码必填', style: [styles.inputText]}
    ]
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.bgImageWrapper}>
         <Image source={{uri:'http://sso.haigame7.com/images/banner9.jpg'}} style={styles.bgImage} />
      </View>
      <Header initObj={{
       title:'注册',
        backName:'返回',
       }}   navigator={this.props.navigator}></Header>

       <View activeOpacity={1} style={styles.titleContainer}>

       </View>
        <View key={'messages'}>
          {this.renderMessages()}
        </View>
        <View key={'email'} style={styles.inputContainer}>
          <TextInput {...fields[0]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.email = text} />
        </View>

        <View key={'securitycode'} style={styles.inputContainerSecond}>
          <TextInput {...fields[3]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.phone = text} />
          <TouchableHighlight style={this.state.loading ? styles.cetifyButtonDisabled : styles.certifyButton} underlayColor={'#2bbbad'} onPress={() => this.onSubmit(fields)}>
            <Text style={styles.certifyButtonText} onPress={()=>this.onSubmit()}>{'获取验证码'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.submitText}>
        <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.gotoRoute('setpwd')}>
          <Text style={styles.buttonText} >{'下一步'}</Text>
        </TouchableHighlight>
        </View>
      </View>

    );
  }
  renderMessages() {
    if (this.state.messages.length > 0) {
      let messages = this.state.messages.map((val, key) => {
        if (val.message) return <Text style={styles.message} key={key}>{val.message}</Text>;
      });

      return messages;
    }
  }
  onFocus(argument) {
    setTimeout(() => {
      // let scrollResponder = this.refs.registerFormC.getScrollResponder();
      //     scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      //       React.findNodeHandle(this.refs[argument.ref]), 110, true
      //     );
    }, 50);
  }
  gotoRoute(name) {

    if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
      this.props.navigator.push({name: name,component: Setpwd,sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
    }
    return;
  }

  onSubmit(argument) {
    console.log(this.state.loading);
    if (this.state.loading) {
      ToastAndroid.show('Please Wait . . .', ToastAndroid.SHORT);
      return null;
    }

        let keys = Object.keys(this.state.data).map((val,key) => {
          if ([null, undefined, 'null', 'undefined', ''].indexOf(this.state.data[val]) > -1) return val;
        });
        this.setState({messages: []});
        argument.map((val, key) => {
          if (keys.indexOf(val.ref) > -1) this.setState({messages: this.state.messages.concat(val)});
        });
      }
}
