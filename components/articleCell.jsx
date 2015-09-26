'use strict';
var React = require('react-native');
var styles = require('./styleSheet');
var {
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    } = React;
class ArticleCell extends React.Component {
    render() {
        var article = this.props.article;

        return (
            <View style={styles.articleCell}>
                <TouchableHighlight onPress={this.props.onSelect}>
                    <View style={styles.articleBox}>
                        <View>
                            <Text style={styles.title}>{article.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.summary}>{article.content}</Text>
                        </View>
                        <View>
                            <Text style={styles.time}>采集于：{article.created}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
module.exports = ArticleCell;