"use strict";
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
const debounce_1 = __importDefault(require("lodash/debounce"));
const styles_1 = require("../styles");
const validations_1 = __importDefault(require("../validations"));
const App_1 = require("../App");
const Reset = () => {
    const { onSetStep, onRecover } = react_1.useContext(App_1.AppContext);
    const [email, setEmail] = react_1.useState({ value: '', error: false });
    const onChangeEmail = debounce_1.default((e, data) => {
        const { value } = data;
        const validateEmail = validations_1.default.isEmail(value);
        validateEmail.fold(() => setEmail({ value: '', error: true }), () => setEmail({ value, error: false }));
    }, 500);
    const onSendRecover = () => onRecover(email.value);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(styles_1.OnboardHeader, null, "Forgot your password?"),
        react_1.default.createElement("p", null, "We will help you reset it and get back on track"),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { "data-testid": "recoverEmail", placeholder: "Please enter your email", type: "text", onChange: onChangeEmail, error: email.error }),
            email.error && (react_1.default.createElement("div", { className: "errorText" }, "That format doesn't look right. Make sure there aren't any typos.")),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "globe" })),
        react_1.default.createElement(styles_1.OnboardButton, { onClick: onSendRecover, disabled: email.value === '' || email.error }, "Reset password"),
        react_1.default.createElement(styles_1.CallToSignIn, null,
            "You don't have an account?",
            react_1.default.createElement("button", { className: "callToSignIn", onClick: onSetStep('Start') }, "Get Started"))));
};
exports.default = Reset;
//# sourceMappingURL=Email.js.map