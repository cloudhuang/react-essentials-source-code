var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionCreators')

function initializeStreamOfTweets() {    
    // SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
    // TODO 
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

            TweetActionCreators.receiveTweet(tweet);
        }, 1000 * 10);
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
}