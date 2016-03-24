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
        width: Util.size.width - 60,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
    },
    anchorlistimg: {
        width: (Util.size.width-120)/3,
        height: (Util.size.width-120)/3,
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
        width: (Util.size.width-120)/3,
        height: (Util.size.width-120)/3,
        borderRadius: (Util.size.width-120)/6,
        borderWidth: 3,
        borderColor: '#FFFFFF',
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
    modalfooter: {
        backgroundColor: '#000',
        width: Util.size.width - 40,
        height: Util.size.height / 2,
    },
    modalheadtab: {
        marginTop: 10,
    },
    modalcontenttab: {
        borderBottomWidth: 1,
        marginTop: 5,
        top: -15,
        height: 25,
        borderBottomColor: 'rgb(50,50,50)',
    },
    modalheadtabli: {
        alignItems: 'center',
        height: 40,
    },
    modalheadtabtitle: {
        alignItems: 'center',
        height: 20,
        marginBottom: 3,
    },
    modalheadtabnumber: {
        alignItems: 'center',
        height: 20,
    },
    modalheadtabline: {
        backgroundColor: '#FFFFFF',
        width: Util.pixel,
        height: 15,
    },
    modalheader: {
        height: Util.size.height / 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    modalinput: {
        height: 40,
        width: Util.size.width - 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D31B25',
        borderRadius: 3,
        marginTop: 20,
        marginLeft: 36,
        marginRight: 36,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalinputfont: {
        color: '#FFFFFF',
    },
    modalgainmoney: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    modalttitle: {
        alignItems: 'center',
    },
    modalttitletext: {
        color: 'rgb(200,200,200)',
        fontSize: 16,
        top: Util.pixel * 20,
        textAlign: 'center',
    },
    modalteamimage: {
        width: Util.size.width / 4,
        height: Util.size.width / 4,
        top: Util.pixel * 20,
        borderWidth: 1,
        borderColor: 'rgb(208, 46, 70)',
        borderRadius: 5,
    },
    modalscrollcontainer: {
        padding: 5,
        marginBottom: 40,
        marginTop: 10,
    },
    modalbutton: {
        backgroundColor: '#D31B25',
        width: Util.size.width / 2 - 10,
        borderRadius: 2,
        textAlign: 'center',
        height: Util.pixel * 90,
    },
});

module.exports = MatchStyle;
