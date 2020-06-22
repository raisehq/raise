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
    padding: 0 10px;
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
  height: ${({ height }) => `${height}px`};
  background: ${({ background }) => background};
  border-radius: 4px;
  width: 100%;

  @media (max-width: ${size.mobileM}) {
    height: ${({ height }) => `${height / 2}px`};
  }
  @media (max-width: 750px) {
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
  padding-top: 20px;
  padding-bottom: 5px;

  color: ${({ color }) => color};
  @media (max-width: 1270px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
