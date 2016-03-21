'use strict';


var apiSetup = {
  'MASTER_API_PATH': 'http://api.haigame7.com/', //主站
  'ACCESS_TOKEN': 'ABC12abc',
}
var userApi = {
  'GETVERIFYCODE1': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode1?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GETVERIFYCODE2': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode2?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'REGISTERUSER':apiSetup.MASTER_API_PATH + 'v1/User/Register?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'RESETPASSWORD':apiSetup.MASTER_API_PATH + 'v1/User/ResetPassWord?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'LOGINUSER':apiSetup.MASTER_API_PATH + 'v1/User/Login?accesstoken=' + apiSetup.ACCESS_TOKEN,
}

const assertApi = {
  'GETASSERTANDRANK' : apiSetup.MASTER_API_PATH +'v1/User/MyTotalAsset?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'FETCHASSERTLIST' : apiSetup.MASTER_API_PATH +'v1/User/MyAssetList?accesstoken='+ apiSetup.ACCESS_TOKEN,
}
const fightApi = {
  'GETUSERDEFAULTTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/MyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
}

module.exports = {
  USER_API: userApi,
  ASSERT_API: assertApi,
  FIGHT_API:fightApi,
}

//这样写应该也行
// export {
//   USER_API: userApi,
// }
