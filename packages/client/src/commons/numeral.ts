import numeral from 'numeral';

/** Start of number formatting */
export const numeralFormat = '0,0.00';

if (!numeral?.locales?.hero) {
  numeral.register('locale', 'hero', {
    delimiters: {
      thousands: '.',
      decimal: ','
    },
    abbreviations: {
      thousand: 'k',
      million: 'mm',
      billion: 'b',
      trillion: 't'
    },
    /* eslint-disable */
    ordinal: function(number) {
      var b = number % 10;
      return b === 1 || b === 3
        ? 'er'
        : b === 2
        ? 'do'
        : b === 7 || b === 0
        ? 'mo'
        : b === 8
        ? 'vo'
        : b === 9
        ? 'no'
        : 'to';
    },
    currency: {
      symbol: '€'
    }
  });
  /* eslint-enable */
}

numeral.locale('hero');
numeral.defaultFormat(numeralFormat);
/** End of numer formatting */

export default numeral;
