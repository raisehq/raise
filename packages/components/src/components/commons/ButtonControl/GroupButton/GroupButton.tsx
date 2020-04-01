import React from 'react';
import { ButtonStyledGroup, ButtonStyled, ButtonContent } from './styles';

import { Image } from 'semantic-ui-react';

interface GroupButtonProps {
  options: any;
  onClick: Function;
  withIcon?: boolean;
  selectedIndex: number;
}

const GroupButton: React.SFC<GroupButtonProps> = ({
  options,
  withIcon = false,
  onClick,
  selectedIndex,
}) => {
  return (
    <ButtonStyledGroup>
      {options.map((item: any) => (
        <ButtonStyled
          icon
          key={item.key}
          onClick={onClick(item.value)}
          className={item.key === selectedIndex.toString() && 'selected'}
        >
          <ButtonContent>
            {withIcon && (
              <Image
                src={`${process.env.REACT_APP_HOST_IMAGES}/images/coins/${item.icon}`}
              />
            )}
            {item.text}
          </ButtonContent>
        </ButtonStyled>
      ))}
    </ButtonStyledGroup>
  );
};

export default GroupButton;
