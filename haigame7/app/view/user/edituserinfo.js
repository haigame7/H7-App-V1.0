'use strict'

import React,
  {
    View,
    Component,
    Text,
    TextInput,
    Image,
    ToastAndroid,
    TouchableOpacity,
    StyleSheet,
    PixelRatio,
  } from 'react-native';

var ImagePickerManager = require('NativeModules').ImagePickerManager;
var Header = require('../common/headernav');export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userdata: this.props.userdata,
      iconText: '完成',
         value: ''
    }
  }

  componentDidMount(){
    if (this.props.screenTitle == '头像'){
      this.setState({
        iconText: ''
      })
    }
  }

  _callback() {
    let property = this.props.screenTitle;
    let value;
    switch (property) {
      case '昵称':
        value = this.state.value;
        break;
      case '个性签名':
        value = this.state.value;
        break;
      case '手机号':
        value = this.state.value;
      case '头像':
        this.selectPhotoTapped.bind(this)
        value = this.state.value;
      default:
        break;
    }
    if (property != '头像' || this.state.iconText == '确定'){
      this.props.setProperty(property,value);
      if(this.props.navigator) {
         this.props.navigator.pop();
      }
    }
  }
  selectPhotoTapped() {
      let options = {
          title: '选择照片',
          cancelButtonTitle: '取消',
          takePhotoButtonTitle: '拍照',
          chooseFromLibraryButtonTitle: '从相册选择',
          quality: 0.5,
          maxWidth: 300,
          maxHeight: 300,
          storageOptions: {
            skipBackup: true
          }
        };

      ImagePickerManager.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePickerManager Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          // You can display the image using either:
          let source = 'data:image/jpeg;base64,' + response.data;
          // let source = {uri: response.uri.replace('file://', ''), isStatic: true};
          let data = this.state.userdata;
          data['UserWebPicture'] = source
          this.setState({
            value: response.data,
            iconText: '确定',
            userdata: data,
          });
        }
      });
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
                onChangeText={(text) => this.setState({value: text})}
                defaultvalue={this.state.userdata.UserWebNickName}
              />
            </View>
          )
        break;
      case '个性签名':
          childScreen = (
            <View>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({value: text})}
                defaultvalue={this.state.userdata.Hobby}
              />
            </View>
          )
        break;
      case '手机号':
          childScreen = (
            <View>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({value: text})}
                defaultvalue={this.state.userdata.PhoneNumber}
              />
            </View>
          )
        break;
      case '头像':
          childScreen = (
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={[styles_1.avatar, styles_1.avatarContainer, {marginBottom: 20}]}>
              { this.state.UserWebPicture === null ? <Text>Select a Photo</Text> :
                <Image style={styles_1.avatar} source={{uri:this.state.userdata.UserWebPicture || 'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
              }
              </View>
            </TouchableOpacity>
          )
      default:
        break;
    }

    return(
      <View>
        <Header screenTitle={this.props.screenTitle}  iconText={this.state.iconText} navigator={this.props.navigator} callback={this._callback.bind(this)}/>
        {childScreen}
      </View>
    );
  }
}
const styles_1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
