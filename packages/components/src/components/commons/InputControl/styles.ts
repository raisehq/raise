import styled from 'styled-components';

import { Input } from 'semantic-ui-react';

export const InputFieldStyled = styled(Input)`
  border: ${({ disabled }) =>
    disabled ? '1px solid #D8D9DC' : '1px solid #c5c7cb'};
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  height: 48px;
  width: 260px;

  :hover {
    border: 1px solid #8a8e97;
  }

  :active {
    border: 1px solid #eb3f93;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }

  :focus {
    border: 1px solid #eb3f93;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }

  /* Overrides Semantic-ui behavior */
  &&&.ui.input input {
    border: none;
  }
`;
