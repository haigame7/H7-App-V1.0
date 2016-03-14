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
    headertextright:{
    fontSize:16,
    color:'#fff',
    right:0,
    },
    bodys: {
        margin: 0,
        alignItems: 'center',
    },
    foots: {
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
    //按钮
    icon: {
      height: 30,
      width: 30,
    },
});

module.exports = CommonStyle;
