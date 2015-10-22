/**
 * Created by leeshine on 15/9/19.
 */
'use strict';
var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    } = React;
class NavBar extends React.Component{
    render() {
        return(
            <View style={[styles.navBar, this.props.style]}>
                <View style={[styles.corner, styles.leftCorner,this.props.route.id=='index'&&styles.hidden]}>
                    <TouchableOpacity style={styles.btn} onPress={this.props.goBack}>
                        <Text style={styles.buttonText}>{'<返回'}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleText}>{this.props.title}</Text>
                <View style={[styles.corner, styles.rightCorner,this.props.route.id=='index'&&styles.hidden]}>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    navBar: {
        alignItems: 'center',
        backgroundColor:'red',
        flexDirection:'row',
        height:64,
        overflow:'hidden'
    },
    titleText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        flex:1
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    },
    corner: {
        width:80,
        height:64,
        alignItems: 'center',
        paddingHorizontal:10,
        overflow:'hidden'
    },
    btn:{
        alignItems: 'center',
        justifyContent:'center',
        flex:1
    },
    leftCorner: {
        alignItems:'flex-start'
    },

    rightCorner: {
        alignItems:'flex-end'
    },
    hidden:{
        height:0
    }
});

module.exports = NavBar;