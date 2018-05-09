const assert = require('assert');

describe('this is a test of the test', () => {
    before(() => {
        console.log('before ALLLLL');
    });

    it('does some test thing', () => {
        console.log('I am telling you a thing from the test of tests. :o');
        assert.equal('foo', 'bar');
    });
});