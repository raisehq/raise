import styled from 'styled-components';

import { Select } from 'semantic-ui-react';

export const SelectStyled = styled(Select)`
  background: #ffffff;
  border: 1px solid #cfd0d4;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;

  &&&.ui.selection.dropdown,
  &&&.ui.selection.visible.dropdown > .text {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #5a5a5a;
  }

  :hover {
    border: 1px solid #8a8e97;
    i.icon.dropdown::before {
      color: #8a8e97;
    }
  }

  :active,
  :focus,
  &&&.selection:active,
  &&&.selection:focus {
    border: 1px solid #eb3f93;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    i.icon.dropdown::before {
      color: #eb3f93;
    }
  }

  &&&.ui.selection.active.dropdown {
    border: 1px solid #eb3f93;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    i.icon.dropdown::before {
      color: #eb3f93;
    }
  }
  &&&.ui.selection.active.dropdown .menu {
    border: 1px solid #eb3f93;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    i.icon.dropdown::before {
      color: #eb3f93;
    }
  }
`;
