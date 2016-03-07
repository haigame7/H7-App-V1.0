'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import GlobalSetup from '../constants/globalsetup';
/** 网络请求 */
export default{
  /*************************
   * 请求头                 *
   * @return {TokenHeader] *
   * @author aran.hu
   *************************/
  getTokenHeader() {
    let tHeader = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    // console.log('token header is:' + JSON.stringify(tHeader));
    return tHeader;
  },

  /**
   * Get 方法可以
   * @param  {[type]} api [path]
   * @param  {[type]} v   [params]
   * @return {[type]}     [description]
   */
  _api(api, v){
  	if(v instanceof Object){
  		var p = Object.keys(v).map(function(k) {
  			return encodeURIComponent(k) + "=" + encodeURIComponent(v[k]);
  		}).join('&');
  	}else if(v){
  		var p = v;

    }else{
      var p ='';
  	}
    // var _url = GlobalSetup.API_CONFIG.API_PATH + api + '?access_token=' + GlobalSetup.API_CONFIG.ACCESS_TOKEN + '&' + p;
    // console.log('网络请求' + _url);
  	return '';
  },


/**
 * Post Fecth Request
 * @param  {[string]} url=''            [Request Url]
 * @param  {[map]} params_map=new Map() [Params Map] e.g {'name','aran.hu'}
 * @return {
 *         success: Fecth Response && Fecth Data
 *         fail: FailMsg
 * }
 * @author aran.hu
 */
  postFecth(url,params,v) {
    // ToastAndroid.show(JSON.stringify(params), ToastAndroid.SHORT);
    // return '';
    console.log(this.getTokenHeader());
    console.log(url);
    // ToastAndroid.show('开始请求', ToastAndroid.SHORT);
    // ToastAndroid.show(url, ToastAndroid.SHORT);
    // return '';
    return(

      fetch(url,{
        method: 'POST',//RESTFUL API
        headers: this.getTokenHeader(),
        body: JSON.stringify(params)
      })
      .then((response) => response.json())
      .then((responseText) => {
        var _status = responseText.status;
        // console.log('response status code ' + response_status);
        // if(data_status < 400){
        //   console.log(JSON.parse(data));
        // }
        return responseText;
      })
      .catch((error) => {
        ToastAndroid.show('error.messages', ToastAndroid.SHORT);
        return 'FAIL';
      })
    )
  },

  /**
   * Get Fetch Request
   * @param  {[type]} url: string        [请求URL]
   * @return {[type]}      [description]
   */
  getFetch(url: string) {
    fetch(url)
    .then((response) => response.json())
    .then((responseText) =>{
      return responseText;
    })
    .catch((error) => {
      console.log(JSON.parse(error));
      throw new Error(error);
    })
    .done()
  },

}
