import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 56px;
  text-align: center;
  padding: 50px;

  color: #eb3f93;
`;

export const ImageWrapper = styled.div`
  height: 500px;
  width: 55%;
`;

export const StepWrapper = styled.div``;

export const ControlWrapper = styled.div`
  padding: 0 0 50px 0;
`;

export const SpecialRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
`;

export const CheckLoanText = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #eb3f93;
  &:hover {
    color: #eb3f93;
  }
`;

export const IconWrapper = styled.span`
  padding-top: 3px;
`;
