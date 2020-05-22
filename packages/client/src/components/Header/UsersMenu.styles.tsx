import styled from 'styled-components';
import { Button, ButtonProps } from '@raisehq/components';

export const HeaderButton = styled(Button)<ButtonProps>`
  &&& {
    margin: 0;
    margin-right: 10px;
  }
`;

export default HeaderButton;
