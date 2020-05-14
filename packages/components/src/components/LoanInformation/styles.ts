import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(60, 66, 81, 0.15);
  border-radius: 4px;
  max-width: 648px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  padding: 20px 0;
`;

export const SubItem = styled.div`
  text-align: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
`;

export const Label = styled(SubItem)`
  font-size: 12px;
  line-height: 16px;
  color: #8a8e97;
  padding: 3px 0;
`;

export const Value = styled(SubItem)`
  font-size: 20px;
  line-height: 24px;
  color: #3c4251;
`;

export const ItemWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageLogo = styled.img`
  width: 23px;
  height: 23px;
  padding-right: 5px;
`;
