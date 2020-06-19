import styled from 'styled-components';

export interface ColumnItemProps {
  height: string;
  color: string;
}

export interface LabelProps {
  color: string;
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 0 10px;
  min-width: 264px;

  @media (max-width: 1270px) {
    min-width: 79px;
    padding: 0 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ColumnItem = styled.div<ColumnItemProps>`
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  border-radius: 4px;
  width: 100%;
`;

export const Label = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: inherit;
`;

export const LabelText = styled(Label)`
  @media (max-width: ${size.mobileM}) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const LabelNumber = styled(Label)`
  @media (max-width: ${size.mobileM}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const TextContainer = styled.div<LabelProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 20px 0;
  color: ${({ color }) => color};
  @media (max-width: 1270px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
s
  }
`;
