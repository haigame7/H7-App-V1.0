'use strict';

import FecthService from './fetchservice';
import {ToastAndroid} from 'react-native';
import ApiConfig from '../constants/apiconfig';
export default{
  register(data) {
    // FecthService.doFecth();
  },

  /* 注册获取验证码 */
  getVerifiCode(phone,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.GETVERIFYCODE1,
        {'PhoneNumber':phone},
        callback
      );
  },
  /* 找回密码获取验证码 */
  getVerifiCode2(phone,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.USER_API.GETVERIFYCODE2,
        {'PhoneNumber':phone},
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
          'PhoneNumber':data.phone,
          'PassWord':data.password,
          'VerifyCode':data.securitycode
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
          'PhoneNumber':data.phone,
          'PassWord':data.password,
        },
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
