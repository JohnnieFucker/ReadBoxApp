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
var PreButton = React.createClass({
    render(){

    }
});
var NavBar = React.createClass({
    render() {
        console.log(this.props.route);
        switch (this.props.route.id) {
            case 'index':
            {
                return(<View style={[styles.container, this.props.style]}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                </View>
                );
            }
            default:
            {
                return (
                    <View style={[styles.container, this.props.style]}>
                        <View style={[styles.corner, styles.leftCorner]}>
                            <TouchableOpacity onPress={this.props.goBack}>
                                <Text style={styles.buttonText}>{'<返回'}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        <View style={[styles.corner, styles.rightCorner]}>
                        </View>
                    </View>);
            }
        }
    },
});

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:'red',
        height:60,
        flexDirection:'row',
        overflow:'hidden'
    },

    titleText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 15,
        flex:1
    },

    buttonText: {
        fontSize: 14,
        color: '#fff'
    },

    corner: {
        width:80,
        paddingHorizontal:10
    },

    leftCorner: {
        alignItems:'flex-start',
    },

    rightCorner: {
        alignItems:'flex-end',
    }
});

module.exports = NavBar;