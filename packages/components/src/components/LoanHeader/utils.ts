export const padNumber = number => (number < 10 ? '0' : '') + number;

export const getTotal = amount => target =>
  (parseInt(amount, 10) / parseInt(target, 10)) * 100;
