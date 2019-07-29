import styled from 'styled-components';
import Web3Address from '../Web3Address';

export const StyledAddress = styled(Web3Address)`
&&& {
  position: absolute;
  right: 20px;
  top: 20px;
}`;

export const Raf = styled.div`
  padding: 1em 1em;
  border-top-left-radius: 0.285714rem;
  border-top-right-radius: 0.285714rem;
  min-height: 519px;
  background-image: linear-gradient(0deg, #F2FAFA 0%, #FFFFFF 100%);
  display: flex;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);

  .content {
    margin: 0 !important;
    padding: 0 !important;
  }

  .visuals {
    flex: 0 1 500px;
  }

  .process {
    padding: 50px;
    flex: 0 1 450px;
    box-sizing: border-box;
  }
`;

export const StartEarningNow = styled.div`
  height: 55px;
  width: 429px;
  color: #000000;
  font-family: Lato;
  font-size: 48px;
  font-weight: bold;
  line-height: 44px;
  margin: 59px 0px 8px 50px;
`;

export const InviteYourFriends = styled.div`
  height: 85px;
  width: 410px;
  color: #000000;
  font-family: Lato;
  font-size: 27px;
  line-height: 36px;
  margin: 8px 0px 100px 50px;
`;

export const Address = styled.div`
  height: 17px;
  width: 97px;
  color: #5c5d5d;
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
`;

export const ShareLink = styled.div`
  height: 79px;
  width: 331px;
  margin: 100px 0px 41px 0px;
`;

export const ShareYourUniqueLi = styled.div`
  height: 21px;
  width: 138px;
  color: #5c5d5d;
  font-family: Lato;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
  margin-left: 50px;
`;

export const ShareInput = styled.div`
  width: 320px;
  display: flex;
  margin: 10px 4px 41px 50px;

  input {
    height: 48px;
    width: 222px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    margin: 10px 4px 55px 0px;

    .value {
      height: 21px;
      width: 200px;
      color: #5c5d5d;
      font-family: Lato;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const CopyButton = styled.button`
  margin-left: 4px;
  height: 48px;
  width: 105px;
  background-color: #EB3F93;
  color: #ffffff;
  font-family: Lato;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const RafImage = styled.img`
  height: auto;
  width: 100%;
  margin: 285px 0px 50px -110px;
`;

export const RafImageContainer = styled.div`
`

export const Social = styled.div`
  height: 38px;
  width: 302px;
  display: flex;
  margin: 41px 73px 50px 50px;

  .SocialMediaShareButton {
    margin-right: 28px;
  }

  .img {
    height: 38px;
    width: 38px;
    background: linear-gradient(203.2deg, #37aee2 0%, #1e96c8 100%);
  }
`;

export const LabelWeb3 = styled.div`
  padding: 0.8em !important;
  min-width: 2em;
  min-height: 2em;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
  background: none #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  display: inline-block;
  transition: background 0.1s ease;
  float: right;
`;
