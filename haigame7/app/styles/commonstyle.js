'use strict';

var React = require('react-native');
var Util = require('../view/common/util');

var {
    StyleSheet,
    Platform
} = React;

var CommonStyle = StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 64 : 48,
        padding: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: '#D31B25'
    },
    headerleft: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 48,
        marginLeft: 15,
    },
    headertext: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',
        height: 25,
        width: Util.size.width - 90,
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerright: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 48,
        marginRight: 15,
    },
    headertextright: {
        fontSize: 16,
        color: '#fff',
        right: 0,
    },
    bodyer: {
        height: (Platform.OS === 'ios') ? Util.size.height - 64 : Util.size.height - 48,
        backgroundColor: '#000000',
    },
    footer: {
        backgroundColor: '#FF0009',
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        bottom: 0,
    },
    //栅格
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    col1: {
        flex: 1,
    },
    col2: {
        flex: 2,
    },
    col3: {
        flex: 3,
    },
    col4: {
        flex: 4,
    },
    col5: {
        flex: 5,
    },
    col6: {
        flex: 6,
    },
    col7: {
        flex: 7,
    },
    col8: {
        flex: 8,
    },
    //文字对其
    viewleft: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    viewcenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewright: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    //定位
    relative: {
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
    },
    //模态框
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    modaltext: {
        marginTop: 30,
        padding: 10,
    },
    modalmiddle: {
        height: 300,
        width: Util.size.width - 40,
        backgroundColor: '#484848',
        justifyContent: 'flex-start',
    },
    modalclose: {
        position: 'absolute',
        right: 0,
        top: 10,
        width: 30,
        height: 30,
    },
    modalbtn: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
    },
    modalbtnfont: {
        width: Util.size.width / 2 - 20,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    //色彩
    white: {
        color: '#FFFFFF',
    },
    cream: {
        color: '#C3C3C3',
    },
    gray: {
        color: '#484848',
    },
    blue: {
        color: '#00B4FF',
    },
    yellow: {
        color: '#FFCA00',
    },
    red: {
        color: '#D31B25',
    },
    black: {
        color: '#282828',
    },
    //字体大小
    fontsize12: {
        fontSize: 12,
    },
    fontsize14: {
        fontSize: 14,
    },
    fontsize18: {
        fontSize: 18,
    },
    fontsize22: {
        fontSize: 22,
    },
    //按钮
    icon: {
        height: 30,
        width: 30,
    },
    btnredwhite: {
        backgroundColor: '#D31B25',
        borderWidth: 1,
        borderColor: '#D31B25',
    },
    btncreamblack: {
        backgroundColor: '#C3C3C3',
        borderWidth: 1,
        borderColor: '#C3C3C3',
    },
    btngrayblack: {
        backgroundColor: '#484848',
        borderWidth: 1,
        borderColor: '#484848',
    },
    btnborderred: {
        borderWidth: 1,
        borderColor: '#D31B25',
    },
    btnbordergray: {
        borderWidth: 1,
        borderColor: '#484848',
    },
    //刷新&加载
    refreshview: {
        height: 30,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    refreshviewblock: {
        backgroundColor: '#484848',
        padding: 2,
    },
    paginationview: {
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultview: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#000000',
    },
});

module.exports = CommonStyle;