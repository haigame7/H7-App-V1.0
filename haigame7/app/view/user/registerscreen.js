'use strict';

import React, {
  Component,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  TextInput,
  ToastAndroid
} from 'react-native';

import styles from '../../styles/registerstyle';
import UserService from '../../network/userservice';
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
  };

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
      let scrollResponder = this.refs.registerFormC.getScrollResponder();
          scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
            React.findNodeHandle(this.refs[argument.ref]), 110, true
          );
    }, 50);
  }

  onSubmit(argument) {
    console.log(this.state.loading);
    if (this.state.loading) {
      ToastAndroid.show('Please Wait . . .', ToastAndroid.SHORT);
      //网络访问请求
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
  _getVerifiCode() {
// ToastAndroid.show(this.refs['registerFormC'][''], ToastAndroid.SHORT);
    UserService.getVerifiCode(this.state.data.phone)
  }
  render() {
    let fields = [
      {ref: 'phone', placeholder: '手机号', keyboardType: 'default', secureTextEntry: false, message: '* 手机号必填', style: [styles.inputText]},
      {ref: 'password', placeholder: '密码',keyboardType: 'default', secureTextEntry: false, message: '* 密码必填', style: [styles.inputText]},
      {ref: 'passwordd', placeholder: '确认密码',keyboardType: 'default', secureTextEntry: false, message: '* 密码必填', style: [styles.inputText]},
      {ref: 'securitycode', placeholder: '验证码',keyboardType: 'default', secureTextEntry: false, message: '* 验证码必填', style: [styles.inputText]}
    ]
    return(
      <ScrollView ref={'registerFormC'} {...this.props}>
        <TouchableOpacity activeOpacity={1} style={styles.titleContainer}>
          <Text style={styles.title}>注册</Text>
        </TouchableOpacity>
        <View key={'messages'}>
          {this.renderMessages()}
        </View>
        <View key={'phone'} style={styles.inputContainer}>
          <TextInput {...fields[0]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.phone = text} />
        </View>
        <View key={'password'} style={styles.inputContainer}>
          <TextInput {...fields[1]} onFocus={() => this.onFocus({...fields[1]})} onChangeText={(text) => this.state.data.password = text} />
        </View>
        <View key={'passwordd'} style={styles.inputContainer}>
          <TextInput {...fields[2]} onFocus={() => this.onFocus({...fields[2]})} onChangeText={(text) => this.state.data.passwordd = text} />
        </View>
        <View key={'securitycode'} style={styles.inputContainer}>
          <TextInput {...fields[3]} onFocus={() => this.onFocus({...fields[3]})} onChangeText={(text) => this.state.data.securitycode = text} />
          <TouchableOpacity onPress={this._getVerifiCode.bind(this)}>
            <Text>获取验证码</Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.onSubmit(fields)}>
          <Text style={styles.buttonText}>{this.state.loading ? 'Please Wait . . .' : 'Submit'}</Text>
        </TouchableHighlight>
        <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',margin:8}}>
          <Text style={{fontSize:17}}>{'已有账号? '}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigator.pop()}>
            <Text style={{fontSize:17,color:'#512DA8'}}>{'登录'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
