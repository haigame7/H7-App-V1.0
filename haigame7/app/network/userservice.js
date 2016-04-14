'use strict';

import FecthService from './fetchservice';
import {ToastAndroid} from 'react-native';
import ApiConfig from '../constants/apiconfig';
export default{
  register(data) {
    // FecthService.doFecth();
  },

  /* 注册获取验证码 */
  getVerifiCode(phoneNumber,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.GETVERIFYCODE1,
        {'PhoneNumber':phoneNumber},
        callback
      );
  },
  /* 找回密码获取验证码 */
  getVerifiCode2(phoneNumber,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.GETVERIFYCODE2,
        {'PhoneNumber':phoneNumber},
        callback
      );
  },
  /* 注册 */
  registerByInfo(data,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.REGISTERUSER,
        {
          'PhoneNumber':data.phoneNumber,
          'PassWord':data.passWord,
          'VerifyCode':data.securityCode,
        },
        callback
      );
  },
  /* 重置密码 */
  resetPassword(data,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.RESETPASSWORD,
        {
          'PhoneNumber':data.phone,
          'PassWord':data.password,
          'VerifyCode':data.securitycode
        },
        callback
      );
  },
  /* 登录 */
  loginByInfo(data,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.LOGINUSER,
        {
          'PhoneNumber':data.phoneNumber,
          'PassWord':data.password,
        },
        callback
      );
  },

  /*更新用户信息*/
  updateUserInfo(data,callback) {
    FecthService.postFecth(
      ApiConfig.USER_API.UPDATE_USER_INFO,
      data,
      callback
    );
  },

  /*获取用户信息*/
  getUserInfo(phoneNumber,callback) {
    FecthService.postFecth(
      ApiConfig.USER_API.GET_USER_INFO,
      {
        'PhoneNumber':phoneNumber
      },
      callback
    );
  },

  /*获取用户游戏信息信息*/
  getUserGameInfo(phoneNumber,callback) {
    FecthService.postFecth(
      ApiConfig.USER_API.GET_USER_GAME_INFO,
      {
        'PhoneNumber':phoneNumber
      },
      callback
    );
  },
  /*获取用户消息列表*/
  getUserMessage(data,callback) {
    FecthService.postFecth(
      ApiConfig.USER_API.GET_USER_MESSAGE,
      {
        'UserID':data.userID,
        'StartPage': data.startpage,
        'PageCount': data.pagecount,
      },
      callback
    );
  },
  /*设置用户消息状态*/
  setMessageRead(data, callback){
    FecthService.postFecth(
      ApiConfig.USER_API.SET_MESSAGE_READ,
      {
        'MessageID':data.messageID,
      },
      callback
    );
  },


  /*提交游戏认证ID*/
  certifyGameID(data,callback) {
    FecthService.postFecth(
      ApiConfig.USER_API.CERTIFY_GAME_ID,
      data,
      callback
    );
  },

  /*更新用户游戏ID认证信息*/
  updateCertifyGameID(data,callback) {
    FecthService.postFecth(
      ApiConfig.USER_API.UPDATE_CERTIFY_GAME_ID,
      data,
      callback
    );
  },
  _urlForQueryAndPage(query: string, pageNumber: number): string {
    // var apiKey = API_KEYS[this.state.queryNumber % API_KEYS.length];
    // if (query) {
    //   return (
    //     API_URL + 'movies.json?apikey=' + apiKey + '&q=' +
    //     encodeURIComponent(query) + '&page_limit=20&page=' + pageNumber
    //   );
    // } else {
    //   // With no query, load latest movies
    //   return (
    //     API_URL + 'lists/movies/in_theaters.json?apikey=' + apiKey +
    //     '&page_limit=20&page=' + pageNumber
    //   );
    // }
  },
}
