import React from 'react';
import numeral from 'numeral';
import NumberFormat from 'react-number-format';
import { InputFieldStyled } from '../styles';

const InputNumber = (props: any) => {
  const decimalScale = 2;
  const thousandSeparator = '.';
  const decimalSeparator = ',';
  const numeralSize = numeral(props.value).length;

  return (
    <NumberFormat
      className="input-number"
      allowEmptyFormatting={false}
      fixedDecimalScale={true}
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
