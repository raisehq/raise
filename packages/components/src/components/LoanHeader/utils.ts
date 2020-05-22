export const padNumber = (number) => (number < 10 ? '0' : '') + number;

export const getTotal = (principalNum, maxAmountNum) => {
  const percentage = (Number(principalNum) / Number(maxAmountNum)) * 100;
  return percentage.toFixed(2);
};

export const isRaiseInvested = (principal, maxAmount) => {
  const percentage = (Number(principal) / Number(maxAmount)) * 100;
  return percentage >= 10;
};
