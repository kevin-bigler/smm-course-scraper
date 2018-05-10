const assert = require('assert');
const fs = require('fs');
const path = require('path');
const CoursePageScraper = require('../main/service/CoursePageScraper');
const TypographyParser = require('../main/service/TypographyParser');
const SymbolMapper = require('../main/service/SymbolMapper');

const PATH_HTML_FILE = path.resolve('src/resources/test/example_level/', 'SUPER MARIO MAKER BOOKMARK _ You Can Go the Distance! - 1DAB-0000-03A0-CA78.htm');

describe('CoursePageScraper', () => {
    describe('#scrape()', () => {
        let uut;
        let html;

        before(() => {
            // TODO: mock TypographyParser dependency, instead of using a real instance
            uut = new CoursePageScraper(new TypographyParser(new SymbolMapper()));
            html = fs.readFileSync(PATH_HTML_FILE, 'utf8');
        });

        it('gets correct data from the scraped page', () => {
            const expected = {
                code: '1DAB-0000-03A0-CA78',
                title: 'You Can Go the Distance!',
                stats: {
                    attempts: 8,
                    clears: 3,
                    players: 4,
                    stars: 1,
                    shares: 0
                }
            };
            const actual = uut.scrape(html);

            assert.deepEqual(actual, expected);
        });
    });
});
