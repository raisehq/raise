import React from 'react';
import numeral from 'numeral';
import NumberFormat from 'react-number-format';
import { InputFieldStyled } from '../styles';

const InputNumber = (props: any) => {
  const decimalScale = 2;
  const thousandSeparator = '.';
  const decimalSeparator = ',';
  const { value } = props;
  const numeralSize = numeral(value).length;

  return (
    <NumberFormat
      className="input-number"
      allowEmptyFormatting={false}
      fixedDecimalScale
      decimalScale={decimalScale}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      size={numeralSize}
      customInput={InputFieldStyled}
      {...props}
    />
  );
};

export default InputNumber;
