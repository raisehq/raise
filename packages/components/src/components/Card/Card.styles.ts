import styled from 'styled-components';
import { Icon, Image } from 'semantic-ui-react';
import { device } from '../../utils/breakpoints';

interface RowContentProps {
  contentColor?: string | null;
}

interface RowWrapperProps {
  notop?: boolean | null | undefined;
  small?: boolean | null | undefined;
  big?: boolean | null | undefined;
}

interface GridProps {
  noGraph?: boolean;
  nobottom?: boolean;
  notop?: boolean;
  spaceBetween?: boolean;
  alignCenter?: boolean;
  alignBottom?: boolean;
  alignTop?: boolean;
}

interface ImageCropProps {
  src?: string | null;
}

interface HeroCardProps {
  type?: string | null;
}

export const GraphContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CardImageCrop: any = styled.div<ImageCropProps>`
  width: 100%;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ src }) => `url(${src})`};
  border-radius: 6px 6px 0 0;
  border: 1px solid #cfd0d4;
`;
export const CardHref: any = styled.a`
  width: 100%;
  display: block;
`;
export const CardLogo: any = styled(Image)`
  &&& {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #cfd0d4;
  }
`;

interface HeroCardProps {
  size?: string;
  width?: string;
}

export const HeroCard = styled.div<HeroCardProps>`
  min-height: ${({ size }) => size || '335px'};
  border-radius: 6px;
  background-color: #ffffff;
  border: 1px solid #cfd0d4;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;

  max-width: ${({ width }) => width || '372px'} !important;
  @media ${device.laptop} {
    width: ${({ width }) => width || '372px'} !important;
  }
  width: 100%;
`;

export const TimeLeft = styled.div`
  font-weight: bold;
  color: #5a5a5a;
  font-size: 14px;
`;

export const CardBorrowerTitle = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

export const CardDescription = styled.div`
  max-height: 76px;
  height: 76px;
  line-height: 21px;
  color: #5a5a5a;
  font-size: 14px;
  display: block;
  text-align: left;
`;

export const CardContent = styled.div<{
  children?: any;
  logo?: any;
  size?: any;
}>`
  padding: 20px;
  position: relative;
  height: ${({ size }) => size || '100%'};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: ${({ logo }) => (logo ? '55px' : '0')};
  &&& > .logoWrap {
    position: absolute;
    top: -35px;
    left: 14px;
  }
  &&& > ${TimeLeft} {
    position: absolute;
    top: 10px;
    right: 8px;
  }
`;

export const Grid: any = styled.div<GridProps>`
  display: flex;
  margin: 20px 0px;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? 'space-between' : 'unset'};
  ${({ nobottom }) => nobottom && 'margin-bottom: 0;'}
  ${({ notop }) => notop && 'margin-top: 0;'}
  ${({ alignCenter }) => alignCenter && 'align-items: center;'}
  ${({ alignBottom }) => alignBottom && 'align-items: flex-end;'}
  ${({ alignTop }) => alignTop && 'align-items: flex-start;'}
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const Row = styled.div<RowWrapperProps>`
  flex: ${({ small }) => (small ? '1 0 25%' : '1 0 32.5%')};
  margin: 20px 0px 0px 0px;
  ${({ notop }) => notop && 'margin-top: 0;'}
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowContent = styled.div<RowContentProps>`
  color: ${({ contentColor }) => (contentColor ? contentColor : '#5a5a5a')};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const RowTitle = styled.div<RowWrapperProps>`
  font-size: ${({ big }) => (big ? '14px' : '10px')};
  color: #5c5d5d;
  text-align: center;
`;

export const GraphTitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-left: 6px;
`;

export const Header = styled.div`
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  color: #5a5a5a;
  font-size: 12px;
  font-weight: lighter;
  line-height: 14px;
  margin-bottom: 12px;
  margin-top: 20px;
`;

export const HeaderContent = styled.div<{ fontSize?: any }>`
  color: #3c4251;
  font-size: ${({ fontSize }) => fontSize || '26px'};
  font-weight: bold;
  line-height: 32px;
`;

export const RoiHeader = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 12px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;

export const RoiContent = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
`;

export const SubHeader = styled.div`
  margin-top: 0px;
  margin-bottom: 5px;
`;

export const SubHeaderTitle = styled.div`
  color: #5a5a5a;
  font-size: 10px;
  font-weight: lighter;
  margin-bottom: 4px;
  line-height: 14px;
`;

export const SubHeaderContent = styled.div`
  color: #3c4251;
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
`;

export const Graph: any = styled.div`
  width: 90%;
  height: 10px;
  background: #ecedee;
  position: relative;
  overflow: hidden;

  &&:before {
    content: '';
    position: absolute;
    width: ${(props: any) => (props.width * 100) / 90}%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props: any) => props.color};
  }
`;

export const ProgressPercent = styled.div`
  font-weight: bold;
  color: white;
  position: absolute;
  font-size: 14px;
  top: 2px;
  left: 5px;
`;

export const ProgressBar: any = styled.div`
  width: 100%;
  height: 23px;
  background: #ecedee;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  &&:before {
    content: '';
    position: absolute;
    width: ${(props: any) => props.width}%;
    height: 100%;
    top: 0;
    border-radius: 4px;
    left: 0;
    background: ${(props: any) => props.color};
  }
`;

export const Badge = styled.div`
  width: 80px;
  height: 20px;
  color: #fff;
  position: absolute;
  top: 15px;
  right: 15px;
  text-align: center;
  padding: 3px 0 3px 0;
  font-weight: bold;
  background: ${({ color }) => color};
  border-radius: 30px;
  font-size: 12px;
  line-height: 15px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #ecedee;
  margin: 0px;
`;

export const Vertical = styled.div`
  width: 2px;
  height: 35px;
  background: #ecedee;
  margin: 0px;
`;

export const InfoIcon = styled.div`
  position: absolute;
  right: 105px;
  font-size: 9px;
  background: black;
  width: 18px;
  height: 18px;
  border-radius: 36px;
`;

export const InfoIconCmp = styled(Icon)`
  &&& {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
  }
`;
