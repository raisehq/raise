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
const _ = __importStar(require("lodash"));
const styles_1 = require("../styles");
const validations_1 = __importDefault(require("../validations"));
const App_1 = require("../App");
const Signin = () => {
    const { onSetStep, onSetCredentials, onLogin, error } = react_1.useContext(App_1.AppContext);
    const [errors, setErrors] = react_1.useState({
        login: false,
        email: false
    });
    const onSetEmail = _.debounce((e, data) => {
        const { value } = data;
        const validateEmail = validations_1.default.isEmail(value);
        validateEmail.fold(() => setErrors(Object.assign({}, errors, { email: true })), () => {
            setErrors(Object.assign({}, errors, { email: false }));
            onSetCredentials('email', value);
        });
    }, 800);
    const onSetPassword = e => onSetCredentials('password', e.target.value);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(styles_1.OnboardHeader, null, "Welcome to Raise"),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { "data-testid": "loginEmail", placeholder: "Please enter you email address", onChange: onSetEmail, error: errors.email || error }),
            errors.email && (react_1.default.createElement("div", { className: "errorText" }, "This format doesn't look right. Make sure there aren't any typos.")),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "globe" })),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { "data-testid": "loginPassword", placeholder: "Please enter your password", type: "password", onChange: onSetPassword, error: error }),
            error && (react_1.default.createElement("div", { className: "errorText" }, "Sorry, I can't find anyone with these details.")),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "user" })),
        react_1.default.createElement(styles_1.OnboardButton, { onClick: onLogin }, "Log In"),
        react_1.default.createElement(styles_1.CallToSignIn, null,
            react_1.default.createElement("button", { className: "callToSignIn", onClick: onSetStep('Reset') }, "Forgot password?")),
        react_1.default.createElement(styles_1.Separator, null),
        react_1.default.createElement(styles_1.CallToSignIn, null,
            "You don't have an account?",
            react_1.default.createElement("button", { className: "callToSignIn", onClick: onSetStep('Start') }, "Get Started"))));
};
exports.default = Signin;
//# sourceMappingURL=SignIn.js.map