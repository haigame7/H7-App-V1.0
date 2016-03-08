'use strict';

import FecthService from './fetchservice';
import {ToastAndroid} from 'react-native';
import ApiConfig from '../constants/apiconfig';
export default{
  register(data) {
    // FecthService.doFecth();
  },
  getVerifiCode(phone) {
      // ToastAndroid.show(phone, ToastAndroid.SHORT);
      let result = FecthService.postFecth(ApiConfig.USER_API.GETVERIFYCODE1,{'PhoneNumber':phone});
      console.log(result.Message);
      // ToastAndroid.show(GlobalSetup.API_CONFIG.API_PATH, ToastAndroid.SHORT);
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
