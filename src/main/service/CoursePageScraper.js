/**
 * Gathers Data from a Course Page (HTML)
 */
class CoursePageScraper {
    /**
     * Gets the Data out of a Course Page (HTML)
     *
     * @param html String. HTML of the Course Page. See Examples:
     *              - https://supermariomakerbookmark.nintendo.net/courses/1DAB-0000-03A0-CA78
     *              - "resources/example_level/SUPER MARIO MAKER BOOKMARK _ You Can Go the Distance! - 1DAB-0000-03A0-CA78.htm"
     * @return {{id: *, title: *, stats: {attempts: *, clears: *, players: *, stars: *, shares: *}}}
     */
    scrape(html) {
        /*
            1. parse HTML using some library
            2. return a model containing data we want from the Course Page
         */
        return {
            id,
            title,
            // gameMode, // (SMB1, SMB3, SMW, NSMBU)
            // createdAt,
            // creator, // (name, ID, nationality, picture)
            stats: {    // numbers
                attempts,
                clears,
                players,
                stars,
                shares
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