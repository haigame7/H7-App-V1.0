'use strict';

import FecthService from './fetchservice';
import ApiConfig from '../constants/apiconfig';
import {ToastAndroid} from 'react-native';

export default {

  getTotalAssertAndRank(phone,callback) {
    FecthService.postFecth(
      ApiConfig.ASSERT_API.GETASSERTANDRANK,
      {'PhoneNumber':phone},
      callback
    );
  }
}
