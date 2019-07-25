import styled from 'styled-components';
import { rgba } from 'polished';

type HeroButtonProps = {
  active: Boolean;
};

export const FullWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #2a80bb;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeroImage = styled.img`
  width: 160px;
  height: auto;
  font-size: 0.85714286rem;
  margin-right: auto;
  margin-left: auto;
`;

export const Promo = styled.div`
  width: 32%;
  height: 100%;
  background-image: url('https://static.herodev.es/images/background.jpeg');
  background-size: cover;
  position: relative;
  z-index: 3;
`;

export const Disclaimer = styled.div`
  font-size: 32px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  margin: 0;
  padding: 0 0 15px 0;
  font-weight: bolder;
`;

export const SubDisclaimer = styled.div`
  font-size: 16px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  margin: 0;
  padding: 0;
`;

export const HeroMessageHolder = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${rgba('#2a80bb', 0.9)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  p {
    font-size: 16px;
    color: white;
    padding: 30px 45px 30px 45px;
    font-weight: lighter;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const Actions = styled.div`
  width: 68%;
  height: 100%;
  padding: 80px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeroHeader = styled.div`
  color: #2a80bb;
`;

export const Box = styled.div`
  width: 300px;
  height: 500px;

  .ui.input {
    width: 100% !important;
  }

  input {
    width: 100% !important;
    margin-bottom: 8px !important;
  }

  .error .icon {
    color: #9f3a38;
  }
`;

export const Controls = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const HeroButton = styled.button<HeroButtonProps>`
  background: none;
  border: none;
  color: #2a80bb;
  padding-bottom: 10px;
  border-bottom: 3px solid transparent;
  cursor: pointer;

  &&:focus {
    outline: 0;
  }

  ${({ active }) =>
    active ? 'border-bottom-color: #2a80bb; font-weight: 800;' : null};
`;

export const BelowControls = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const Forgot = styled.button`
  background: none;
  border: none;
  padding-right: 20px;
  font-style: italic;
  color: gray;
  cursor: pointer;
`;

export const Holder = styled.div`
  .icon {
    height: 80% !important;
    color: rgba(34, 36, 38, 0.15);
  }
`;

export const Error = styled.div`
  background: ${rgba('#db2828', 0.9)} !important;
  color: white !important;
  border-radius: 6px;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const TermsWrapper = styled.div`
  display: flex;
  padding: 15px 0 5px 0;
  color: rgba(0, 0, 0, 0.6);

  label {
    color: rgba(0, 0, 0, 0.6) !important;
  }

  .TermsError {
    label {
      color: #9f3a38 !important;

      &:before {
        border-color: #9f3a38 !important;
        background-color: #e0b4b4 !important;
      }
    }
  }
`;

export const TermsButton = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  color: #2185d0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
