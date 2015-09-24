/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var styles = require('./components/styleSheet');
var IndexView = require('./components/indexView');
var NavBar = require('./components/navBar');
var ArticleDetail = require('./components/articleDetail');
var {
    AppRegistry,
    ListView,
    Navigator,
    Text,
    View,
    TouchableHighlight,
    } = React;

var NavbarWrapper = React.createClass({
    render() {
        return (
            <Navigator
                renderScene={(route, nav) =>{return this.renderScene(route, nav)}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                initialRoute={
                {
                 id:"index",
                 navigationBar:(
                    <NavBar
                      title="ReadBox"
                      goBack={(nav) =>{nav.pop();}}
                  />
                  )
                }}
            />
        );
    },
    renderScene: function(route,nav) {
        var navBar = route.navigationBar;

        if (navBar) {
            navBar = React.addons.cloneWithProps(navBar, {
                nav, route
            });
        }
        switch(route.id){
            case 'index':
                return(<View style={styles.flexContainer}>
                    {navBar}
                    <IndexView navigator={nav} route={route} />
                </View>);
            case 'articleDetail':{
                return(<View style={styles.flexContainer}>
                    {navBar}
                    <ArticleDetail navigator={nav} route={route} />
                </View>);
            }
        }
    }
});

var ReadBoxApp = React.createClass({
    render() {
        return (
            <NavbarWrapper
                />
        );
    }
});



AppRegistry.registerComponent('ReadBoxApp', () => ReadBoxApp);