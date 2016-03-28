'use strict';

import FecthService from './fetchservice';
import {ToastAndroid} from 'react-native';
import ApiConfig from '../constants/apiconfig';
export default{

  /* 获取赛事列表 */
  getMatchList(callback) {
    /**
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.MATCH_API.GETMATCHLIST,
        {},
        callback
      );
  },
  /*获取约战列表*/
  getBoBoList(data,callback){
    /**
     * @param  {[type]}   {'MatchID':matchid}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.MATCH_API.GETBOBOLIST,
        {
          'MatchID':data.matchID,
        },
        callback
      );
  },
  /*获取约战列表*/
  getBoBoCount(data,callback){
    /**
     * @param  {[type]}   {'MatchID':matchid}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.MATCH_API.GETBOBOCOUNT,
        {
          'MatchID':data.MatchID,
          'BoboID':data.BoBoID
        },
        callback
      );
  },
  /*报名参赛*/
  joinMatch(data,callback){
    /**
     * @param  {[type]}   {'MatchID':matchid}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.MATCH_API.JOINMATCH,
        {
          'MatchID':data.matchID,
          'BoboID':data.boboID,
          'TeamID':data.teamID,
          'PhoneNumber':data.phone,
        },
        callback
      );
  },
  /*我的报名赛事*/
  myJoinMatch(data,callback){
    /**
     * @param  {[type]}   {'MatchID':matchid}             [params]
     * @param  {Function} callback
     * @return response content {MessageCode: 0, Message: ""}                       [回调方法]
     */
      FecthService.postFecth(
        ApiConfig.MATCH_API.MYJOINMATCH,
        {
          'MatchID':data.matchID,
          'TeamID':data.teamID,
        },
        callback
      );
  },
}
