/**
 * <p>Maps symbol text appearing in typography to corresponding characters, etc</p>
 *
 * <p>Ex: {@code "slash"} maps to {@code "/"}</p>
 */
class SymbolMapper {
    /**
     * <p>Maps symbol text appearing in typography to corresponding characters, etc</p>
     *
     * <p>Ex: {@code "slash"} maps to {@code "/"}</p>
     *
     * @param symbol String typography symbol to be mapped to a character, etc
     * @return {string} corresponding value, if present in the known map. otherwise, original value is returned.
     */
    map(symbol) {
        // this map should probably be injected/external constant
        const known = {
            'minute': ':',
            'second': '.',
            'percent': '%',
            'slash': '/'
        };
        return known[symbol] !== undefined
            ? known[symbol]
            : symbol;
    }
}

module.exports = SymbolMapper;