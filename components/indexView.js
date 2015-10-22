'use strict';
var React = require('react-native');
var styles = require('./styleSheet');
var ArticleCell = require('./articleCell');
var RefreshableListView = require('react-native-refreshable-listview');
var _ = require('underscore');
var {
    StyleSheet,
    ListView,
    Text,
    View,
    ActivityIndicatorIOS
    } = React;
var config = require('../config/config.json');

class IndexView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false};
    }
    render() {
        console.log('a');
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
    }
    renderLoadingView(){
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
    }
    reloadDate() {
        return this.fetchData();
    }

    componentDidMount() {
        this.fetchData();
    }
    renderArticle(article) {
        return (
            <ArticleCell
                key={article._id}
                article={article}
                onSelect={() => this.goToArticle(article)}
                />
        );
    }
    fetchData() {
        var requestUrl = config.apiUrlPrefix + 'article/getList';
        console.log(requestUrl);
        fetch(requestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                if (responseData.result == 'TRUE') {
                    var datas = [];
                    _.each(responseData.data,function(article){
                          if(article&&article.title){
                              datas.push(article);
                          }
                    });
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(datas),
                        loaded: true
                    });
                }
            })
            .done();
    }
    goToArticle(article) {
        this.props.navigator.push({
            id:'articleDetail',
            articleId: article._id
        });
    }
}
module.exports = IndexView;