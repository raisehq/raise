import React from 'react';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';

const LoanInput = props => {
  const decimalScale = 2;
  const thousandSeparator = '.';
  const decimalSeparator = ',';
  const numeralSize = numeral(props.value).length  ;
  return (
    <NumberFormat
      allowEmptyFormatting={false}
      fixedDecimalScale={true}
      decimalScale={decimalScale}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      size={numeralSize}
      {...props}
    />
  );
};

export default LoanInput;
