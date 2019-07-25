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
const utils_1 = require("../../utils");
const Reset = ({ token }) => {
    const { onSetStep, onResetPassword } = react_1.useContext(App_1.AppContext);
    const [errors, setErrors] = react_1.useState({
        main: false,
        retyped: {
            notEqueal: false,
            notPassword: false
        }
    });
    const [password, setPasswords] = react_1.useState({
        main: '',
        retyped: ''
    });
    const onSetPassword = debounce_1.default((e, data) => {
        const { value } = data;
        const validateMainPassword = validations_1.default.password(value);
        validateMainPassword.fold(() => setErrors(Object.assign({}, errors, { main: true })), () => {
            setErrors(Object.assign({}, errors, { main: false }));
            setPasswords(Object.assign({}, password, { main: value }));
        });
    }, 800);
    const onSetRetypedPassword = debounce_1.default((e, data) => {
        const { value } = data;
        const validateMainPassword = validations_1.default.password(value);
        validateMainPassword.fold(() => setErrors(Object.assign({}, errors, { retyped: { notEqual: false, notPassword: true } })), () => {
            const isSamePassword = utils_1.Either.either(password.main === value);
            isSamePassword.fold(() => setErrors(Object.assign({}, errors, { retyped: { notEqual: true, notPassword: false } })), () => {
                setErrors(Object.assign({}, errors, { main: false, retyped: { notEqual: false, notPassword: false } }));
                setPasswords(Object.assign({}, password, { retyped: value }));
            });
        });
    }, 800);
    const onReset = () => onResetPassword(token, password.main);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(styles_1.OnboardHeader, null, "Recover your password"),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { "data-testid": "loginPassword", placeholder: "Please enter your password", type: "password", onChange: onSetPassword, error: errors.main }),
            errors.main && react_1.default.createElement("div", { className: "errorText" }, "Password at least must have 8 characters 1 capital letter."),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "key" })),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { "data-testid": "loginRetypedPassword", placeholder: "Please retype your password", type: "password", onChange: onSetRetypedPassword, error: errors.retyped.notPassword || errors.retyped.notEqual }),
            errors.retyped.notPassword && (react_1.default.createElement("div", { className: "errorText" }, "Password at least must have 8 characters 1 capital letter.")),
            errors.retyped.notEqual && react_1.default.createElement("div", { className: "errorText" }, "Passwords do not match"),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "key" })),
        react_1.default.createElement(styles_1.OnboardButton, { onClick: onReset }, "Reset password"),
        react_1.default.createElement(styles_1.CallToSignIn, null,
            "You don't have an account?",
            react_1.default.createElement("button", { className: "callToSignIn", onClick: onSetStep('Start') }, "Get Started"))));
};
exports.default = Reset;
//# sourceMappingURL=Passwords.js.map