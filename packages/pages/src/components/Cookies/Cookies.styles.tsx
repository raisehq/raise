import styled from 'styled-components';

export const CookiesBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: auto;
  background-color: #fff;
  z-index: 225;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

export const Columns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div,
  & > & {
    margin: 0px 10px;
  }
`;
