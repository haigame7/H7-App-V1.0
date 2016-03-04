'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import GlobalSetup from '../constants/GlobalSetup';
/** 网络请求 */
export default class FetchService {

  constructor() {
    super();
  }


  /*************************
   * 请求头                 *
   * @return {TokenHeader] *
   * @author aran.hu
   *************************/
  getTokenHeader() {
    let tHeader = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': ''
    }
    console.log('token header is:' + JSON.stringify(tHeader));
    return tHeader;
  }

/**
 * Fecth Request
 * @param  {[string]} url=''            [Request Url]
 * @param  {[map]} params_map=new Map() [Params Map] e.g {'name','aran.hu'}
 * @return {
 *         success: Fecth Response && Fecth Data
 *         fail: FailMsg
 * }
 * @author aran.hu
 */
  doFecth(url='',params_map=new Map()) {
    return(
      //console.log(params_map === null); //这个new出来的是个啥
      if(url === '' || params_map === null){
        console.log('传递参数错误');
        throw new Error(error);
        return;
      }
      console.log('网络请求' + url);
      fetch(url,{
        method: 'POST',//RESTFUL API
        headers: this.getTokenHeader(),
        body: JSON.stringify(params_map)
      })
      .then((response) => {
          const response_status = response.status;
          if(response_status < 400){
            console.log(JSON.parse(response));
          }
      })
      .then((data) => {
        const data_status = data.status;
        if(data_status < 400){
            console.log(JSON.parse(data));
        }

      })
      .catch((error) => {
        //设置一个异常捕获工具,现在就先log了
        console.log(JSON.parse(error));
        throw new Error(error);
      })
    )
  }
}
