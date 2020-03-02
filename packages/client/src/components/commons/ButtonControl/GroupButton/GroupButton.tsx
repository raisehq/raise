import React from 'react';
import { ButtonStyledGroup, ButtonStyled, ButtonContent } from './styles';

import { Icon } from 'semantic-ui-react';

const GroupButton = ({ options, withIcon = false, onClick, selectedIndex, ...rest }) => {
  return (
    <ButtonStyledGroup>
      {options.map(item => (
        <ButtonStyled
          icon
          key={item.key}
          onClick={onClick(item.value)}
          className={item.key === selectedIndex.toString() && 'selected'}
        >
          <ButtonContent>
            {withIcon && <Icon name={item.icon} />}
            {item.text}
          </ButtonContent>
        </ButtonStyled>
      ))}
    </ButtonStyledGroup>
  );
};

export default GroupButton;
