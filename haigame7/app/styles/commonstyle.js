'use strict';

var React = require('react-native');
var Util = require('../view/common/util');
var {
    StyleSheet
} = React;
var Dimensions = require('Dimensions');
var PixelRatio = require('PixelRatio');
var {
    width,
    height
} = Dimensions.get('window')
var pr = PixelRatio.get();
var CommonStyle = StyleSheet.create({
    headerGo: {
        borderLeftWidth: 4 * Util.pixel,
        borderBottomWidth: 4 * Util.pixel,
        width: 15,
        height: 15,
        transform: [{ rotate: '45deg' }],
        borderColor: '#FFF',
        marginLeft: 10
    },
    headerRow: {
        flexDirection: 'row'
    },
    header: {
        height: 50,
        backgroundColor: 'rgb(240, 12, 12)'
    },
    headerFontFFF: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    headerTitle: {
        flex: 1
    },
    headerTitlePos: {
        textAlign: 'center',
        marginLeft: -20,
        width: 200
    },
    headerCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodys: {
        margin: 0,
        height,
        alignItems: 'center',
    },
    foots: {
        height: 40,
        backgroundColor: '#FF0009',
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        bottom: 0,
    },
    row: {
        height: 20,
        width: width - 72,
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },
    col1: {
        flex: 1,
        height: 20,
    },
    col2: {
        flex: 2,
        height: 20,
    },
    col3: {
        flex: 3,
        height: 20,
    },
    left: {
        textAlign: 'left',
    },
    right: {
        textAlign: 'right',
    },
    relative: {
        position: 'relative',
    },
    absolute: {
        position: 'absolute',
    },
    white: {
        color: 'white',
    },
    blue: {
        color: 'blue',
    },
    btn: {
        height: 40,
        width: width - 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderRadius: 2,
        backgroundColor: '#D31B25',
        marginTop: 20,
    },
    btnactive: {
        height: 40,
        width: width - 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderRadius: 2,
        backgroundColor: '#FFFF00',
    },
    btnfont: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    input: {
        height: 40,
        width: width - 72,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#D31B25',
        borderRadius: 3,
        marginTop: 20,
    },
    inputfont: {
        color: '#000000',
        opacity: 1,
    },
});

module.exports = CommonStyle;
