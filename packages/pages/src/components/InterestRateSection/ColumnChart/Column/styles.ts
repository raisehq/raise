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
  justify-items: center;
  align-items: center;
  width: 100%;
  max-width: 264px;
  margin: 12px;

  @media (max-width: ${size.mobileL}) {
    max-width: 79px;
    margin: 0 4px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ColumnItem = styled.div<ColumnItemProps>`
  height: ${({ height }) => `${height}px`};
  background: ${({ background }) => background};
  border-radius: 4px;
  width: 100%;
  max-width: 264px;

  @media (max-width: ${size.mobileM}) {
    height: ${({ height }) => `${height / 2}px`};
  }
`;

export const Label = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  color: inherit;
  text-align: left;
`;

export const LabelText = styled(Label)`
  @media (max-width: ${size.mobileM}) {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
  @media (max-width: 750px) {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
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
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  max-width: 264px;
  padding-top: 20px;
  padding-bottom: 5px;

  color: ${({ color }) => color};
  @media (max-width: 1270px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
