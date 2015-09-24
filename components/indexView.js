/**
 * Created by leeshine on 15/9/19.
 */

'use strict';
var React = require('react-native');
var styles = require('./styleSheet');
var ArticleCell = require('./articleCell');
var REQUEST_URL = 'http://drea.mx:8011/handle/getList/0';
var _ = require('underscore');
var {
    ListView,
    StyleSheet,
    Text,
    View,
    } = React;

var IndexView = React.createClass({
    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(article)=>this.renderArticle(article)}
                style={styles.container}
                automaticallyAdjustContentInsets={false}
                />
        );
    },
    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    },
    componentDidMount: function () {
        this.fetchData();
    },

    renderLoadingView: function () {
        return (
            <View style={styles.loading}>
                <Text>
                    Loading Article...
                </Text>
            </View>
        );
    },
    renderArticle: function (article) {
        return (
            <ArticleCell key={article._id} article={article} onSelect={() => this.goToArticle(article)}/>
        );
    },
    fetchData: function () {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.result == 'true') {
                    var datas = [];
                    _.each(responseData.data,function(article){
                          if(article&&article.title){
                              datas.push(article);
                          }
                    });
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(datas),
                        loaded: true,
                    });
                }
            })
            .done();
    },
    goToArticle: function (article) {
        this.props.navigator.push({
            id:'articleDetail',
            articleId: article._id
        });
    }
});
module.exports = IndexView;