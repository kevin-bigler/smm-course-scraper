const got = require('got');
const Constant = require('../constant/Constant');

/**
 * Loads page content from Nintendo's Super Mario Maker Bookmark website:
 * https://supermariomakerbookmark.nintendo.net/
 */
class NintendoBookmarkPageClient {
    /**
     * Gets HTML content from Course Page of Nintendo's SMM Bookmark Site, <em>synchronously</em>.
     *
     * @param code Level Code (String). Used to form the course page URL.
     *              Format is hex values as {@code ####-####-####-####} (so 16 digits in groups of 4, groups separated
     *              by a {@code -})
     * @return {string} Course Page HTML content as a String
     */
    async getCoursePage(code) {
        const response = await got(this._getCoursePageUrl(code));
        return response.body;
    }

    /**
     * Forms Course Page URL, given a level code.
     *
     * @param code Level Code (String). Used to form the course page URL.
     *              Format is hex values as {@code ####-####-####-####} (so 16 digits in groups of 4, groups separated
     *              by a {@code -})
     * @return {string}
     * @private
     */
    _getCoursePageUrl(code) {
        return [
            Constant.NINTENDO_SMM_BOOKMARK_WEBSITE.DOMAIN,
            Constant.NINTENDO_SMM_BOOKMARK_WEBSITE.PATH_COURSES,
            code
        ].join('/');
    }
}

module.exports = NintendoBookmarkPageClient;