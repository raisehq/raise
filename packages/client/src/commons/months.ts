const monthsToSeconds = months => months * 30 * 24 * 60 * 60;

const daysToSecond = days => days * 24 * 60 * 60;

export const getMonths = (network: string) => [
  ...(['kovan'].includes(network) ? [{ key: '0', value: 300, text: '5 minutes' }] : []),
  ...Array.from({ length: 12 }, (v, k) => ({
    key: `${k + 1}`,
    value: monthsToSeconds(k + 1),
    text: `${k + 1} month${k >= 1 ? 's' : ''}`
  }))
];

export const getLoanAuctionInterval = (network: string) => [
  ...(['kovan'].includes(network) ? [{ key: '0', value: 300, text: '5 minutes' }] : []),
  ...[7, 15, 30, 45].map((item, index) => ({
    key: `${index + 1}`,
    value: daysToSecond(item),
    text: `${item} day${item >= 1 ? 's' : ''}`
  }))
];

export const getLoanAuctionIntervalArray = (network: string) => [
  ...[7, 15, 30, 45].map((item, index) => ({
    key: `${index}`,
    value: daysToSecond(item),
    text: `${item}`
  }))
];
