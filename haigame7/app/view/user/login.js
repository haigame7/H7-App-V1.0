/**
 * APPs登录页
 * @return
 * @author
 */
 'use strict';

 import React, {
   Component,
   ScrollView,
   Text,
   View,
   TextInput,
   TouchableHighlight,
   TouchableOpacity,
   ToastAndroid,
   AsyncStorage,
   Navigator,
   Image
 } from 'react-native';

 import styles from '../../styles/userstyle';
 import api, {host, key} from './server';
 import Register from './registerscreen';
 import Header from '../common/headernav';

 export default class extends Component {
   constructor(props) {
     super(props);

     this.state = {
       data: {
            email: undefined,
         password: undefined,
             role: 0
       },
       loading: false
     };
   }

   render() {
     let fields = [
       {ref: 'email', placeholder: '手机号码', keyboardType: 'email-address', secureTextEntry: false, style: [styles.inputText]},
       {ref: 'password', placeholder: '输入密码', keyboardType: 'default', secureTextEntry: true, style: [styles.inputText]},
     ];
     return (
     <View style={{ flex: 1 }}>
       <View style={styles.bgImageWrapper}>
        <Image source={{uri:'http://sso.haigame7.com/images/banner9.jpg'}} style={styles.bgImage} />
     </View>
     <Header initObj={{
      title:'用户登录',
       backName:'返回',
      }}   navigator={this.props.navigator}></Header>
         <View activeOpacity={1} style={styles.titleContainer}>
          <Image style={{width:80,height:80,}} source={{uri:'http://sso.haigame7.com/images/logo.png'}} />
         </View>

         <View key={'email'} style={styles.inputContainer}>
           <TextInput {...fields[0]} onFocus={() => this.onFocus({...fields[0]})} onChangeText={(text) => this.state.data.email = text} />
         </View>
         <View key={'password'} style={styles.inputContainerSecond}>
           <TextInput {...fields[1]} onFocus={() => this.onFocus({...fields[1]})} onChangeText={(text) => this.state.data.password = text} />
         </View>

         <View style={styles.linkText}>
           <TouchableOpacity activeOpacity={0.7} onPress={() => this.gotoRoute('register')}>
               <Text style={styles.linkTextLeft}>{'忘记密码? '}</Text>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.7} onPress={() => this.gotoRoute('register')}>
             <Text style={styles.linkTextRight}>{'新用户注册'}</Text>
           </TouchableOpacity>
          </View>
        <View style={styles.submitText}>
         <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.onSubmit()}>
           <Text style={styles.buttonText}>{this.state.loading ? '正在登录...' : '登录'}</Text>
         </TouchableHighlight>
         </View>

       </View>
     );
   }

   onFocus(argument) {
     setTimeout(() => {

     }, 50);
   }

   onSubmit() {
     if (this.state.loading) {
       ToastAndroid.show('Please Wait . . .', ToastAndroid.SHORT);
       return;
     }

     let valid = true;

     Object.keys(this.state.data).map((val, key) => {
       if ([null, undefined, 'null', 'undefined', ''].indexOf(this.state.data[val]) > -1) valid = false;
     });

     if (!valid) return null;

     this.setState({loading: true});

     api.auth.login(this.state.data)
       .then((response) => {
         if (!response.ok) throw Error(response.statusText || response._bodyText);
         return response.json();
       })
       .then((responseData) => {
         console.log(responseData);
         ToastAndroid.show(JSON.stringify(responseData), ToastAndroid.LONG);
         this.onSuccess(responseData).done();
       })
       .catch((error) => {
         console.log(error);
         ToastAndroid.show(String(error).replace('Error: ',''), ToastAndroid.LONG);
       })
       .done(() => {
         this.setState({loading: false});
       });
   }

   async onSuccess(data) {
     try {
       await AsyncStorage.setItem(key, JSON.stringify(data));
     } catch (error) {
       ToastAndroid.show(String(error).replace('Error: ',''), ToastAndroid.LONG);
     }
   }

   goBack() {
     if (this.props.navigator) {
       this.props.navigator.pop();
     }
   }

   gotoRoute(name) {
     // console.log(this.props.navigator.push);
     // console.log(this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name);
     // console.log('******');
     if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
       this.props.navigator.push({name: name,component: Register,sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
     }
   }

   replaceRoute(name) {
     if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
       this.props.navigator.replace({name: name});
     }
   }
 }
