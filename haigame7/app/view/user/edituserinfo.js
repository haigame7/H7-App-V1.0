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
var Header = require('../common/headernav');
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userdata: this.props.userdata,
      iconText: '完成',
    }
  }

  componentDidMount(){
    if (this.props.screenTitle == '头像'){
      this.setState({
        iconText: '编辑'
      })
    }
  }

  _callback() {
    let property = this.props.screenTitle;
    let value;
    switch (property) {
      case '昵称':
        value = this.state.userdata.UserWebNickName;
        break;
      case '个性签名':
        value = this.state.userdata.Hobby;
        break;
      case '手机号':
        value = this.state.userdata.PhoneNumber;
      case '头像':
        this.selectPhotoTapped.bind(this)
        value = this.state.userdata.UserWebPicture;
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
          this.setState({
            UserWebPicture: source,
            iconText: '确定'
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
                onChangeText={(text) => this.setState({UserWebNickName: text})}
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
                onChangeText={(text) => this.setState({Hobby: text})}
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
                onChangeText={(text) => this.setState({PhoneNumber: text})}
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
                <Image style={styles_1.avatar} source={{uri:this.state.userdata.UserWebPicture}} />
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
