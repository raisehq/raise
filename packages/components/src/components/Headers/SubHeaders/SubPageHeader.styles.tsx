import styled from 'styled-components';
import { SubItem as RawSubItem } from '../styles';

export const SubBar = styled.div`
  height: 50px;
  display: flex;
  background: white;
  border: 1px solid #d8d9dc;
`;

export const SubItem = styled(RawSubItem)`
  background: white;
  color: #8a8e97;
  &:hover,
  &:focus {
    background: white;
  }
  & > *,
  & > *:hover,
  & > *:focus {
    color: #8a8e97;
    background: white;
    border: unset;
  }
`;
