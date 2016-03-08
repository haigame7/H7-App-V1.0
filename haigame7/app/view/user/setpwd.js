'use strict';

import React, {
  Component,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Switch,
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
        phone: this.props.data.phone,
        securitycode: null,
      loading:false,
      notshow: true,
      messages: []
    }
  };

  componentDidMount() {
              //这里获取从FirstPageComponent传递过来的参数: id
              this.setState({
                  phone:this.props.data.phone,
                  securitycode:'123123',
              });
              console.log(this.state.phone);
              console.log(this.state.securitycode);
              console.log(this.props.data.phone);
              console.log(this.props.data);
      }

  onFocus(argument) {
    setTimeout(() => {
      // let scrollResponder = this.refs.registerFormC.getScrollResponder();
      //     scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
      //       React.findNodeHandle(this.refs[argument.ref]), 110, true
      //     );
    }, 50);
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
  showPwd(notshow){
  if(notshow){
      this.setState({notshow: false});
   }else{
      this.setState({notshow: true});
   }
  return this.state.notshow;
  }


  render() {

    let fields = [
      {ref: 'phone', placeholder: '手机号', keyboardType: 'default', secureTextEntry: false, message: '* 手机号必填', style: [styles.inputText]},
      {ref: 'password', placeholder: '请您设置密码',keyboardType: 'default', secureTextEntry: this.state.notshow, message: '* 密码必填', style: [styles.inputText]},
      {ref: 'passwordd', placeholder: '请再次确认密码',keyboardType: 'default', secureTextEntry: this.state.notshow, message: '* 密码必填', style: [styles.inputText]},
      {ref: 'securitycode', placeholder: '验证码',keyboardType: 'default', secureTextEntry: false, message: '* 验证码必填', style: [styles.inputText]}
    ]
    return(
      <View style={{ flex: 1 }}>
        <View style={styles.bgImageWrapper}>
         <Image source={{uri:'http://sso.haigame7.com/images/banner9.jpg'}} style={styles.bgImage} />
      </View>
      <Header initObj={{
       title:'设置氦7密码',
        backName:'返回',
       }}   navigator={this.props.navigator}></Header>

       <View activeOpacity={1} style={styles.titleContainer}>

       </View>
        <View key={'password'} style={styles.inputContainer}>
          <TextInput {...fields[1]} onFocus={() => this.onFocus({...fields[1]})} onChangeText={(text) => this.state.data.password = text} />
        </View>

        <View key={'passwordd'} style={styles.inputContainerSecond}>
          <TextInput {...fields[2]} onFocus={() => this.onFocus({...fields[2]})} onChangeText={(text) => this.state.data.passwordd = text} />
        </View>
        <View style={styles.switchBarContainer}>
        <Text style={styles.switchBarText} >{'显示密码'}</Text>
        <Switch
            onValueChange={(value) =>this.showPwd(this.state.notshow)}
            style={styles.switchBarButton}
            value= {!this.state.notshow}
            />
        </View>
        <View style={styles.submitText}>
        <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.onSubmit(fields)}>
          <Text style={styles.buttonText} onPress={() => this.onSubmit()}>{'完成'}</Text>
        </TouchableHighlight>
        </View>
      </View>

    );
  }
}
