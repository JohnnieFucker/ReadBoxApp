/**
 * Created by leeshine on 15/9/19.
 */

'use strict';
var React = require('react-native');
var styles = require('./styleSheet');
var ArticleCell = require('./articleCell');
var REQUEST_URL = 'http://drea.mx:8011/handle/getList/0';
var RefreshableListView = require('react-native-refreshable-listview');
var _ = require('underscore');
var {
    StyleSheet,
    ListView,
    Text,
    View,
    ActivityIndicatorIOS
    } = React;

var IndexView = React.createClass({
    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <RefreshableListView
                dataSource={this.state.dataSource}
                renderRow={(article)=>this.renderArticle(article)}
                style={styles.container}
                automaticallyAdjustContentInsets={false}
                loadData={this.reloadDate}
                refreshDescription="学而时习之，不亦说乎？"
                />
        );
    },
    reloadDate() {
        return this.fetchData();
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
                    学而时习之，不亦说乎？
                </Text>
                <ActivityIndicatorIOS
                    animating={true}
                    size="small"
                    />
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