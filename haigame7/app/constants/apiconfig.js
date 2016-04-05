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
  'NOTEAMUSERLIST':apiSetup.MASTER_API_PATH +'/v1/User/NoTeamUserList?accesstoken='+ apiSetup.ACCESS_TOKEN,
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
const matchApi = {
  'GETMATCHLIST':apiSetup.MASTER_API_PATH + 'v1/Match/MatchList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETBOBOLIST':apiSetup.MASTER_API_PATH +'v1/Match/BoBoList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETBOBOCOUNT':apiSetup.MASTER_API_PATH +'v1/Match/BoBoCount?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'JOINMATCH':apiSetup.MASTER_API_PATH +'v1/Match/JoinMatch?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYJOINMATCH':apiSetup.MASTER_API_PATH +'v1/Match/MyJoinMatch?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYMATCHLIST':apiSetup.MASTER_API_PATH +'v1/Match/MyMatchList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'BOBOMATCHLIST':apiSetup.MASTER_API_PATH +'v1/Match/BoBoMatchList?accesstoken='+ apiSetup.ACCESS_TOKEN,
}
const guessApi={
  'GETGUESSLIST':apiSetup.MASTER_API_PATH + 'v1/Guess/GuessList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'DOGUESSBET':apiSetup.MASTER_API_PATH + 'v1/Guess/Bet?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYGUESSLIST':apiSetup.MASTER_API_PATH + 'v1/Guess/MyGuessList?accesstoken='+ apiSetup.ACCESS_TOKEN,
}
const teamApi={
  'GETUSERDEFAULTTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/MyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/TeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'CREATETEAM':apiSetup.MASTER_API_PATH +'/v1/Team/Create?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYAPPLYTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/MyApplyTeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'MYINVITEDTEAMLIST':apiSetup.MASTER_API_PATH +'/v1/Team/MyInvitedTeamList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'APPLYTEAM':apiSetup.MASTER_API_PATH +'/v1/Team/ApplyTeam?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETRECRUITLIST':apiSetup.MASTER_API_PATH +'/v1/Team/RecruitList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'GETTEAMBYID':apiSetup.MASTER_API_PATH +'/v1/Team/GetTeambyID?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'SENDRECRUIT':apiSetup.MASTER_API_PATH +'/v1/Team/SendRecruit?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'INVITEUSER':apiSetup.MASTER_API_PATH +'/v1/Team/InviteUser?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'INVITEDUSERLIST':apiSetup.MASTER_API_PATH +'/v1/Team/InvitedUserList?accesstoken='+ apiSetup.ACCESS_TOKEN,
  'APPLYUSERLIST':apiSetup.MASTER_API_PATH +'/v1/Team/ApplyUserList?accesstoken='+ apiSetup.ACCESS_TOKEN,

}
module.exports = {
  USER_API: userApi,
  ASSERT_API: assertApi,
  FIGHT_API:fightApi,
  RANK_API:rankApi,
  MATCH_API:matchApi,
  GUESS_API:guessApi,
  TEAM_API:teamApi,
}

//这样写应该也行
// export {
//   USER_API: userApi,
// }
