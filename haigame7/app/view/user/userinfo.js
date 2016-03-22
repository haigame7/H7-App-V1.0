'use strict'

var React = require('react-native');
var Header = require('../common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var DateTimePicker = require('@remobile/react-native-datetime-picker');
var {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Navigator,
  ScrollView,
  Modal,
  Dimensions,
  StyleSheet,
  Component
  } = React;

import CityData from '../../components/common/citydata';
import commonstyle from '../../styles/commonstyle';
import styles from '../../styles/userstyle';
import EditScreen from './edituserinfo';
import Picker from 'react-native-picker';
// const pickerData = CityData.citylist;
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      modalVisible:false,
      sex:'1',
      UserWebNickName:'昵称',
      UserWebPicture: '头像',
      Sex: '性别',
      Address: '地区',
      Birthday: '生日',
      Hobby : '个性签名',
      PhoneNumber: '手机号'
    }
  }
  _callback() {
    console.log('整体保存吧,图片已这里直接村base64存上去');
  }

  _editInfo(property) {
    var _this = this;
    this.props.navigator.push({
      name: 'edituserinfo',
      component: EditScreen,
      params: {
        screenTitle: property,
        setProperty(key,pro){
          console.log('列表页设置相应属性:' + key);
          switch (key) {
            case '昵称':
               _this.setState({
                 UserWebNickName: pro
               })
              break;
            case '个性签名':
              _this.setState({
                Hobby: pro
              })
              break;
            case '手机号':
              _this.setState({
                PhoneNumber: pro
              })
              break;
            case '头像':
                _this.setState({
                  UserWebPicture: pro
                })
               break;
            default:
             break;
          }
        }
      }
    });
  }
  _onPressHandle(){
   this.refs.sexPicker.toggle();
 }

 _onPressHandle1(){
  // this.picker.toggle();
  var  a = this.pickedValue
  console.log(this);
  ToastAndroid.show(a,ToastAndroid.SHORT)
 }

 render() {
   return(
     <View >
     <Header screenTitle='我的资料'  navigator={this.props.navigator} iconText='保存' callback={this._callback}/>
     <ScrollView style={commonstyle.bodyer}>
       <View style={[styles.listview, {height: 100,}]}>
         <Text style={[styles.listviewtextleft, {marginTop: 35,}]}>{this.state.UserWebPicture}</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.UserWebPicture)}>
           <Image style={styles.listviewtextimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={[styles.listviewiconright, {marginTop: 30,}]} />
       </View>

       <View style={styles.listview} >
         <Text  style={styles.listviewtextleft}>昵称</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.UserWebNickName)}>
           <Text style={styles.listviewtextright}>{this.state.UserWebNickName}</Text>
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </View>

       <View style={styles.listview} >
         <Text  style={styles.listviewtextleft}>性别</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={()=>this.changemodalvisible(this.state.modalVisible)} >
           <Text style={styles.listviewtextright}>{parseInt(this.state.Sex) ? '男' : '女'} </Text>
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </View>

       <View style={styles.listview} >
         <Text  style={styles.listviewtextleft}>地区</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} >
           <Text style={styles.listviewtextright}>朝阳 - 北京</Text>
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </View>

       <View style={styles.listview} >
         <Text  style={styles.listviewtextleft}>生日</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this.showDatePicker} >
           <Text style={styles.listviewtextright}>123</Text>
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </View>

       <View style={styles.listview} >
         <Text  style={styles.listviewtextleft}>手机号</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.PhoneNumber)}>
         <Text style={styles.listviewtextright}>{this.state.PhoneNumber}</Text>
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </View>

       <View style={styles.listview} >
         <Text  style={styles.listviewtextleft}>个性签名</Text>
         <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.Hobby)}>
           <Text style={styles.listviewtextright}>{this.state.Hobby}</Text>
         </TouchableOpacity>
         <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
       </View>
       <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
       <TouchableOpacity style={{marginTop: 20}} onPress={this._onPressHandle.bind(this)}>
                 <Text style={{color: 'white'}}>点我</Text>
               </TouchableOpacity>
       </ScrollView>

       <Picker
           ref={'sexPicker'}
           style={{
               height: 200
           }}
           pickerBtnText='确定'
           pickerCancelBtnText='取消'
           showDuration={100}
           showMask={true}
           pickerData={['男','女']}//picker`s value List
           selectedValue={'女'}//default to be selected value
           onPickerDone={(pickedValue) => {ToastAndroid.show(pickedValue,ToastAndroid.SHORT)}}//when confirm your choice
       />
       <Picker
           ref={'addresPicker'}
           style={{
               height: 200
           }}
           pickerBtnText='确定'
           pickerCancelBtnText='取消'
           showDuration={100}
           showMask={true}
           pickerData={['男','女']}//picker`s value List
           selectedValue={'女'}//default to be selected value
           onPickerDone={this._onPressHandle1}//when confirm your choice
       />
   </View>

   );
 }
}
// var UserInfo = React.createClass({
//   getInitialState() {
//        return {
//            date: new Date(),
//            modalVisible:false,
//            sex:'1',
//            UserWebNickName:'昵称',
//            UserWebPicture: '头像',
//            Sex: '性别',
//            Address: '地区',
//            Birthday: '生日',
//            Hobby : '个性签名',
//            PhoneNumber: '手机号'
//        }
//    },
//    showDatePicker() {
//        var date = this.state.date;
//        this.picker.showDatePicker(date, (d)=>{
//            this.setState({date:d});
//        });
//    },
//    changemodalvisible(visible){
//    if(visible){
//     this.setState({modalVisible: false});
//     }else{
//     this.setState({modalVisible: true});
//      }
//     },
//    showTimePicker() {
//        var date = this.state.date;
//        this.picker.showTimePicker(date, (d)=>{
//            this.setState({date:d});
//        });
//    },
//    formatDate (strTime) {
//      var date = new Date(strTime);
//      return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
//    },
//    _callback() {
//      console.log('整体保存吧,图片已这里直接村base64存上去');
//    },
//    _editInfo(property) {
//      var _this = this;
//      this.props.navigator.push({
//        name: 'edituserinfo',
//        component: EditScreen,
//        params: {
//          screenTitle: property,
//          setProperty(key,pro){
//            console.log('列表页设置相应属性:' + key);
//            switch (key) {
//              case '昵称':
//                 _this.setState({
//                   UserWebNickName: pro
//                 })
//                break;
//              case '个性签名':
//                _this.setState({
//                  Hobby: pro
//                })
//                break;
//              case '手机号':
//                _this.setState({
//                  PhoneNumber: pro
//                })
//                break;
//              case '头像':
//                  _this.setState({
//                    UserWebPicture: pro
//                  })
//                 break;
//              default:
//               break;
//            }
//          }
//        }
//      });
//    },
//    _onPressHandle(){
// 		this.refs.sexPicker.toggle();
// 	}
// ,_onPressHandle1(){
//  // this.picker.toggle();
//  var  a = this.pickedValue
//  console.log(this);
//  ToastAndroid.show(a,ToastAndroid.SHORT)
// }
// ,
//   render:function(){
//
//     return (
//       <View >
//       <Header screenTitle='我的资料'  navigator={this.props.navigator} iconText='保存' callback={this._callback}/>
//       <ScrollView style={commonstyle.bodyer}>
//         <View style={[styles.listview, {height: 100,}]}>
//           <Text style={[styles.listviewtextleft, {marginTop: 35,}]}>{this.state.UserWebPicture}</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.UserWebPicture)}>
//             <Image style={styles.listviewtextimg} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={[styles.listviewiconright, {marginTop: 30,}]} />
//         </View>
//
//         <View style={styles.listview} >
//           <Text  style={styles.listviewtextleft}>昵称</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.UserWebNickName)}>
//             <Text style={styles.listviewtextright}>{this.state.UserWebNickName}</Text>
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
//         </View>
//
//         <View style={styles.listview} >
//           <Text  style={styles.listviewtextleft}>性别</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={()=>this.changemodalvisible(this.state.modalVisible)} >
//             <Text style={styles.listviewtextright}>{parseInt(this.state.Sex) ? '男' : '女'} </Text>
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
//         </View>
//
//         <View style={styles.listview} >
//           <Text  style={styles.listviewtextleft}>地区</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} >
//             <Text style={styles.listviewtextright}>朝阳 - 北京</Text>
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
//         </View>
//
//         <View style={styles.listview} >
//           <Text  style={styles.listviewtextleft}>生日</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this.showDatePicker} >
//             <Text style={styles.listviewtextright}>{this.formatDate(this.state.date.toString())}</Text>
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
//         </View>
//
//         <View style={styles.listview} >
//           <Text  style={styles.listviewtextleft}>手机号</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.PhoneNumber)}>
//           <Text style={styles.listviewtextright}>{this.state.PhoneNumber}</Text>
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
//         </View>
//
//         <View style={styles.listview} >
//           <Text  style={styles.listviewtextleft}>个性签名</Text>
//           <TouchableOpacity style={styles.listviewtextbox} activeOpacity={0.8} onPress={this._editInfo.bind(this,this.state.Hobby)}>
//             <Text style={styles.listviewtextright}>{this.state.Hobby}</Text>
//           </TouchableOpacity>
//           <Icon name="angle-right" size={30} color={'#484848'} style={styles.listviewiconright} />
//         </View>
//         <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
//         <TouchableOpacity style={{marginTop: 20}} onPress={this._onPressHandle}>
//                   <Text style={{color: 'white'}}>点我</Text>
//                 </TouchableOpacity>
//         </ScrollView>
//
//         <Picker
//             ref={'sexPicker'}
//             style={{
//                 height: 200
//             }}
//             pickerBtnText='确定'
//             pickerCancelBtnText='取消'
//             showDuration={100}
//             showMask={true}
//             pickerData={['男','女']}//picker`s value List
//             selectedValue={'女'}//default to be selected value
//             onPickerDone={this._onPressHandle1}//when confirm your choice
//         />
//         <Picker
//             ref={'addresPicker'}
//             style={{
//                 height: 200
//             }}
//             pickerBtnText='确定'
//             pickerCancelBtnText='取消'
//             showDuration={100}
//             showMask={true}
//             pickerData={['男','女']}//picker`s value List
//             selectedValue={'女'}//default to be selected value
//             onPickerDone={this._onPressHandle1}//when confirm your choice
//         />
//     </View>
//     );
//   },
// });
//
// module.exports = UserInfo;
