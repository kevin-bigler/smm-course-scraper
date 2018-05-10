const cheerio = require('cheerio');

/**
 * Helper utility method to determine if a value is numeric
 *
 * @param val Value to test.  Attempts to convert to number in determining if the value is numeric (ie so strings work)
 */
const isNumeric = (val) => !isNaN(val);

/**
 * <p>Parses Typography values from HTML blocks into data values they represent (String or Number)</p>
 *
 * <p>Ex:<pre>
 *
 *     <div class="typography-container liked-count">
 *         <div class="typography typography-1"><svg/></div>
 *         <div class="typography typography-6"><svg/></div>
 *     </div>
 *
 * </pre></p>
 *
 * <p>Value returned may be a number if a numeric value is ascertained (ex: 16 stars), or a string otherwise (ex: "15/27"
 * for an attempt count, or "0:45:16" for a world record time).</p>
 */
class TypographyParser {
    /**
     * TODO: explain dependencies
     *
     * @param symbolMapper SymbolMapper
     */
    constructor(symbolMapper) {
        this.symbolMapper = symbolMapper;
    }

    /**
     * <p>Parses number or string value from Nintendo's "typography" HTML blocks -- how it conveys information like
     * Star Count, Play Count, Completion Ratio, and World Record Time.</p>
     *
     * <p>Child elements having the "typography" class also have a {@code .typography-<token>} class.  The tokens from
     * all of these matching elements are concatenated and returned.</p>
     *
     * <p>If the resulting value is numeric, then the value returned will be cast to a number. Otherwise, the value
     * will be returned as a string.</p>
     *
     * <p>Many tokens correspond to special characters, ex: "slash" for "/" -- so those tokens are converted. If a
     * token is encountered and not recognized, then the original token text will be used.</p>
     *
     * @param element The HTML Element object or String that wraps/contains the {@code .typography} elements
     */
    parse(element) {
        const tokens = [];

        cheerio(element).children('.typography').each((index, el) => {
            tokens.push(this._parseToken(cheerio(el).attr('class')));
        });

        return tokens.map(this.symbolMapper.map).join('');
    }

    /**
     * Parses typography tokens from an HTML element's {@code class} attribute value
     *
     * @param classes <em>String</em>, as is from the HTML element (ie {@code class} attribute value)
     * @private
     */
    _parseToken(classes) {
        return classes.split(' ')
            .filter(it => it.indexOf('typography-') !== -1)
            .map(it => it.substr('typography-'.length))
            .join('');
    }
}

module.exports = TypographyParser;
