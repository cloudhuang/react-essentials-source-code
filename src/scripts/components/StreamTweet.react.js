var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
    getInitialState: function () {
        console.log('StreamTweet: 1. Running getInitialState()');

        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        }
    },

    componentWillMount: function () {
        console.log('StreamTweet: 2. Running componentWillMount()');

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: "Lastest public photo from Tweeter"
        });

        window.reacttweet = {
            numberOfReceiveTweets: 1,
            numberOfDisplayedTweets: 1
        }
    },

    render: function () {
        console.log('StreamTweet: Running render()');

        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}
                    />
            </section>
        );
    },

    componentDidMount: function () {
        console.log('StreamTweet: 3. Running componentDidMount()');

        var componentDOMRepresentation = ReactDOM.findDOMNode(this);

        window.reacttweet.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.reacttweet.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },
    
    componentWillReceiveProps: function (nextProps) {
        console.log('StreamTweet: 4. Running componentWillReveiveProps()');

        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfTweetCharactersIncreasing = (nextTweetLength > currentTweetLength);

        var headerText;

        if (isNumberOfTweetCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Lastest public photo from Tweeters'
        }

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfTweetCharactersIncreasing,
            headerText: headerText
        });

        window.reacttweet.numberOfReceiveTweets++;
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('StreamTweet: 5. Running shouldComponentUpdate()');

        return nextProps.tweet.text.length > 1;
    },

    componentWillUpdate: function (nextProps, nextState) {
        console.log('StreamTweet: 6. Running componentWillUpdate()');
    },

    componentDidUpdate: function() {
        console.log('StreamTweet: 7. Running componentDidUpdate()');
        window.reacttweet.numberOfDisplayedTweets++;
    },

    componentWillUnmount: function () {
        console.log('StreamTweet: 8. Running componentWillUnmount()');

        delete window.reacttweet;
    }
});

module.exports = StreamTweet;
