import { useRef } from 'react';

const useLoanPurposesTypes = (purposes) => {
  const types = useRef([]);

  types.current = purposes.reduce(
    (acc, curr) => [
      ...acc,
      {
        text: curr.name,
        id: curr.id,
        value: curr.id
      }
    ],
    [{ id: 0, text: 'ALL', value: 0 }]
  );

  return types;
};

export default useLoanPurposesTypes;
