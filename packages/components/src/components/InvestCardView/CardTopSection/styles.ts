import styled from 'styled-components';

interface LogoProps {
  src?: string | null;
}

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;
  border-bottom: 1px solid #c5c7cb;
  padding: 10px 0;

  margin-top: 8px;
`;

export const Logo = styled.div<LogoProps>`
  width: 151px;
  height: 56px;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
`;

export const MenuSpots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-right: 10px;
  width: 30%;
  height: auto;
  color: #b1b3b9;
  cursor: pointer;
`;

export const Container = styled.div`
  background: #ffffff;
`;
