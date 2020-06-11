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
  border: 1px solid black;
`;

export const StepWrapper = styled.div`
  width: 45%;
`;

export const ControlWrapper = styled.div`
  padding: 0 0 50px 0;
`;

export const SpecialRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
