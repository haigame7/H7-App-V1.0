'use strict';

var React = require('react-native');
var Util = require('../view/common/util');

var {
    StyleSheet,
    Platform
} = React;

var FightStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    //Tab选择
    nav: {
        height: 30,
    },
    navsub: {
        flexDirection: 'row',
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
    },
    navsubblock: {
        flex: 1,
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
    userlisttexticon: {
        marginTop: 2,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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
    userlistprogress: {
        marginTop: 5,
        marginLeft: 10,
    },

    //原
    modal: {
        marginBottom: 10,
        height: Util.size.height - 10,
        width: Util.size.width - 20,
        borderRadius: 5,
        backgroundColor: "#292929",
    },
    modalttitle: {
        backgroundColor: 'rgb(50,50,50)',
        height: Util.pixel * 80,
        top: Util.pixel * 10,
    },
    modalttitletext: {
        color: 'rgb(200,200,200)',
        fontSize: 18,
        top: Util.pixel * 10,
        textAlign: 'center',
    },
    modalscrollcontainer: {
        height: 10,
    },
    modalbuttoncontainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: Util.size.height * 3 / 4,
        height: Util.pixel * 50,
        justifyContent: 'center',
    },
    modalbutton: {
        backgroundColor: '#D31B25',
        width: Util.size.width / 2 - 10,
        borderRadius: 2,
        textAlign: 'center',
        height: Util.pixel * 90,
    },
    scrolltext: {
        color: 'rgb(100,100,100)',
        margin: Util.pixel * 20,
        fontSize: 14,
        lineHeight: 30,
    },
    teamrowtext: {
        flexDirection: 'row',
    },
    teamrecruit: {
        height: Util.size.height * 3 / 16,
        flexDirection: 'row',
    },
    teamimage: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 40,
    },
    teamrecruitimage: {
        width: 50,
        height: 50,
        margin: 10,
        marginTop: 25,
        borderRadius: 25,
    },
    teamangleright: {
        flexDirection: 'row',
        top: Util.pixel * 30,
        left: Util.pixel * 10,
    },
    teambuttonright: {
        width: Util.size.width * 19 / 100,
        height: Util.pixel * 65,
        left: Util.pixel * 50,
        top: Util.pixel * 30,
        borderRadius: 5,
        backgroundColor: 'rgb(208, 46, 70)',
    },
    btnfontinvite: {
        textAlign: 'center',
        top: Util.pixel * 16,
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold'
    },
    teamcontenttext: {
        color: 'rgb(150,150,150)',
        fontSize: 12,
        top: Util.pixel * 10,
        marginBottom: Util.pixel * 8,
    },
    teamsplit: {
        position: 'absolute',
        left: 0,
        height: Util.pixel,
        width: Util.size.width,
        backgroundColor: 'rgb(50,50,50)',
    },
    teamheroimagecontainer: {
        margin: 10,
        top: Util.pixel * 10,
        flexDirection: 'row',
        borderRadius: 5,
    },
    infosplit: {
        position: 'absolute',
        left: 0,
        marginTop: Util.pixel * 65 - 1,
        height: Util.pixel,
        width: Util.size.width,
        backgroundColor: 'rgb(50,50,50)',
    },
    centerbg: {
        flex: 1,
        backgroundColor: 'rgb(0, 0, 0)',
        height: Util.size.height,
        width: Util.size.width,
    },
});

module.exports = FightStyle;