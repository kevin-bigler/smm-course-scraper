const assert = require('assert');
const TypographyParser = require('../main/service/TypographyParser');
const fs = require('fs');
const path = require('path');

const DIR_TESTS = path.resolve('src/resources/test', 'typography');

describe('TypographyParser', () => {
    describe('#parse', () => {
        let uut;

        before(() => {
            uut = new TypographyParser();
        });

        /**
         * <p>Runs a test against typography HTML block found in a file (test resource)</p>
         *
         * <p>Loads HTML from file, gets value from {@code uut.parse()}, and asserts whether that returned value is
         * equal to the provided {@code expected} value.</p>
         *
         * @param fileName String. WITHOUT extension
         * @param expected Expected typography value (ie from {@code uut.parse()}
         */
        const testUsingFile = (fileName, expected) => {
            const contents = fs.readFileSync(path.resolve(DIR_TESTS, `${fileName}.html`));
            assert.equal(uut.parse(contents), expected);
        };

        it('reads basic integer, returns as number', () => {
            testUsingFile('basic-integer', 81);
        });

        it('reads all numbers and returns numeric values as a number', () => {
            testUsingFile('all-numbers', 1867530942);
        });

        it('reads number with a decimal, returns value as a number', () => {
            // TODO
        });

        it('accepts HTML element OBJECT, instead of String HTML', () => {
            // TODO
        });

        it('reads colons, returns value as a string', () => {
            // TODO
        });

        it('reads slash, returns value as a string', () => {
            // TODO
        });
    });
});