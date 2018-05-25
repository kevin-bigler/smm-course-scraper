const assert = require('assert');
const nock = require('nock');
const Constant = require('../main/constant/Constant');
const NintendoBookmarkPageClient = require('../main/client/NintendoBookmarkPageClient');

const TEST_COURSE_CODE = '1234-5678-90AB-CDEF';
const TEST_COURSE_PATH = '/' + Constant.NINTENDO_SMM_BOOKMARK_WEBSITE.PATH_COURSES + '/' + TEST_COURSE_CODE;
const TEST_COURSE_PAGE_HTML = '<html><head><title>Test Page</title></head><body><h1>Test Course Page Header</h1>'
    + '<div>Some div of stuff</div></body></html>';

// TODO -- need to mock 'got' library (or w/e request framework we use) with 'jest'
// TODO -- even better might be to stand up a fake server, ie integration test. then mock the endpoints we're testing
describe('NintendoBookmarkPageClient', () => {
    let uut;
    beforeAll(() => {
        uut = new NintendoBookmarkPageClient();
    });
    describe('#getCoursePage', () => {
        beforeEach(() => {
            // mock the test course HTTP endpoint
            nock(Constant.NINTENDO_SMM_BOOKMARK_WEBSITE.DOMAIN)
                .get(TEST_COURSE_PATH)
                .reply(200, TEST_COURSE_PAGE_HTML);
        });

        it('gets the page content', async () => {
            const actual = await uut.getCoursePage(TEST_COURSE_CODE);

            assert.equal(actual, TEST_COURSE_PAGE_HTML);
        });

        it('throws an error if the page does not exist (404)', () => {
            // TODO
        });

        it('throws an error on connection issues', () => {
            // TODO
        });

    });
});