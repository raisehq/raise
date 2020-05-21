import React from 'react';
import { Image } from 'semantic-ui-react';
import { ButtonStyledGroup, ButtonStyled, ButtonContent } from './styles';
import { Option } from '../../../../commons/option';

interface GroupButtonProps {
  options: Option[];
  onClick: Function;
  withIcon?: boolean;
  selectedIndex: number;
}

const GroupButton: React.SFC<GroupButtonProps> = ({
  options,
  withIcon = false,
  onClick,
  selectedIndex
}: any) => (
  <ButtonStyledGroup>
    {options.map((item) => (
      <ButtonStyled
        icon
        key={item.key}
        onClick={() => onClick(item.value)}
        className={item.key === selectedIndex.toString() && 'selected'}
        disabled={item.disabled}
      >
        <ButtonContent>
          {withIcon && (
            <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/coins/${item.icon}`} />
          )}
          {item.text}
        </ButtonContent>
      </ButtonStyled>
    ))}
  </ButtonStyledGroup>
);

export default GroupButton;
