import React, { useRef, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';

const LoanInput = ({
  fixedDecimalScale = true,
  decimalScale = 2,
  thousandSeparator = '.',
  decimalSeparator = ',',
  ...props
}) => {
  const numeralSize = numeral(props.value).length;
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
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
    />
  );
};

export default LoanInput;
