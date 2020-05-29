import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 20px rgba(60, 66, 81, 0.15);
  border-radius: 4px;
  max-width: 648px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px 60px;
  gap: 30px 10%;
  grid-template-areas: '. . .' '. . .';

  @media screen and ${device.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 60px;
    gap: 0px 30px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
