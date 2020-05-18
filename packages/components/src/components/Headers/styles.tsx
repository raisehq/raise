import styled from 'styled-components';

export const SubBar = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const SubItem = styled.div`
  height: 50px;
  background: #eb3f93;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background: #b40065;
  }

  & > *,
  & > *:hover,
  & > *:focus {
    color: white;
    font-size: 16px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
