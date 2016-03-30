'use strict';

var React = require('react-native');
var Util = require('../view/common/util');

var {
    StyleSheet,
    Platform
} = React;

var MatchStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    nav: {
        height: 40,
    },
    navtab: {
        flexDirection: 'row',
        height: 40,
        width: Util.size.width,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#232220',
    },
    navbtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#C3C3C3',
    },
    navbtnactive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#D31B25',
    },
    scrollview: {
        padding: 0,
    },
    matchbanner: {
        width: Util.size.width,
        height: 120,
    },
    matchbannerimg: {
        width: Util.size.width,
        height: 120,
    },
    //列表
    anchorlistblock: {
        width: Util.size.width - 20,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    anchorlistimg: {
        width: (Util.size.width - 120) / 3,
        height: (Util.size.width - 120) / 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D31B25',
        marginBottom: 5,
    },
    anchorlistline: {
        width: 30,
    },
    matchlist: {
        width: Util.size.width,
        borderBottomWidth: 5,
        borderBottomColor: '#484848',
    },
    matchlistbg: {
        width: Util.size.width,
        height: 190,
        paddingLeft: 10,
        paddingRight: 10,
    },
    matchlisttitle: {
        marginTop: 10,
        marginBottom: 10,
    },
    matchlistimg: {
        width: (Util.size.width - 120) / 3,
        height: (Util.size.width - 120) / 3,
        borderRadius: (Util.size.width - 120) / 6,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        marginBottom: 5,
    },
    matchlistname: {
        marginTop: 5,
        marginBottom: 5,
    },
    matchlistvs: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 22,
    },
    matchlistvstime: {
        marginBottom: 10,
    },
    matchlisttab: {
        padding: 10,
    },
    matchlisttabline: {
        width: 1,
        height: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#484848',
    },
    matchlistresult: {
        width: Util.size.width - 60,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 30,
        marginRight: 30,
    },

    //modal
    modalbgopacity: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalheader: {
        width: Util.size.width - 40,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#282828',
        paddingBottom: 10,
    },
    modalimg: {
        width: Util.size.width / 4,
        height: Util.size.width / 4,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#D31B25',
        borderRadius: 5,
    },
    modalfont: {
        marginTop: 5,
    },
    modaltext: {
        marginTop: 10,
    },
    modalscrollview: {
        padding: 20,
    },
    modalinput: {
        height: 40,
        width: Util.size.width - 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D31B25',
        borderRadius: 3,
        marginTop: 10,
        marginLeft: 36,
        marginRight: 36,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalinputfont: {
        height: 40,
        left: 5,
        color: '#FFFFFF',
    },
    modalfooter: {
        width: Util.size.width - 40,
    },
    modaltabhead: {
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#000000',
    },
    modaltabline: {
        backgroundColor: '#C3C3C3',
        width: 1,
        height: 10,
        marginTop: 5,
    },
    modaltabcontent: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    modaltablist: {
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#484848',
    },

    //赛程
    carouselview: {
        width: Util.size.width,
        backgroundColor: '#000000',
    },
    carousellistblock: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    carousellist: {
        marginLeft: 15,
        marginRight: 15
    },
    carousellistimg: {
        width: Util.size.width / 5,
        height: Util.size.width / 5,
        borderWidth: 1,
        borderColor: 'rgb(208, 46, 70)',
        borderRadius: 5,
        marginBottom: 5,
    },
    //对战
    schedulelistblock: {
        flex: 1,
        backgroundColor: '#000000',
        marginTop: 10,
    },
    schedulelist: {
        width: Util.size.width - 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#484848',
        borderWidth: 1,
    },
    schedulelisttitle: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#484848',
    },
    schedulelistimg: {
        width: Util.size.width / 5,
        height: Util.size.width / 5,
        borderRadius: Util.size.width / 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        marginBottom: 5,
    },
    schedulelisttexticon: {
        width: (Util.size.width - 20) / 9,
        height: (Util.size.width - 20) / 9,
        borderRadius: (Util.size.width - 20) / 18,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    schedulelistcenter: {
        top: 20,
    },
    schedulelistvs: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(120,120,120)',
        marginLeft: 5,
        marginBottom: 5,
        marginRight: 5,
    },
    schedulelisttime:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    schedulelistbtn: {
        height: 30,
        width: (Util.size.width - 20) / 3 - 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },

    //原
    flexrow: {
        flexDirection: 'row',
    },
    flexcolumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerbg: {
        width: Util.size.width,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#000000',
    },
});

module.exports = MatchStyle;
