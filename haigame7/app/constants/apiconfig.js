'use strict';


var apiSetup = {
  'MASTER_API_PATH': 'http://api.haigame7.com/', //主站
  'ACCESS_TOKEN': 'ABC12abc',
}
var userApi = {
  'GETVERIFYCODE1': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode1?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GETVERIFYCODE2': apiSetup.MASTER_API_PATH + 'v1/User/VerifyCode2?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'REGISTERUSER': apiSetup.MASTER_API_PATH + 'v1/User/Register?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'RESETPASSWORD': apiSetup.MASTER_API_PATH + 'v1/User/ResetPassWord?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'LOGINUSER': apiSetup.MASTER_API_PATH + 'v1/User/Login?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'UPDATE_USER_INFO': apiSetup.MASTER_API_PATH + 'v1/User/UpdateUserInfo?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GET_USER_INFO': apiSetup.MASTER_API_PATH + 'v1/User/UserInfo?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'GET_USER_GAME_INFO': apiSetup.MASTER_API_PATH + 'v1/User/MyGameInfo?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'CERTIFY_GAME_ID': apiSetup.MASTER_API_PATH + 'v1/User/CertifyGameID?accesstoken=' + apiSetup.ACCESS_TOKEN,
  'UPDATE_CERTIFY_GAME_ID': apiSetup.MASTER_API_PATH + 'v1/User/UpdateCertifyGameID?accesstoken=' + apiSetup.ACCESS_TOKEN,
}

const assertApi = {
  'GETASSERTANDRANK' : apiSetup.MASTER_API_PATH +'v1/User/MyTotalAsset?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'FETCHASSERTLIST' : apiSetup.MASTER_API_PATH +'v1/User/MyAssetList?accesstoken='+ apiSetup.ACCESS_TOKEN,
}
const fightApi = {
  'GETUSERDEFAULTTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/MyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETFIGHTTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/TeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETALLFIGHTINFO':apiSetup.MASTER_API_PATH + 'v1/Fight/AllFightList?accesstoken='+apiSetup.ACCESS_TOKEN,
  'MAKECHANLLENGE':apiSetup.MASTER_API_PATH + 'v1/Fight/MakeChallenge?accesstoken='+apiSetup.ACCESS_TOKEN,
  'GETUSERFIGHT':apiSetup.MASTER_API_PATH + 'v1/Fight/MyFight?accesstoken='+apiSetup.ACCESS_TOKEN,
}
const rankApi = {
  'USERRANK':apiSetup.MASTER_API_PATH +'/v1/Rank/UserRank?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'TEAMRANK':apiSetup.MASTER_API_PATH + 'v1/Rank/TeamRank?accesstoken='+apiSetup.ACCESS_TOKEN,
}

module.exports = {
  USER_API: userApi,
  ASSERT_API: assertApi,
  FIGHT_API:fightApi,
  RANK_API:rankApi,
}

//这样写应该也行
// export {
//   USER_API: userApi,
// }
