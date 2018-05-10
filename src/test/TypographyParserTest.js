const assert = require('assert');
const TypographyParser = require('../main/service/TypographyParser');
const SymbolMapper = require('../main/service/SymbolMapper');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const DIR_TESTS = path.resolve('src/resources/test', 'typography');

describe('TypographyParser', () => {
    describe('#parse', () => {
        let uut;

        before(() => {
            uut = new TypographyParser(new SymbolMapper());
        });

        /**
         * Loads contents from {@code .html} file (test resource) as a String, synchronously
         *
         * @param fileName String. WITHOUT extension
         * @return {string} file contents of the given {@code fileName}
         */
        const getTestHtml = (fileName) => {
            return fs.readFileSync(path.resolve(DIR_TESTS, `${fileName}.html`), 'utf8');
        };

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
            assert.strictEqual(uut.parse(getTestHtml(fileName)), expected);
        };

        it('reads basic integer, returns as number', () => {
            testUsingFile('basic-integer', 81);
        });

        it('reads all numbers and returns numeric values as a number', () => {
            testUsingFile('all-numbers', 1867530942);
        });

        it('reads number with a decimal, returns value as a number', () => {
            testUsingFile('decimal-number', 25.430)
        });

        it('accepts HTML element OBJECT, instead of String HTML', () => {
            assert.strictEqual(uut.parse(cheerio(getTestHtml('basic-integer'))), 81);
        });

        it('reads colons, returns value as a string', () => {
            testUsingFile('clear-time', '00:01.083');
        });

        it('reads slash, returns value as a string', () => {
            testUsingFile('tried-count', '3/8');
        });
    });
});