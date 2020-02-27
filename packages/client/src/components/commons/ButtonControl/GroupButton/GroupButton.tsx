import React from 'react';
import { ButtonStyledGroup, ButtonStyled, ButtonContent } from './styles';
import { Icon } from 'semantic-ui-react';

const GroupButton = () => {
  return (
    <ButtonStyledGroup>
      <ButtonStyled icon>
        <ButtonContent>
          <Icon name="heart" />
          One
        </ButtonContent>
      </ButtonStyled>
      <ButtonStyled icon>
        <ButtonContent>
          <Icon name="heart" />
          One
        </ButtonContent>
      </ButtonStyled>
      <ButtonStyled icon>
        <ButtonContent>
          <Icon name="heart" />
          One
        </ButtonContent>
      </ButtonStyled>
    </ButtonStyledGroup>
  );
};

export default GroupButton;
