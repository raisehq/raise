import styled from 'styled-components';
import { SubBar } from '../styles';

interface TopHeaderWrapperProps {
  logged: boolean;
}

export const Bar = styled(SubBar)`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  padding: 0px 10px;
`;

export const TopHeaderWrapper = styled.div<TopHeaderWrapperProps>`
  background: #ffffff;
  box-shadow: ${({ logged }) => (logged ? 'none' : '0px 2px 14px rgba(0, 0, 0, 0.25)')};
`;
