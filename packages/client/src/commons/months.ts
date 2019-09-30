const monthsToSeconds = months => months * 30 * 24 * 60 * 60;
const getMonths = (network: string) => [
  ...(['kovan'].includes(network) ? [{ key: '0', value: 300, text: '5 minutes' }] : []),
  ...Array.from({ length: 12 }, (v, k) => ({
    key: `${k + 1}`,
    value: monthsToSeconds(k + 1),
    text: `${k + 1} month${k >= 1 ? 's' : ''}`
  }))
];

export default getMonths;
