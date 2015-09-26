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
var config = require('../config/config.json');

class ArticleDetail  extends React.Component{
    render() {
        var articleId = this.props.route.articleId;
        var url = config.articleUrlPrefix+articleId;
        return (
            <View style={styles.flexContainer}>
                <NavBar
                    title="ReadBox"
                    route={this.props.route}
                    goBack={() =>{this.props.navigator.pop();}}
                    />
                <WebView
                    ref={url}
                    style={styles.webView}
                    url={url}startInLoadingState={true}
                    scalesPageToFit={false}
                    automaticallyAdjustContentInsets={false}
                    />
            </View>
        );
    }
}
module.exports = ArticleDetail;