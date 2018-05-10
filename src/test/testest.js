const assert = require('assert');

const somethingLikeDbLookup = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve("a hundred");
        }, 2);
    });
};

describe('this is a test of the test', () => {
    before(() => {
        // console.log('before ALLLLL');
    });

    it('does some test thing', () => {
        // console.log('I am telling you a thing from the test of tests. :o');
        assert.equal('foo', 'bar');
    });

    it('does a db lookup or something', async () => {
        const actual = await somethingLikeDbLookup();
        assert.equal(actual, 'two thousand');
    });
});