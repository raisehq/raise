import styled from 'styled-components';

interface CompanyContainerProps {
  comingSoon: boolean;
}

interface PercentageProps {
  newWidth: number;
}

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 24px;
  width: 100%;
  max-width: 444px;
`;

export const CompanyContainer = styled.div<CompanyContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  opacity: ${props => (!props.comingSoon ? '30%;' : '')};
  align-items: center;
  margin: 16px 0 16px 0px;
  position: relative;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 24px;
  max-width: 384px;
  width: 100%;
  position: relative;
`;

export const CompanyIcon = styled.img`
  width: 36px;
  height: 34.81px;
`;

export const Percentage = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;

  color: #000000;
  margin-bottom: 6px;
`;
export const PercentageBar = styled.div<PercentageProps>`
  margin-bottom: 6px;
  width: ${props => (props.newWidth ? `${props.newWidth}%` : '0%')};
  height: 8px;

  background: rgb(235, 63, 147);
  border-radius: 100px;
  z-index: 1000;
`;

export const PercentageBarBack = styled.div<PercentageProps>`
  margin-bottom: 6px;
  width: 100%;
  height: 8px;
  margin-top: 20px;
  position: absolute;
  z-index: 999;
  background: rgba(235, 63, 147, 0.3);
  opacity: 10%;
  border-radius: 100px;
`;

export const CompanyName = styled.div`
  width: 109px;
  height: 14px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;
