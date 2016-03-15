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
  TouchableOpacity,
  Navigator,
  TouchableHighlight,
  StyleSheet,
  ScrollView
  } = React;

 import styles from '../../styles/userstyle';
 import Recharge from './recharge';


export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {
        dota2id:undefined,
        certifyid:'000000',
      },
      content:undefined,
      messages: []
    }
  }

  gotoRecharge(name) {
    if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
      this.props.navigator.push({name: name,component: Recharge,params:{data:this.state.data},sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
    }
    return;
  }

  render(){

    return (
      <View >
      <View style={styles.bgImageWrapper}>
      <View style={styles.centerbg}>
      </View>
      </View>
      <Header initObj={{title:'我的资产'}}   navigator={this.props.navigator}></Header>
        <Image source = {require('../../images/loginbg.jpg')} style={styles.centerheadbg} resizeMode = {"cover"}>

        <View style={[UserAssetStyle.centertab]}>
         <View>
            <View style={[UserAssetStyle.centertabname]}>
            <Icon name="upload" size={30} color={'#fff'} style={[{marginTop:-10,backgroundColor:'rgb(221, 49, 116)'}]} />
           <Text style={[{marginTop:5,color:'rgb(208, 46, 70)'}]}>总金额</Text>
           </View>
           <Text style={[UserAssetStyle.centertabattr]}>8888</Text>

         </View>
        <View style={[UserAssetStyle.centersplitvertical]} ></View>
         <TouchableOpacity>
         <View style={[UserAssetStyle.centertabname]}>
         <Icon name="upload" size={30} color={'#fff'} style={[{marginTop:-10,backgroundColor:'rgb(221, 49, 116)'}]} />
        <Text style={[{marginTop:5,color:'rgb(208, 46, 70)'}]}>财富排行</Text>
        </View>
           <Text style={[UserAssetStyle.centertabattr]}>8888</Text>

         </TouchableOpacity>
         </View>

        <View style={styles.submitText}>
        <TouchableHighlight style={[UserAssetStyle.button]} underlayColor={'#2bbbad'} onPress={() => this.gotoRecharge('recharge')}>
          <Text style={[UserAssetStyle.buttonText]} >{'氦金充值'}</Text>
        </TouchableHighlight>

        </View>
        </Image>
        <View style={UserAssetStyle.assetListContainer}>
         <View style={UserAssetStyle.assetList} >
         <Text style={UserAssetStyle.assetText}>{'收入'}</Text>
         <Text style={UserAssetStyle.assetText}>{'充值氦金'}</Text>
         <Text style={UserAssetStyle.assetText}>{'+200'}</Text>
         <Text style={UserAssetStyle.assetText}>{'2016/02/23'}</Text>
         </View>
         <View style={UserAssetStyle.assetList}>
         <Text style={UserAssetStyle.assetText}>{'收入'}</Text>
         <Text style={UserAssetStyle.assetText}>{'充值氦金'}</Text>
         <Text style={UserAssetStyle.assetText}>{'+200'}</Text>
         <Text style={UserAssetStyle.assetText}>{'2016/02/23'}</Text>
         </View>
         <View style={UserAssetStyle.assetList}>
         <Text style={UserAssetStyle.assetText}>{'收入'}</Text>
         <Text style={UserAssetStyle.assetText}>{'充值氦金'}</Text>
         <Text style={UserAssetStyle.assetText}>{'+200'}</Text>
         <Text style={UserAssetStyle.assetText}>{'2016/02/23'}</Text>
         </View>
         <View style={UserAssetStyle.assetList}>
         <Text style={UserAssetStyle.assetText}>{'收入'}</Text>
         <Text style={UserAssetStyle.assetText}>{'充值氦金'}</Text>
         <Text style={UserAssetStyle.assetText}>{'+200'}</Text>
         <Text style={UserAssetStyle.assetText}>{'2016/02/23'}</Text>
         </View>
        </View>
    </View>
    );
  }
}
var UserAssetStyle = StyleSheet.create({
  button: {
      backgroundColor: '#fff',
      borderRadius:5,
      borderWidth:1,
        marginTop:40,
      height:45,
      borderColor:'red',
      padding: 15,
      justifyContent: 'center',
      alignSelf: 'stretch'
  },
  buttonText: {
      fontSize: 16,
      fontWeight:'bold',
      color: 'rgb(208, 46, 70)',
      alignSelf: 'center'
  },
  centertab:{
    flexDirection:'row',
    top:Util.size.height*1/30,
  },
  centertabname:{
    marginTop:20,
    flexDirection:'row',
    marginLeft:Util.size.width*1/6,
    marginRight:Util.size.width*1/6,
  },
  centertabattr:{
    color:'rgb(230, 193, 39)',
    fontSize:26,
    fontWeight:'normal',
    marginTop:5,
    marginLeft:Util.size.width*1/6,
    marginRight:Util.size.width*1/6,
  },
  centersplitvertical:{
    marginTop:10,
    backgroundColor:'rgb(255,255,255)',
    width:Util.pixel,
    left:-10,
    height:Util.size.width*1/8,
    marginBottom:20,

  },
  assetListContainer:{
   margin:10,

  },
 assetList:{
 flexDirection:'row',
 marginBottom:20,
 width:Util.size.width,
 },
 assetText:{
   alignItems:'flex-start',
   marginRight:Util.size.width/8+5,
   color:'rgb(150, 150, 150)',
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
certifyRuleText:{
  marginTop:20,
  marginLeft: 0,
  width: Util.size.width - 70,

},
centertextareacount:{
  height:30,
  color:'rgb(255,255,255)',
},

});
