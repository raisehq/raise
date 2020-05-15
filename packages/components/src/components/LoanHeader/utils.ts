export const padNumber = (number) => (number < 10 ? '0' : '') + number;

export const getTotal = (principalNum, maxAmountNum) =>
  ((Number(principalNum) * 100) / Number(maxAmountNum)).toFixed(2);

export const isRaiseInvested = (principal, maxAmount) =>
  parseInt(getTotal(principal, maxAmount), 10) > 10;
