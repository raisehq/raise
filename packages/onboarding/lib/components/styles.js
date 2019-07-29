"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const semantic_ui_react_1 = require("semantic-ui-react");
const theme_1 = __importDefault(require("../theme"));
const commonModal = {
    borderRadius: '4px',
    boxShadow: '0 10px 26px 0 rgba(6, 52, 40, 0.1)',
    margin: '0 !important',
    padding: '0 !important',
    overflow: 'hidden'
};
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px'
};
exports.device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`
};
exports.OnePanelModal = Object.assign({}, commonModal, { width: '425px' });
exports.TwoPanelModal = Object.assign({}, commonModal, { width: '950px' });
exports.OnboardingWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;

  .content {
    margin: 0 !important;
    padding: 0 !important;
  }

  .visuals {
    flex: 0 1 100%;
    background: ${theme_1.default.gradient.blue};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .process {
    flex: 0 1 100%;
    background: #fff;
    padding: 50px;
    box-sizing: border-box;
  }

  .error.field {
    .ui.search {
      background-color: #fff6f6;
      border-color: #e0b4b4;
      box-shadow: none;
      color: #9f3a38 !important;
    }
  }
`;
exports.OnboardHeader = styled_components_1.default.h1 `
  color: #3C4251;
`;
exports.OnboardSubHeader = styled_components_1.default.h3 `
  margin: 0 0 0 0 !important;
  padding: 0 !important;
  font-weight: 400;
  font-size: 14px;
`;
exports.OnboardInput = styled_components_1.default.div `
  position: relative;
  margin: 50px 0 50px 0;
  width: 100%;

  .ui.input {
    width: 100%;
  }

  input {
    height: 48px;
    width: 100%;
    border: 1px solid #dfe3e9;
    border-radius: 4px;
    box-sizing: border-box;
    color: ${theme_1.default.colors.darkgray}
    padding: 20px;
    padding-left: 54px;
    text-indent: 42px;
  }

  .icon {
    position: absolute;
    top: 14px;
    left: 14px;
    color: #cacbcd !important;
  }
  i.big.icon{
    font-size: 20px;
  }

  .errorText {
    color: ${theme_1.default.colors.error};
    position: absolute;
    top: 55px;
    left: 0;
  }

  .errorTextSelect {
    color: ${theme_1.default.colors.error};
    position: absolute;
    top: 60px;
    left: 0;
  }
`;
exports.OnboardButton = styled_components_1.default.button `
  width: 100%;
  height: auto;
  padding: 15px 0px;
  border-radius: 4px;
  border: none;
  background: ${theme_1.default.gradient.green};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }
`;
exports.CallToSignIn = styled_components_1.default.div `
  width: 100%;
  text-align: center;
  padding-top: 20px;

  .callToSignIn {
    background: none;
    border: none;
    color: ${theme_1.default.colors.green};
    cursor: pointer;
  }
`;
exports.OnboardDisclaimer = styled_components_1.default.div `
  margin-top: 60px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dfe3e9;

  .disclaimerBTN {
    border: none;
    background: none;
    padding: 0px 2px 0px 2px;
    margin: 0;
    color: ${theme_1.default.colors.green};
    cursor: pointer;
  }
`;
exports.OnboardCountries = styled_components_1.default(semantic_ui_react_1.Form.Field) `
  .icon {
    display: none !important;
  }

  .search {
    height: 53px !important;
    width: 100% !important;
    padding: 20px !important;
    border: 1px solid #dfe3e9;
    box-sizing: border-box !important;
    color: #5a5a5a !important;
    text-indent: 0 !important;
    padding-left: 47px !important;
  }
`;
exports.ConfirmWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin: 25px 0 45px 0;
  }
`;
exports.ConfirmHeader = styled_components_1.default.h1 `
  color: #188e9b;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;
exports.MainImage = styled_components_1.default.img `
  display: block;
  width: 100%;
  height: auto;
`;
exports.Separator = styled_components_1.default.div `
  width: 100%;
  height: 1px;
  background: #dfe3e9;
  margin-top: 20px;
`;
//# sourceMappingURL=styles.js.map