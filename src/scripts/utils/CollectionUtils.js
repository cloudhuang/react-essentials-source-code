var TweetUtils = require('./TweetUtils');

function getNumberOfTweetsInCollection(collection) {
    var listOfCollectionTweetIds = TweetUtils.getListOfTweetIds(collection);
    return listOfCollectionTweetIds.length;
}

function isEmptyCollection(collection) {
    return getNumberOfTweetsInCollection(collection) === 0;
}

module.exports = {
    getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
    isEmptyCollection: isEmptyCollection
}