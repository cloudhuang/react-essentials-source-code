var React = require('react');
// var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({
    getInitialState: function () {
        return {
            tweet: null
        }
    },

    componentDidMount: function () {
        // SnapkiteStreamClient.initializeStream(this.handleNewTweet);
        this.handleNewTweet();
    },

    componentWillUnmount: function () {
        // SnapkiteStreamClient.destroyStream();
    },

    handleNewTweet: function (tweet) {
        var that = this;

        var tweet = {
            id: Math.floor((Math.random() * 10) + 1),
            text: 'Hello World',
            media: [{
                url: 'http://img13.360buyimg.com/n1/s450x450_jfs/t2590/125/843161829/100436/b1061dc1/5728915aN734695bc.jpg'
            }
            ]
        };

        that.setState({
            tweet: tweet
        });

        setInterval(function () {
            console.log('setInterval to retrieve all twitts......');

            var tweet = {
                id: Math.floor((Math.random() * 10) + 1),
                text: 'Hello World',
                media: [{
                    url: 'http://img13.360buyimg.com/n1/s450x450_jfs/t2590/125/843161829/100436/b1061dc1/5728915aN734695bc.jpg'
                }
                ]
            };

            that.setState({
                tweet: tweet
            });
        }, 1000 * 30);
    },

    render: function () {
        var tweet = this.state.tweet;

        if (tweet) {
            return (
                <StreamTweet tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return (
            <Header text="Waiting for public photos from Tweeter......" />
        )
    }
});

module.exports = Stream;