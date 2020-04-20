import styled from 'styled-components';
import { Accordion } from 'semantic-ui-react';

interface TitleProps {
  active: boolean;
}

export const Title = styled(Accordion.Title)<TitleProps>`
  &&&& {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: ${({ active }) => (active ? '#f9bc2e' : '#8A8E97')};
  }
  span {
    color: #f9bc2e;
  }
`;

export const Container = styled.div`

  padding: 8px 0;
  width: 100%;
`;
