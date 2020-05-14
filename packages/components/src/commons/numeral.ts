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
    ordinal: (number) => {
      const b = number % 10;
      /* eslint-disable */
      // TODO : Try to do without ternary condition
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
      /* eslint-enable */
    },
    currency: {
      symbol: '€'
    }
  });
}

numeral.locale('hero');
numeral.defaultFormat(numeralFormat);
/** End of numer formatting */

export default numeral;
