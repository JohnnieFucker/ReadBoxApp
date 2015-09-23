/**
 * Created by leeshine on 15/9/19.
 */
'use strict';
var React = require('react-native');
var styles = require('./styleSheet');
var NavBar = require('./navBar');
var {
     WebView,
    View,
    } = React;
var ArticleDetail =React.createClass({
    render: function () {
        var articleId = this.props.route.articleId;
        var url = 'http://drea.mx:8011/read/'+articleId;
        return (
            <View style={{flex:1}}>
                <NavBar title="ReadBox" route={this.props.route}
                        goBack={() =>{this.props.navigator.pop();}}/>
                <WebView
                    ref={url}
                    automaticallyAdjustContentInsets={true}
                    style={styles.webView}
                    url={url}startInLoadingState={true}
                    scalesPageToFit={false}
                    />
            </View>
        );
    },
});
module.exports = ArticleDetail;