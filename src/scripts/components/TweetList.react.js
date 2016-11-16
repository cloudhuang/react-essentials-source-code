var React = require('react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

var listStyle = {
    padding: '0'
};

var listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

var TweetList = React.createClass({
    getListOfTweetIds: function () {
        return Object.keys(this.props.tweets);
    },

    getTweetElement: function (tweetId) {
        var tweet = this.props.tweets[tweetId];
        var handleRemoveTweetFromCollection = this.removeTweetFromCollection;
        var tweetElement;

        if (handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet tweet={tweet}
                    onImageClick={handleRemoveTweetFromCollection} />
            );
        } else {
            tweetElement = <Tweet tweet={tweet} />
        }

        return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>
    },

    removeTweetFromCollection: function (tweet) {
        CollectionActionCreators.removeTweetFromCollection(tweet.id);
    },

    render: function () {
        var tweetElement = this.getListOfTweetIds().map(this.getListOfTweetIds);

        return (
            <ul style={listStyle}>
                {tweetElement}
            </ul>
        );
    }
});

module.exports = TweetList;