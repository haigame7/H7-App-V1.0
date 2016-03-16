'use strict'

 var React = require('react-native');
 var Header = require('../common/headernav'); // 主屏
 var Icon = require('react-native-vector-icons/FontAwesome');
 var Util = require('../common/util');
 var {
   View,
   Component,
   Text,
   TextArea,
   TextInput,
   Image,
   Navigator,
   TouchableHighlight,
   StyleSheet,
   ScrollView
   } = React;

  import styles from '../../styles/userstyle';


 export default class extends Component{
   constructor(props) {
     super(props);
     this.state = {
       data: {
         money:'',
         certifyid:'000000',
       },
       content:undefined,
       messages: []
     }
   }
   renderMessages() {
       if (this.state.messages.length > 0) {
         let messages = this.state.messages.map((val, key) => {
           if (val.message) return <Text style={styles.message} key={key}>{val.message}</Text>;
         });

         return messages;
       }
     }
   selectRecharge(money){
     this.setState({
       data:{money:money},
     });
     console.log(this.state.data.money);
     return;
   }

   gotoRecharge(money,argument) {
     console.log('reacharge');
     let keys = Object.keys(this.state.data).map((val,key) => {
      if ([null, undefined, 'null', 'undefined', ''].indexOf(this.state.data[val]) > -1) return val;
    });
    this.setState({messages: []});
    argument.map((val, key) => {
      if (keys.indexOf(val.ref) > -1) this.setState({messages: this.state.messages.concat(val)});
    });
    if(this.state.messages.length>0){
      console.log('message wrong'+this.state.messages.length);
      return;
    }

     return;
   }

   render(){
     let fields = [
       {ref: 'money', placeholder: '请输入充值金额', keyboardType: 'numeric',placeholderTextColor: 'white', color:'white', secureTextEntry: false, message: '充值金额不能为空', style: [styles.inputText]},
     ]
     return (
       <View >

       <Header initObj={{title:'充值'}}   navigator={this.props.navigator}></Header>
         <Image source = {require('../../images/loginbg.jpg')} style = {styles.loginbg} resizeMode = {"cover"}>
         <View key={'messages'}>
           {this.renderMessages()}
         </View>

         <View key={'money'} style={styles.inputContainer}>
        <Text style={[RechargeStyle.inputTitleText,{fontSize:14,textAlign:'center',marginLeft:0}]}>{'氦金充值:'} <Text style={[RechargeStyle.inputTitleText,{color:'rgb(230, 193, 39)'}]}>{'1元 = 10氦金'}</Text></Text>
           <TextInput {...fields[0]} onChangeText={(text) => this.state.data.money = text} defaultValue={this.state.data.money.toString()} />
         </View>

           <Text style={[RechargeStyle.inputTitleText,{fontSize:14,textAlign:'center',marginLeft:0}]}>其他金额:</Text>
       <View style={[RechargeStyle.rechargeFlow]}>
         <TouchableHighlight onPress={() => this.selectRecharge(50)} style={this.state.data.money==50?RechargeStyle.rechargeBorderActive:RechargeStyle.rechargeBorder} >
           <Text style={this.state.data.money==50?RechargeStyle.rechargeTextActive:RechargeStyle.rechargeText} >{'50氦金'}</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => this.selectRecharge(100)} style={this.state.data.money==100?RechargeStyle.rechargeBorderActive:RechargeStyle.rechargeBorder}>
           <Text style={this.state.data.money==100?RechargeStyle.rechargeTextActive:RechargeStyle.rechargeText}>{'100氦金'}</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => this.selectRecharge(200)} style={this.state.data.money==200?RechargeStyle.rechargeBorderActive:RechargeStyle.rechargeBorder} >
           <Text style={this.state.data.money==200?RechargeStyle.rechargeTextActive:RechargeStyle.rechargeText} >{'200氦金'}</Text>
           </TouchableHighlight>
       </View>
       <View style={[RechargeStyle.rechargeFlow,{marginTop:10,marginLeft:50}]}>
           <TouchableHighlight onPress={() => this.selectRecharge(500)} style={this.state.data.money==500?RechargeStyle.rechargeBorderActive:RechargeStyle.rechargeBorder} >
           <Text style={this.state.data.money==500?RechargeStyle.rechargeTextActive:RechargeStyle.rechargeText}>{'500氦金'}</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => this.selectRecharge(1000)} style={this.state.data.money==1000?RechargeStyle.rechargeBorderActive:RechargeStyle.rechargeBorder} >
           <Text style={this.state.data.money==1000?RechargeStyle.rechargeTextActive:RechargeStyle.rechargeText} >{'1000氦金'}</Text>
           </TouchableHighlight>
         </View>
         <View style={styles.submitText}>
         <TouchableHighlight style={this.state.loading ? styles.buttonDisabled : styles.button} underlayColor={'#2bbbad'} onPress={() => this.gotoRecharge(this.state.data.money,fields)}>
           <Text style={styles.buttonText} >{'确认充值'}</Text>
         </TouchableHighlight>

         </View>
         </Image>

     </View>
     );
   }
 }
 var RechargeStyle = StyleSheet.create({
  rechargeFlow:{
    flexDirection:'row',
    width:Util.size.width,
    left:30,
  },
  rechargeBorder:{
    marginLeft:10,
    width:Util.size.width/4,
    height:42,
    borderRadius:2,
    borderWidth:1,
    borderColor:'rgb(150, 150, 150)',
  },
  rechargeBorderActive:{
    marginLeft:10,
    width:Util.size.width/4,
    height:42,
    borderRadius:2,
    borderWidth:1,
    borderColor:'red',
  },
  rechargeText:{
   fontSize:15,
   textAlign:'center',
   marginTop:10,
   color:'rgb(150, 150, 150)',
  },
  rechargeTextActive:{
   fontSize:15,
   textAlign:'center',
   marginTop:10,
   color:'red',
  },
  inputTitleText:{
   marginBottom:10,
   marginLeft:40,
   color:'rgb(150, 150, 150)',
  },
  copyCertify:{
   left:Util.size.width-70,
   marginTop:-35,
   marginLeft:-5,
   color:'rgb(150, 150, 150)',
  },
  centertextareacount:{
   height:30,
   color:'rgb(255,255,255)',
  },
  });
