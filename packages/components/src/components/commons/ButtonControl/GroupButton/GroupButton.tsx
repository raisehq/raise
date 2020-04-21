import React from 'react';
import { Image } from 'semantic-ui-react';
import { ButtonStyledGroup, ButtonStyled, ButtonContent } from './styles';

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
}: any) => (
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

export default GroupButton;
