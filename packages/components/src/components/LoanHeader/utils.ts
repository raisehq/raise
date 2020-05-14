export const padNumber = number => (number < 10 ? '0' : '') + number;

export const getTotal = amount => target =>
  ((parseInt(amount, 10) * 100) / parseInt(target, 10)).toFixed(2);
