'use strict';

var React = require('react-native');
var Util = require('../view/common/util');

var {
    StyleSheet,
    Platform
} = React;

var TeamStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    //Tab选择
    nav: {
        height: 70,
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
    navsub: {
        flexDirection: 'row',
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    navsubblock: {
        width: Util.size.width/2-11,
        borderBottomWidth: 1,
        borderBottomColor: '#484848',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    navsubline: {
        width: 1,
        height: 14,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#484848',
    },
    //滚动列表
    scrollview: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    teamlist: {
        height: 100,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#484848',
    },
    teamlistimg: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        marginRight: 10,
    },
    teamlistcenter: {
        flex: 1,
    },
    teamlistright: {
        width: 80,
        alignItems: 'flex-end',
    },
    teamlistbtn: {
        marginTop: 10,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    userlist: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#484848',
    },
    userlistimg: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        marginRight: 10,
    },
    userlistteam: {
        flex: 1,
    },
    userlistteamname: {
        backgroundColor: '#484848',
        borderRadius: 5,
        padding: 10,
    },
    userlistteamicon: {
        position: 'absolute',
        top: 5,
        right: 10,
    },
    userlistteambox: {
        flexDirection: 'row',
        marginTop: 5,
    },
    userlistcenter: {
        flex: 1,
        width: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        marginRight: 10,
    },
    userlisthero: {
        flexDirection: 'row',
    },
    userlistheroimg: {
        width: 40,
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderColor: '#D31B25',
        borderRadius: 3,
    },
    userlistbtn: {
        marginTop: 10,
        width: 60,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    headbg: {
        flex: 1,
        height: 240,
        width: Util.size.width,
    },
    headtextblock: {
        marginTop: 5,
        paddingLeft: 60,
        paddingRight: 60,
    },
    headtextleft: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    headtextright: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    headtexline: {
        width: 2,
        height: 10,
        margin: 5,
        backgroundColor: '#484848',
    },
});

module.exports = TeamStyle;
