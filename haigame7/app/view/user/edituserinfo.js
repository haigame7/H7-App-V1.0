'use strict'

import React,
  {
    View,
    Component,
    Text,
    TextInput,
    Image,
    ToastAndroid
  } from 'react-native';
var Header = require('../common/headernav');
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UserWebNickName:'昵称',
      UserWebPicture: '头像',
      Sex: '性别',
      Address: '地区',
      Birthday: '生日',
      Hobby : '个性签名',
      PhoneNumber: '手机号',
      iconText: '完成',
      callback: this._callback.bind(this)
    }
  }

  componentDidMount(){
    ToastAndroid.show(this.props.screenTitle,ToastAndroid.SHORT)
    if (this.props.screenTitle === '头像'){
      this.setState({
        iconText: '编辑',
        callback: this._selectImg.bind(this)
      })
    }
  }

  _callback() {
    let property = this.props.screenTitle;
    let value;
    switch (property) {
      case '昵称':
        value = this.state.UserWebNickName;
        break;
      case '个性签名':
        value = this.state.Hobby;
        break;
      case '手机号':
        value = this.state.PhoneNumber;
      case '头像':
        value = this.state.UserWebPicture;
      default:
        break;
    }
    this.props.setProperty(property,value);
    if(this.props.navigator) {
       this.props.navigator.pop();
    }
  }

  _selectImg(){

  }
  render() {
    // let childScreen = (
    //   <View>
    //     <Text></Text>
    //   </View>
    // )

    let childScreen;
    switch (this.props.screenTitle) {
      case '昵称':
          childScreen = (
            <View>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({UserWebNickName: text})}
                defaultvalue={this.state.UserWebNickName}
              />
            </View>
          )
        break;
      case '个性签名':
          childScreen = (
            <View>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({Hobby: text})}
                defaultvalue={this.state.Hobby}
              />
            </View>
          )
        break;
      case '手机号':
          childScreen = (
            <View>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({PhoneNumber: text})}
                defaultvalue={this.state.PhoneNumber}
              />
            </View>
          )
        break;
      case '头像':
          childScreen = (
            <View>
              <Image style={{width:100,height:100}} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            </View>
          )
      default:
        break;
    }

    return(
      <View>
        <Header screenTitle={this.props.screenTitle}  iconText={this.state.iconText} navigator={this.props.navigator} callback={this.state.callback}/>
        {childScreen}
      </View>
    );
  }
}
