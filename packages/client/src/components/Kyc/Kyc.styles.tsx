import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import theme from '../../theme';

export const KYCWrapper = styled.div`
  width: 100%;
  padding: 0 20px 25px 20px;
  box-sizing: border-box;
`;

export const KYCHolder = styled.div`
  background: #ffffff;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
`;

export const KYCDisclaimer = styled.p`
  font-size: 16px;
`;

export const Title = styled(Header)`
  text-align: center;
`;

/**************** Bloom **************/

export const KycWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KycContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 300px;
  max-width: 400px;
`;

export const KycTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.div`
  color: #3c4251;
  font: 26px bold;
  line-height: 36px;
  text-align: center;
  margin: 10px;
`;

export const SelectKycMethodList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardSubTitle = styled.div`
  text-align: center;

`;

export const KycButtonWrapper = styled.div`
  margin: 5px 0;
  width: 100%;
`;

export const KycButton = styled.button`
  height: 48px;
  width: 100%;
  padding: 15px 0px;
  border-radius: 4px;
  border: none;
  font-family: Lato;
  font-size: 18px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }
`;

export const KycSumSub = styled(KycButton)`
  background: ${theme.gradient.sumSub};
`;

export const KycBloom = styled(KycButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;
  color: #6067f1;
  border: 1px solid #6067f1;
  span {
    padding: 0 10px;
  }
`;

export const LinkWrap = styled.div`
  text-align: center;
`;
