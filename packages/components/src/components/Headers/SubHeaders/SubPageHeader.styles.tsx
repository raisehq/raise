import styled from 'styled-components';

export const SubBar = styled.div`
  height: 44px;
  display: flex;
  background: white;
  border: 1px solid #d8d9dc;
`;

export const SubItem = styled.div`
  height: 24px;
  color: #8a8e97;
  background: white;
  & > *,
  & > *:hover,
  & > *:focus {
    color: #8a8e97;
    font-size: 16px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
