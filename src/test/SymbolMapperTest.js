const assert = require('assert');
const SymbolMapper = require('../main/service/SymbolMapper');

describe('SymbolMapper', () => {
    describe('#map()', () => {
        let uut;

        before(() => {
            uut = new SymbolMapper();
        });

        it('maps unknown values to themselves', () => {
            assert.equal(uut.map('fake'), 'fake');
            assert.equal(uut.map('other-fake-thing'), 'other-fake-thing');
            assert.equal(uut.map('foo'), 'foo');
            assert.equal(uut.map('bar'), 'bar');
            assert.equal(uut.map('0'), '0');
            assert.equal(uut.map(8), 8);
            assert.equal(uut.map(12.34), 12.34);
        });

        it('maps to `.`', () => {
            assert.equal(uut.map('second'), '.');
        });

        it('maps to `%`', () => {
            assert.equal(uut.map('percent'), '%');
        });

        it('maps to `:`', () => {
            assert.equal(uut.map('minute'), ':');
        });

        it('maps to `/`', () => {
            assert.equal(uut.map('slash'), '/');
        });

    });
});