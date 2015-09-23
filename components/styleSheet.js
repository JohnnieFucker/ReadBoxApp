/**
 * Created by leeshine on 15/9/19.
 */
'use strict';
var React = require('react-native');
var {
    StyleSheet,
    } = React;
var styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        padding: 10,
        flex:1
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    articleCell: {
        marginBottom: 15,
    },
    articleBox:{
        backgroundColor: '#fff',
        borderRadius: 3,
        padding: 15,
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 10
    },
    summary: {
        fontSize: 14,
        textAlign: 'left',
    },
    time: {
        fontSize: 12,
        textAlign: 'left',
        marginTop: 10,
        color: '#666666'
    },
    webView: {

    },
    navButton: {
        width: 24,
        height: 30,
    },
    navButtonText:{
        color:'#fff',
    },
    navTitleBox: {
        width: 100,
        height: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    navTitleText:{
        color:'#fff',
        fontSize:16
    }
});
module.exports = styles;