'use strict';

import FecthService from './fetchservice';
import ApiConfig from '../constants/apiconfig';
import {ToastAndroid} from 'react-native';

export default {

  getTotalAssertAndRank(phone,callback) {
    FecthService.postFecth(
      ApiConfig.ASSERT_API.GET_ASSERTANDRANK,
      {'PhoneNumber':phone},
      callback
    );
  },

  fetchAssertList(phone,callback) {
    FecthService.postFecth(
      ApiConfig.ASSERT_API.FETCH_ASSERTLIST,
      {'PhoneNumber':phone},
      callback
    );
  },

  deleteAssetRecord(outTradeno,callback) {
    FecthService.postFecth(
      ApiConfig.ASSERT_API.DELETE_ASSETRECORD,
      {'OutTradeno':outTradeno},
      callback
    );
  }
}
