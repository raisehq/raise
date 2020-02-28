import React from 'react';
import { ButtonStyledGroup, ButtonStyled, ButtonContent } from './styles';
import { Icon } from 'semantic-ui-react';

const GroupButton = ({ options, withIcon = false }) => {
  return (
    <ButtonStyledGroup>
      {options.map((item, index) => (
        <ButtonStyled icon>
          <ButtonContent key={index}>
            {withIcon && <Icon name={item.icon} />}
            {item.text}
          </ButtonContent>
        </ButtonStyled>
      ))}
    </ButtonStyledGroup>
  );
};

export default GroupButton;
