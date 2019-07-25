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
const debounce_1 = __importDefault(require("lodash/debounce"));
const styles_1 = require("../styles");
const App_1 = require("../App");
const countries_1 = require("../../commons/countries");
const validations_1 = __importDefault(require("../validations"));
const services_1 = require("../../services");
const Register = () => {
    const { credentials, onSetStep, onSetCredentials, onSendCredentials, referralCode } = react_1.useContext(App_1.AppContext);
    const [errors, setErrors] = react_1.useState({
        password: false,
        country: false,
        username: false,
        accounttype_id: 1
    });
    const onSetCountry = (e, data) => onSetCredentials('country_id', data.value);
    const onChangeUsername = debounce_1.default((e, data) => __awaiter(this, void 0, void 0, function* () {
        const { value } = data;
        const usernameExist = yield services_1.checkUsername(value);
        usernameExist.fold(() => setErrors(Object.assign({}, errors, { username: true })), () => {
            setErrors(Object.assign({}, errors, { username: false }));
            onSetCredentials('username', value);
        });
    }), 800);
    const onSetPassword = debounce_1.default((e, data) => {
        const { value } = data;
        const validatePassword = validations_1.default.password(value);
        validatePassword.fold(() => setErrors(Object.assign({}, errors, { password: true })), () => {
            setErrors(Object.assign({}, errors, { password: false }));
            onSetCredentials('password', value);
        });
    }, 800);
    const header = !!referralCode
        ? 'True friends invited you to Raise'
        : 'Get started';
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(styles_1.OnboardHeader, null, header),
        react_1.default.createElement(styles_1.OnboardSubHeader, null, "Create an account"),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(styles_1.OnboardCountries, { control: semantic_ui_react_1.Select, options: countries_1.countryOptions, search: true, placeholder: "Country of residence", onChange: onSetCountry }),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "globe" })),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { placeholder: "Username", onChange: onChangeUsername, error: errors.username }),
            errors.username && (react_1.default.createElement("div", { className: "errorText" }, "Username already exist")),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "user" })),
        react_1.default.createElement(styles_1.OnboardInput, null,
            react_1.default.createElement(semantic_ui_react_1.Input, { placeholder: "Create a password", onChange: onSetPassword, error: errors.password, type: "password" }),
            errors.password && (react_1.default.createElement("div", { className: "errorText" }, "Password at least must have 8 characters 1 capital letter.")),
            react_1.default.createElement(semantic_ui_react_1.Icon, { size: "big", name: "key" })),
        react_1.default.createElement(styles_1.OnboardButton, { disabled: credentials.username === '' ||
                credentials.password === '' ||
                credentials.country_id === '', onClick: onSendCredentials }, "Get Started"),
        react_1.default.createElement(styles_1.CallToSignIn, null,
            "Already have an account? Press here to",
            react_1.default.createElement("button", { className: "callToSignIn", onClick: onSetStep('SignIn') }, "Sign In"))));
};
exports.default = Register;
//# sourceMappingURL=Register.js.map