'use strict'

  var Header = require('../common/headernav'); // 主屏
  var Icon = require('react-native-vector-icons/FontAwesome');
  var Util = require('../common/util');
import React,
  {
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
    ListView,
    RefreshControl,
    ToastAndroid,
    Alert
  } from 'react-native';
import styles from '../../styles/userstyle';
import Recharge from './recharge';
import AssertService from '../../network/assertservice';
import Spinner from 'react-native-loading-spinner-overlay';
// const jsonData = '[{"assertType" : "收入123", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"}, {"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"}, {"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"},{"assertType" : "收入1", "getWay": "氦金充值", "content": "+200","time": "2010/01/01"}]';
  const jsonData = '[{}]'
  export default class extends Component{
    constructor(props) {
      super(props);
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

      this.state = {
          dataSource: ds.cloneWithRows(['row1','row2']),
                  db: [],
        isRefreshing: false,
           footerMsg: "点击加载更多",
             content: undefined,
          totalAsset: 0,
              myRank: 0,
            phoneNum: this.props.phoneNum?this.props.phoneNum : '15101075739' ,
         isFetchData: true,
              keykey: 0,
              isOpen: true,
      }
    }

    componentWillMount() {

    }
    componentDidMount() {
      AssertService.getTotalAssertAndRank(this.state.phoneNum,(response) => {
        // console.log(response);
        if (response[0].MessageCode == '0') {
          this.setState({
            myRank: response[1].MyRank,
        totalAsset: response[1].TotalAsset,
            isOpen: false
          });
        } else {
          console.log('请求错误' + response[0].Message);
          this.setState({
            isOpen: false
          });
        }
        // this.setState({isOpen: false})
      });

      AssertService.fetchAssertList(this.state.phoneNum,(response) => {
        if (response[0].MessageCode == '0') {
          let newData = response[1];
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newData),
              db:newData,
          isOpen: false
          });
        } else {
          console.log('请求错误' + response[0].Message);
          this.setState({isOpen: false})
        }
      });
    }
    getData() {
      // let _ds = JSON.parse(JSON.stringify(['hu','haoran']));

      // let _ds = JSON.parse(jsonData);
      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithRows(_ds),
      //   loaded: true
      // });
    }

    gotoRecharge(name) {
      if (this.props.navigator && this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length-1].name != name) {
        this.props.navigator.push({name: name,component: Recharge,params:{data:this.state.data},sceneConfig:Navigator.SceneConfigs.FloatFromBottom});
      }
      return;
    }
    _onRefresh() {
      this.setState({
        isRefreshing: true
      });
      console.log("下拉刷新");
      setTimeout(()=>{
        this.setState({
          isRefreshing: false
        });
      },1000);
    }
    _onLoadMore() {
      console.log('8888888888');
      if (this.state.keykey > 3) {
        this.setState({
          footerMsg: "木有更多多数据了~~~~"
        });
      }else{
        this.setState({
          footerMsg: "正在加载....."
        });
        let jsonstr='[{"GainWay": "氦金充值", "VirtualMoney": "+200","GainTime": "2010/01/01"}]';
        let newData = JSON.parse(jsonstr)
        let data = this.state.db.concat(newData)
        //这等到有api在搞吧
        setTimeout(()=>{
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            loaded: true,
            footerMsg: "点击加载更多",
            keykey: this.state.keykey += 1,
            db: data
          });
        },2000);
      }
    }
    _renderRow(rowData, sectionID, rowID) {
      return(
        <View style={UserAssetStyle.assetListContainer}>
         <View style={UserAssetStyle.assetList} >
         <Text style={UserAssetStyle.assetText}>{rowData.GainWay}</Text>
         <Text style={UserAssetStyle.assetText}>{rowData.VirtualMoney}</Text>
         <Text style={UserAssetStyle.assetText}>{rowData.GainTime}</Text>
         </View>
        </View>
      );
    }
    _renderFooter() {
      return(
        <View>
          <TouchableOpacity
            onPress={this._onLoadMore.bind(this)}
            >
            <View style={{alignSelf: 'center'}}>
              <Text style={{color:'white'}}>
                {this.state.footerMsg}
              </Text></View>
          </TouchableOpacity>
        </View>
      );
    }
    render(){

      return (

        <View style={{flex:1}}>
          <View style={styles.bgImageWrapper}>
            <View style={styles.centerbg}>
            </View>
          </View>
          <Header screenTitle='氦金' isPop={true}  navigator={this.props.navigator}/>
          <Image source = {require('../../images/loginbg.jpg')} style={styles.centerheadbg} resizeMode = {"cover"}>
          <View style={[UserAssetStyle.centertab]}>
           <View>
              <View style={[UserAssetStyle.centertabname]}>
              <Icon name="upload" size={30} color={'#fff'} style={[{marginTop:-10,backgroundColor:'rgb(221, 49, 116)'}]} />
             <Text style={[{marginTop:5,color:'rgb(208, 46, 70)'}]}>总金额</Text>
             </View>
             <Text style={[UserAssetStyle.centertabattr]}>{this.state.totalAsset}</Text>

           </View>
          <View style={[UserAssetStyle.centersplitvertical]} ></View>
           <TouchableOpacity>
           <View style={[UserAssetStyle.centertabname]}>
           <Icon name="upload" size={30} color={'#fff'} style={[{marginTop:-10,backgroundColor:'rgb(221, 49, 116)'}]} />
          <Text style={[{marginTop:5,color:'rgb(208, 46, 70)'}]}>财富排行</Text>
          </View>
             <Text style={[UserAssetStyle.centertabattr]}>{this.state.myRank}</Text>

           </TouchableOpacity>
           </View>

          <View style={styles.submitText}>
          <TouchableHighlight style={[UserAssetStyle.button]} underlayColor={'#2bbbad'} onPress={() => this.gotoRecharge('recharge')}>
            <Text style={[UserAssetStyle.buttonText]} >{'氦金充值'}</Text>
          </TouchableHighlight>

          </View>
            <ListView
              style={{marginTop:-160}}
              dataSource={this.state.dataSource}
              // refreshControl={
              //     <RefreshControl
              //       refreshing={this.state.isRefreshing}
              //       onRefresh={this._onRefresh.bind(this)}
              //       tintColor="#ff0000"
              //       title="Loading..."
              //       colors={['#ff0000', '#00ff00', '#0000ff']}
              //       progressBackgroundColor="#ffff00"
              //     />
              //   }
              renderRow= {this._renderRow.bind(this)}
              renderFooter={this._renderFooter.bind(this)}
            />
          </Image>
          <Spinner visible={this.state.isOpen} />
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
View
