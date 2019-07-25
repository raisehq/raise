import { useRef } from 'react';

const useSelectableAccountType = () => {
  const selectableAccountType: any = useRef([]);

  selectableAccountType.current = [
    {
      text: 'Originator',
      id: 1,
      value: 1
    },
    {
      text: 'Lender',
      id: 2,
      value: 2
    }
  ];

  return selectableAccountType;
};

export default useSelectableAccountType;
