'use strict';
// var BASE = '';
// var ACCESS_TOKEN = '';


var apiSetup = {
  'MASTER_API_PATH': 'http://api.haigame7.com/', //主站
  'ACCESS_TOKEN': 'ABC12abc',
}
var userApi = {
  'GETVERIFYCODE1': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode1?accesstoken=' + apiSetup.ACCESS_TOKEN,
}
module.exports = {
  USER_API: userApi,
}

//这样写应该也行
// export {
//   USER_API: userApi,
// }
