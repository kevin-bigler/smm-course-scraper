const assert = require('assert');
const CoursePageScraper = require('main/service/CoursePageScraper');

describe('CoursePageScraper', () => {
    describe('#scrape()', () => {
        let uut;
        let html;

        before(() => {
            uut = new CoursePageScraper();
            html = ''; // TODO load HTML from file "resources/example_level/SUPER MARIO MAKER BOOKMARK _ You Can Go the Distance! - 1DAB-0000-03A0-CA78.htm"
        });

        it('gets correct data from the scraped page', () => {
            const expected = {
                id: '1DAB-0000-03A0-CA78',
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

            assert.equal(actual, expected);
        });
    });
});
