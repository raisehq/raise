import styled from 'styled-components';

const AmountComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 22px;
  &&& > div:first-child {
    margin-left: 5px;
  }
  &&& > span:last-child {
    margin-left: 9px;
    color: #5a5a5a;
    font-size: 14px;
    font-weight: bold;
  }
`;

export { AmountComponent };
export default AmountComponent;
