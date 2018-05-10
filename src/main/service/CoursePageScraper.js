const cheerio = require('cheerio');

/**
 * Gathers Data from a Course Page (HTML)
 */
class CoursePageScraper {
    /**
     * TODO: jsdocs here, re: dependencies
     *
     * @param typographyParser
     */
    constructor(typographyParser) {
        this.typographyParser = typographyParser;
    }

    /**
     * Gets the Data out of a Course Page (HTML)
     *
     * @param html String. HTML of the Course Page. See Examples:
     *              - https://supermariomakerbookmark.nintendo.net/courses/1DAB-0000-03A0-CA78
     *              - "resources/test/example_level/SUPER MARIO MAKER BOOKMARK _ You Can Go the Distance! - 1DAB-0000-03A0-CA78.htm"
     * @return {{id: *, title: *, stats: {attempts: *, clears: *, players: *, stars: *, shares: *}}}
     */
    scrape(html) {
        /*
            1. parse HTML using some library
            2. return a model containing data we want from the Course Page
         */
        const $ = cheerio.load(html);
        return {
            code: $('div.courses .course-card img.course-image').attr('alt'),
            title: $('div.courses .course-card .course-info .course-title').text(),
            // gameMode, // (SMB1, SMB3, SMW, NSMBU)
            // createdAt,
            // creator, // (name, ID, nationality, picture)
            stats: {    // numbers
                attempts: this.typographyParser.parse($('.tried-count')).split('/')[1],
                clears: this.typographyParser.parse($('.tried-count')).split('/')[0],
                players: this.typographyParser.parse($('.played-count')),
                stars: this.typographyParser.parse($('.liked-count')),
                shares: this.typographyParser.parse($('.shared-count'))
            },
            // clearRate,
            // difficulty, // (Easy, Normal, Expert, Super Expert)
            // tag,
            // smallImageUrl, (preview)
            // largeImageUrl, (banner)
            // playerInfos: { // (name, ID, nationality, picture)
            //     worldRecord,
            //     firstClear,
            //     recentPlayers: [],
            //     clearedBy: [],
            //     starredBy: []
            // }
        };
    }

}

module.exports = CoursePageScraper;