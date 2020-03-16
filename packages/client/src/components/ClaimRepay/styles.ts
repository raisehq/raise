import styled from 'styled-components';
import { Checkbox } from 'semantic-ui-react';

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const CheckboxDeposit = styled(Checkbox)``;

export const CheckboxDepositLabel = styled.div`
  font-size: 16px;
  line-height: 18px;
  width: 100%;
  margin-left: 10px;
`;
