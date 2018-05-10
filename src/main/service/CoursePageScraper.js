const cheerio = require('cheerio');

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
        const $ = cheerio.load(html);
        return {
            code: $('div.courses .course-card img.course-image').attr('alt'),
            title: $('div.courses .course-card .course-info .course-title').text(),
            // gameMode, // (SMB1, SMB3, SMW, NSMBU)
            // createdAt,
            // creator, // (name, ID, nationality, picture)
            stats: {    // numbers
                attempts: this.getAttempts(html),
                clears: this.getClears(html),
                players: this.getPlayers(html),
                stars: this.getStars(html),
                shares: this.getShares(html)
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

    /*
        EXAMPLE
        <div class="tried-count typography-medium-small ">
           <div class="label">Clears</div>
           <div class="typography typography-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.5 22">
                 <path fill="#231815" d="M12.6 11l1.8 1.8v5.5L10.8 22H3.5L0 18.3v-1.8h3.5l1.8 1.8H9l1.8-1.8v-1.8L9 12.9H5.3V9.2H9l1.8-1.8V5.5L8.9 3.7H5.3L3.5 5.5H0V3.7L3.5 0h7.3l3.7 3.7v5.5L12.6 11z" />
              </svg>
           </div>
           <div class="typography typography-slash">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.7 45">
                 <path fill="#A58C26" d="M.4 45v-7.5L37.9-.1h3.7v7.5L4.1 45H.4z" />
              </svg>
           </div>
           <div class="typography typography-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.5 22">
                 <path fill="#231815" d="M12.7 11l1.8 1.8v5.5L10.9 22H3.6L0 18.3v-5.5L1.7 11 0 9.2V3.7L3.6 0h7.3l3.6 3.7v5.5L12.7 11zM5.4 3.7L3.6 5.5v1.8l1.8 1.8h3.7l1.8-1.8V5.5L9.1 3.7H5.4zm3.7 14.6l1.8-1.8v-1.8l-1.8-1.8H5.4l-1.8 1.8v1.8l1.8 1.8h3.7z" />
              </svg>
           </div>
        </div>
     */

    _parseTypography(element) {
        // TODO move this to a separate service
        element.children('.typography').each((index, el) => {
            // get classes as a string (space-delimited): cheerio(el).attr('class')
            console.log('el attr class: ', cheerio(el).attr('class'));
            const value = cheerio(el).attr('class')
                .split(' ')
                .filter(it => it.indexOf('typography-') !== -1)
                .map(it => it.substr('typography-'.length))
                .join();

            console.log('typography VALUE:', value);
        });
        return '';
    }

    getCode(html) {
        // TODO
        return '';
    }

    getTitle(html) {
        // TODO
        return '';
    }

    getAttempts(html) {
        const $ = cheerio.load(html);
        this._parseTypography($('.tried-count'));
        // TODO
        return '';
    }

    getClears(html) {
        // TODO
        return '';
    }

    getPlayers(html) {
        // TODO
        return '';
    }

    getStars(html) {
        // TODO
        return '';
    }

    getShares(html) {
        // TODO
        return '';
    }

}

module.exports = CoursePageScraper;