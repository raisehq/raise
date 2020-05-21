import React, { useRef, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';

const LoanInput = ({
  fixedDecimalScale = true,
  decimalScale = 2,
  thousandSeparator = '.',
  decimalSeparator = ',',
  ...props
}: any) => {
  const { value } = props;
  const numeralSize = numeral(value).length;
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <NumberFormat
      allowEmptyFormatting={false}
      fixedDecimalScale={fixedDecimalScale}
      decimalScale={decimalScale}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      size={numeralSize}
      getInputRef={inputRef}
      {...props}
      allowLeadingZeros={false}
    />
  );
};

export default LoanInput;
