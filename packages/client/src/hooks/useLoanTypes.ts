import { useRef } from 'react';

const useLoanTypes = loanTypes => {
  const types = useRef([]);

  types.current = loanTypes.reduce(
    (acc, curr) => [
      ...acc,
      {
        text: curr.name,
        id: curr.id,
        value: curr.id,
        data: curr
      }
    ],
    [{ id: 0, text: 'ALL', value: 0 }]
  );

  return types;
};

export default useLoanTypes;
