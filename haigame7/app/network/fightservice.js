'use strict';

import FecthService from './fetchservice';
import {ToastAndroid} from 'react-native';
import ApiConfig from '../constants/apiconfig';
export default{

  /* 获取我的战队 */
  getUserDefaultTeam(data,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.FIGHT_API.GETUSERDEFAULTTEAM,
        {
          'Creater':data.phone,
        },
        callback
      );
  },
  /*获取约战列表*/
  getFightTeamList(data,callback){
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.FIGHT_API.GETFIGHTTEAMLIST,
        {
          'createUserID':data.createUserID,
          'Type':data.type,
          'Sort':data.sort,
          'StartPage':data.startpage,
          'PageCount':data.pagecount,
        },
        callback
      );
  },
  /* 获取团队排行 */
  getAllFightInfo(data,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.FIGHT_API.GETALLFIGHTINFO,
        {
          'StartPage':data.startpage,
          'PageCount':data.pagecount,
        },
        callback
      );
  },
}