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
        marginTop: 0
    },
    infosplit: {
        position: 'absolute',
        left: 0,
        marginTop: Util.size.height / 9 - 1,
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
    teamlist: {
        height: Util.size.height * 13 / 84,
        flexDirection: 'row',
    },
    teamrecruit: {
        height: Util.size.height * 11 / 40,
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
    teamheroimagecontainer: {
        margin: 10,
        top: Util.pixel * 10,
        flexDirection: 'row',

        borderRadius: 5,
    },
    teamheroimage: {
        width: 40,
        height: 40,
        borderWidth: 1,
        marginRight: Util.pixel * 10,
        borderColor: 'rgb(208, 46, 70)',
        borderRadius: 5,
    },
    teamcontent: {
        flexDirection: 'column',
        width: Util.size.width / 2,
    },
    teamcontenttext: {
        color: 'rgb(150,150,150)',
        fontSize: 12,
        top: Util.pixel * 30,
        marginBottom: Util.pixel * 8,
    },

    teamrowtext: {
        flexDirection: 'row',
    },
    teamsplit: {
        position: 'absolute',
        left: 0,
        height: Util.pixel,
        width: Util.size.width,
        backgroundColor: 'rgb(50,50,50)',
    },
    teamangleright: {
        top: Util.pixel * 45,
        left: Util.pixel * 100,
        color: 'rgb(150, 150, 150)',
    },
    teambuttoninvite: {
        width: Util.size.width * 19 / 100,
        height: Util.pixel * 65,
        top: Util.pixel * 80,
        left: Util.pixel * 10,
        borderRadius: 5,
        backgroundColor: 'rgb(208, 46, 70)',
    },
    teambuttoninvited: {
        width: Util.size.width * 19 / 100,
        height: Util.pixel * 65,
        top: Util.pixel * 80,
        left: Util.pixel * 10,
        borderRadius: 5,
        backgroundColor: 'rgb(150, 150, 150)',
    },
    teambuttonrecruit: {
        width: Util.size.width * 19 / 100,
        height: Util.pixel * 65,
        left: Util.pixel * 50,
        top: Util.pixel * 60,
        borderRadius: 5,
        backgroundColor: 'rgb(208, 46, 70)',
    },
    teambuttonrecruited: {
        width: Util.size.width * 19 / 100,
        height: Util.pixel * 65,
        left: Util.pixel * 50,
        top: Util.pixel * 60,
        borderRadius: 5,
        backgroundColor: 'rgb(150, 150, 150)',
    },
    btnfontinvite: {
        textAlign: 'center',
        top: Util.pixel * 16,
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold'
    },
    btnfontinvited: {
        textAlign: 'center',
        top: Util.pixel * 16,
        fontSize: 13,
        color: '#000',
        fontWeight: 'bold'
    },
    nav: {
        height: Util.size.height / 9,
        flexDirection: 'row',
        backgroundColor: 'rgb(0, 0, 0)'
    },
    sub_nav: {
        position: 'absolute',
        flexDirection: 'row',
        left: 0,
        marginTop: Util.size.height / 18,
        width: Util.size.width,
        height: Util.size.height / 18,
    },
    nav_item: {

        left: Util.size.width / 5,
        top: Util.pixel * 25,
        marginRight: Util.size.width * 3 / 10,
    },
    sub_nav_item: {
        flexDirection: 'row',
        left: Util.size.width / 6,
        top: Util.pixel * 30,
        marginRight: Util.size.width * 1 / 5,
    },
    nav_item_line: {
        position: 'absolute',
        left: -Util.size.width / 6,
        marginTop: Util.pixel * 30,
        height: Util.pixel * 4,
        width: Util.size.width * 7 / 15,
        backgroundColor: 'rgb(120,120,120)',
    },
    nav_item_line_active: {
        position: 'absolute',
        left: -Util.size.width / 6,
        marginTop: Util.pixel * 30,
        height: Util.pixel * 4,
        width: Util.size.width * 7 / 15,
        backgroundColor: 'red',
    },
    nav_item_text: {
        fontSize: 15,
        color: 'rgb(150,150,150)'
    },
    nav_item_text_active: {
        fontSize: 15,
        color: 'red'
    },
    sub_nav_item_text: {
        fontSize: 12,
        marginRight: Util.pixel * 20,
        color: 'rgb(150,150,150)'
    },

    sub_nav_item_line: {
        position: 'absolute',
        width: Util.pixel,
        height: Util.pixel * 30,

        left: Util.size.width / 3,
        backgroundColor: 'rgb(150,150,150)',
    }
});

module.exports = TeamStyle;
