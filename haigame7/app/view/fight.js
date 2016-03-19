'use strict';
/**
 * APPs我的约战
 * @return {[SplashScreen Component]}
 * @author aran.hu
 */
var React = require('react-native');
var Header = require('./common/headernav'); // 主屏
var Icon = require('react-native-vector-icons/FontAwesome');
var Util = require('./common/util');

var Progress = require('react-native-progress');
var {
  View,
  Text,
  Image,
  Component,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  ScrollView
  } = React;

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import MakeChanllenge from './fight/makechanllenge';
import FightState from './fight/fightstate';

export default class extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navbar: 0,
      subnavbar:1,
      isOpen: false,
      isDisabled: false,
      invite:0,
      data:{
        odd:50,
      },
    }
  }
  _openModa() {
    this.setState({isOpen: true});
  }
  _closeModa() {
    console.log('******');
     this.setState({isOpen: false});
  }
  gotoRoute(name){
    if (name == 'makechanllenge') {
        if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
            this.props.navigator.push({ name: name, component: MakeChanllenge, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
        }
    } else if (name == 'fightstate') {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length - 1].name != name) {
          this.props.navigator.push({ name: name, component: FightState, sceneConfig: Navigator.SceneConfigs.FloatFromBottom });
      }
    }
  }

  render(){

    return (
      <View style={styles.container}>

           <View style={styles.nav}>
           <View style={styles.sub_nav}>
           <TouchableOpacity style={styles.sub_nav_item} >
           <Text style={styles.sub_nav_item_text}>{'我的约战'}</Text>
          <Text style={[styles.sub_nav_item_text,{color:'rgb(208, 46, 70)',fontSize:14,top:-3}]}>{'(10)'}</Text>
           <View style={styles.sub_nav_item_line}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.sub_nav_item} onPress={()=>this.gotoRoute('fightstate')}>
           <Text style={styles.sub_nav_item_text}>{'约战动态'}</Text>
          <Text style={[styles.sub_nav_item_text,{color:'rgb(208, 46, 70)',fontSize:14,top:-3}]}>{'(10)'}</Text>
           </TouchableOpacity>
           </View>
          <View style={[styles.infosplit]}></View>
          </View>
          <View style={[styles.centerbg]}>
          <View style={[styles.teamrecruit]}>
            <TouchableOpacity>
            <Image style={[styles.teamimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
           </TouchableOpacity>
        {/*content*/}
          <View style={[styles.teamcontent]}>
           <View style={[styles.teamrowtext,{marginTop:Util.pixel*20}]}>
           <Text style={[styles.teamcontenttext,{fontSize:15,color:'rgb(230, 193, 39)',fontWeight:'bold'}]}>{'犀利拍立冬至'}</Text>
           </View>
           <View style={[styles.teamrowtext]}>
           <Text style={[styles.teamcontenttext,{fontSize:14,fontWeight:'bold',color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
           <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
           <Text style={[styles.teamcontenttext,{fontSize:14,fontWeight:'bold',color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
           <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
           </View>
           {/*胜率*/}
           <View style={[styles.teamrowtext]}>
           <Text style={[styles.teamcontenttext,{fontSize:14,color:'#fff',}]}>{'胜率: '}{this.state.data.odd}{'%'}</Text>
           <Progress.Bar progress={0.5} width={120} color={'rgb(230, 193, 39)'} unfilledColor={'rgb(50,50,50)'} style={{top:Util.pixel*15,}} />
           </View>
           {/*胜负*/}
            <View style={[styles.teamrowtext]}>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'战'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'胜'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'负'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            <View style={[styles.circletext]}>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'拒'}</Text>
            </View>
            <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
            </View>
            {/*胜负end*/}
           </View>
            {/*胜率end*/}
           <TouchableOpacity style={styles.teamangleright} onPress={this._openModa.bind(this)}>
           <Text style={{fontSize:12,color:'rgb(55, 110, 161)'}}>{'约战规则'}</Text>
           <Icon name='angle-right' size={13} style={{color:'rgb(55, 110, 161)',marginLeft:Util.pixel*7,marginBottom:Util.pixel*10}} />
           </TouchableOpacity>
          </View>
              {/*teamrecruitend*/}
           <View style={[styles.teamsplit]}></View>
           <View style={[styles.teamlist]}>
             <TouchableOpacity>
             <Image style={[styles.teamrecruitimage,]} source={{uri:'http://images.haigame7.com/logo/20160216133928XXKqu4W0Z5j3PxEIK0zW6uUR3LY=.png'}} />
            </TouchableOpacity>
         {/*content*/}
           <View style={[styles.teamcontent]}>
            <View style={[styles.teamrowtext,{marginTop:Util.pixel*20}]}>
            <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(230, 193, 39)'}]}>{'战队名称'}</Text>
            </View>
            <View style={[styles.teamrowtext]}>
            <Text style={[styles.teamcontenttext,{fontSize:13,color:'rgb(230, 193, 39)'}]}>{'战斗力:'}</Text>
            <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
            <Text style={[styles.teamcontenttext,{fontSize:13,color:'rgb(230, 193, 39)',marginLeft:10}]}>{'氦金:'}</Text>
            <Text style={[styles.teamcontenttext,{fontSize:14,color:'rgb(208, 46, 70)',marginLeft:10}]}>{'12345'}</Text>
            </View>
            {/*胜率*/}
            <View style={[styles.teamrowtext]}>
            <Text style={[styles.teamcontenttext,{fontSize:14,color:'#fff',}]}>{'胜率: '}{this.state.data.odd}{'%'}</Text>
            <Progress.Bar progress={0.5} width={120} color={'rgb(230, 193, 39)'} unfilledColor={'rgb(50,50,50)'} style={{top:Util.pixel*15,}} />
            </View>
            {/*胜负*/}
             <View style={[styles.teamrowtext]}>
             <View style={[styles.circletext]}>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'战'}</Text>
             </View>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
             <View style={[styles.circletext]}>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'胜'}</Text>
             </View>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
             <View style={[styles.circletext]}>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'负'}</Text>
             </View>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
             <View style={[styles.circletext]}>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'拒'}</Text>
             </View>
             <Text style={[styles.teamcontenttext,{fontSize:12,color:'#fff',}]}>{'1000'}</Text>
             </View>
             {/*胜负end*/}
            </View>
             {/*胜率end*/}
            <TouchableOpacity style={styles.teambuttonright} onPress={()=>this.gotoRoute('makechanllenge')}>
            <Text style={styles.btnfontinvite}>{'发起约战'}</Text>
            </TouchableOpacity>
           </View>
               {/*teamrecruitend*/}
            <View style={[styles.teamsplit]}></View>
          </View>
            {/*centerbgend*/}
        {/*modal*/}
        <Modal isOpen={this.state.isOpen}  forceToFront={true} onClosed={this._closeModa.bind(this)}style={[styles.modal]} position={"center"} >
           <View style={styles.modalttitle}>
             <Text style={styles.modalttitletext}>氦7约战规则</Text>
           </View>
           <ScrollView style={styles.modalscrollcontainer} showsVerticalScrollIndicator={true} >
             <Text style={styles.scrolltext}>{'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊\n'}
              {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
            {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
              {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
              {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
              {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
              {'说明：今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊今天天天气好晴朗啊啊啊 啊啊啊啊 啊啊啊啊\n'}
          </Text>

           </ScrollView>
           <View style={styles.modalbuttoncontainer}>
             <Button style={styles.modalbutton} onPress={this._closeModa.bind(this)} >关闭</Button>
              <Button style={styles.modalbutton} onPress={this._closeModa.bind(this)} >已阅读</Button>
           </View>
         </Modal>
     </View>

    );
  }
}
var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0
  },
  modal: {
    marginBottom:10,
    height: Util.size.height-10,
    width:Util.size.width-20,
    borderRadius:5,
    backgroundColor: "#292929",
  },
  modalttitle:{
    backgroundColor:'rgb(50,50,50)',
    height:Util.pixel*80,
    top:Util.pixel*10,
  },
 modalttitletext:{
   color:'rgb(200,200,200)',
   fontSize:18,
   top:Util.pixel*10,
   textAlign:'center',
 },
 modalscrollcontainer:{
   height:10,
 },
 modalbuttoncontainer:{
   position:'absolute',
   flexDirection:'row',
   top:Util.size.height*3/4,
   height:Util.pixel*50,
   justifyContent:'center',
 },
 modalbutton:{
   backgroundColor:'#D31B25',
   width:Util.size.width/2-10,
   borderRadius:2,
   textAlign:'center',
  height:Util.pixel*90,
 },
 scrolltext:{
    color:'rgb(100,100,100)',
    margin:Util.pixel*20,
    fontSize:14,
    lineHeight:30,
 },
  teamlist:{
    height:Util.size.height*13/72,
    flexDirection:'row',
  },
  teamrowtext:{
    flexDirection:'row',
  },
  teamrecruit:{
    height:Util.size.height*3/16,
    flexDirection:'row',
  },
  teamimage:{
    width:80,
    height:80,
    margin:10,
    borderRadius: 40,
  },
  teamrecruitimage:{
    width:50,
    height:50,
    margin:10,
    marginTop:25,
    borderRadius: 25,
  },
  teamangleright:{
    flexDirection:'row',
    top:Util.pixel*30,
    left:Util.pixel*10,
  },
  teambuttonright:{
    width:Util.size.width*19/100,
    height:Util.pixel*65,
    left:Util.pixel*50,
    top:Util.pixel*30,
    borderRadius:5,
    backgroundColor:'rgb(208, 46, 70)',
  },
  btnfontinvite:{
  textAlign:'center',
  top:Util.pixel*16,
  fontSize:13,
  color:'#fff',
  fontWeight:'bold'
  },
  teamcontenttext:{
    color:'rgb(150,150,150)',
    fontSize:12,
    top:Util.pixel*10,
    marginBottom:Util.pixel*8,
  },
  teamsplit:{
    position:'absolute',
    left:0,
    height:Util.pixel,
    width:Util.size.width,
    backgroundColor:'rgb(50,50,50)',
  },
  teamheroimagecontainer:{
       margin:10,
       top:Util.pixel*10,
       flexDirection:'row',
       borderRadius: 5,
  },
  infosplit:{
    position:'absolute',
    left:0,
    marginTop:Util.pixel*65-1,
    height:Util.pixel,
    width:Util.size.width,
    backgroundColor:'rgb(50,50,50)',
  },
  centerbg: {
     flex:1,
     backgroundColor:'rgb(0, 0, 0)',
     height: Util.size.height,
     width: Util.size.width,
 },

  nav:{
  height:Util.pixel*65,
   flexDirection:'row',
   backgroundColor:'rgb(0, 0, 0)'
  },
  sub_nav:{
    position:'absolute',
    flexDirection:'row',
    left:0,
    width:Util.size.width,
    height:Util.size.height/18,
  },
  nav_item:{

  left:Util.size.width/5,
  top:Util.pixel*25,
  marginRight:Util.size.width*3/10,
  },
  sub_nav_item:{
      flexDirection:'row',
    left:Util.size.width/6,
    top:Util.pixel*20,
    marginRight:Util.size.width*1/5,
  },
  nav_item_line:{
    position:'absolute',
    left:-Util.size.width/6,
    marginTop:Util.pixel*30,
    height:Util.pixel*4,
    width:Util.size.width*7/15,
    backgroundColor:'rgb(120,120,120)',
  },
  nav_item_line_active:{
    position:'absolute',
    left:-Util.size.width/6,
    marginTop:Util.pixel*30,
    height:Util.pixel*4,
    width:Util.size.width*7/15,
    backgroundColor:'red',
  },
  nav_item_text:{
   fontSize:15,
   color:'rgb(150,150,150)'
 },
 nav_item_text_active:{
  fontSize:15,
  color:'red'
},
  sub_nav_item_text:{
   fontSize:12,
  marginRight:Util.pixel*20,
   color:'rgb(150,150,150)'
 },

 sub_nav_item_line:{
   position:'absolute',
   width:Util.pixel,
   height:Util.pixel*30,

   left:Util.size.width/3,
   backgroundColor:'rgb(150,150,150)',
 }
});
