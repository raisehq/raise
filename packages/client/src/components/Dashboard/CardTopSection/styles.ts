import styled from 'styled-components';

interface LogoProps {
  src?: string | null;
}

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c5c7cb;
  padding: 10px 0;
  margin-top: 8px;
`;

export const Logo = styled.a<LogoProps>`
  width: 151px;
  height: 56px;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
`;
