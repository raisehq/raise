import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #FFFFFF;

  .content {
    margin: 0 !important;
    padding: 0 !important;
  }

  .visuals {
    flex: 0 1 500px;

    span {
      height: 37px;
      width: 120px;
      color: #ffffff;
      font-family: Lato;
      font-size: 40px;
      font-weight: bold;
      letter-spacing: 3px;
      line-height: 70px;
      text-align: center;
      margin: 17px 17px 0px 35px;
    }
  }

  .footer {
    height: 191px;
    width: 430px;
    padding: 0px 50px 50px 50px;
    flex: 0 1 450px;
    box-sizing: border-box;
    margin: 40px 40px 90px 50px;
  }
`;

export const GettingReady = styled.div`
  height: 21px;
  width: 191px;
  color: #002947;
  font-size: 20px;
  font-weight: bold;
  line-height: 21px;
`;

export const Soon = styled.div`
  height: 147px;
  width: 430px;
  color: #5c5d5d;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
`;

export const DaysToGoLive = styled.div`
  height: 36px;
  width: 203px;
  color: #3C4251;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px
`;