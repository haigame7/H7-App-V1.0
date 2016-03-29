'use strict';

import FecthService from './fetchservice';
import {ToastAndroid} from 'react-native';
import ApiConfig from '../constants/apiconfig';
export default{

  /* 获取我的战队 */
  getUserDefaultTeam(phone,callback) {
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.TEAM_API.GETUSERDEFAULTTEAM,
        {
          'Creater':phone,
        },
        callback
      );
  },
  /*获取约战列表*/
  getTeamList(data,callback){
    /**
     * @param  {[type]}   ApiConfig.USER_API.GETVERIFYCODE1 [api path]
     * @param  {[type]}   {'PhoneNumber':phone}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.TEAM_API.GETTEAMLIST,
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

}
