import styled from 'styled-components';
import Button from '../commons/ButtonControl/Button';

export const NeedHelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3c4251;
  align-items: center;
  width: 100%;
`;
export const NeedHelpTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  margin-top: 57px;
  text-align: center;
`;

export const NeedHelpParagraph = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #b1b3b9;
  margin-top: 33px;
  margin-bottom: 50px;
  max-width: 440px;
`;
export const NeedHelpButton = styled(Button)``;

export const ButtonContainer = styled.div`
  margin-bottom: 50px;
`;

export const Link = styled.a``;
