jest.autoMockOff();

describe('Collection Utilities Module', function () {
    var CollectionUtils = require('../CollectionUtils');

    var collectionTweetsMock = {
        collectionTweet7: {},
        collectionTweet8: {},
        collectionTweet9: {}
    };

    it('Return a number of tweets in collection', function () {
        var expectNumberOfTweetsInCollection = 3;
        var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);

        expect(actualNumberOfTweetsInCollection).toEqual(actualNumberOfTweetsInCollection);
    });

    it('Checks if collection is not empty', function isNotEmptyCollection () {
        var actualIsEmptyCollection = CollectionUtils.isEmptyCollection(collectionTweetsMock);

        expect(actualIsEmptyCollection).toBeDefined();
        expect(actualIsEmptyCollection).toBe(false);
        expect(actualIsEmptyCollection).not.toBe(true);
    })
})