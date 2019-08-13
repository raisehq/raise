import React from 'react';
import NumberFormat from 'react-number-format';

const LoanInput = (props) => {
  const decimalScale = 2;
  const thousandSeparator = '.';
  const decimalSeparator = ',';
  return (
    <NumberFormat
      allowEmptyFormatting={true}
      fixedDecimalScale={true}
      decimalScale={decimalScale} 
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      {...props}
    />
  );
}

export default LoanInput;