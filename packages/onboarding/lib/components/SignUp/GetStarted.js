"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const _ = __importStar(require("lodash"));
const styles_1 = require("../styles");
const App_1 = require("../App");
const validations_1 = __importDefault(require("../validations"));
const services_1 = require("../../services");
const GetStarted = () => {
    const { onSetStep, credentials, onSetCredentials, referralCode } = react_1.useContext(App_1.AppContext);
    const [error, setError] = react_1.useState({
        validation: false,
        exist: false
    });
    const onChangeEmail = _.debounce((e, data) => {
        const { value } = data;
        const validateEmail = validations_1.default.isEmail(value);
        validateEmail.fold(() => setError(Object.assign({}, error, { validation: true })), () => __awaiter(this, void 0, void 0, function* () {
            const alreadyExist = yield services_1.checkEmail(value);
            alreadyExist.fold(() => {
                setError({ validation: false, exist: true });
            }, () => {
                setError({ validation: false, exist: false });
                onSetCredentials('email', value);
            });
        }));
    }, 500);
    const header = !!referralCode
        ? 'True friends invited you to Raise'
        : 'Get started';
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(styles_1.OnboardHeader, null, header),
        react_1.default.createElement(styles_1.OnboardSubHeader, null, "Create an account"),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { placeholder: "Email address", onChange: onChangeEmail, error: error.validation || error.exist }),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "mail outline" }),
            error.validation && (react_1.default.createElement("div", { className: "errorText" }, "That format doesn't look right. Make sure there aren't any typos.")),
            error.exist && (react_1.default.createElement("div", { className: "errorText" }, "The email already exist."))),
        react_1.default.createElement(styles_1.OnboardButton, { disabled: credentials.email === '' || error.validation || error.exist, onClick: onSetStep('Register') }, "Next"),
        react_1.default.createElement(styles_1.OnboardDisclaimer, null,
            "By signing up, I agree to Hero",
            react_1.default.createElement("button", { className: "disclaimerBTN" }, "Terms of Service"),
            " and",
            react_1.default.createElement("button", { className: "disclaimerBTN" }, "Privacy Policy")),
        react_1.default.createElement(styles_1.CallToSignIn, null,
            "Already have an account? Press here to",
            react_1.default.createElement("button", { className: "callToSignIn", onClick: onSetStep('SignIn') }, "Sign In"))));
};
exports.default = GetStarted;
//# sourceMappingURL=GetStarted.js.map