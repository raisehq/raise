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
const React = __importStar(require("react"));
const isUUID_1 = __importDefault(require("validator/lib/isUUID"));
const daggy_1 = __importDefault(require("daggy"));
const GetStarted_1 = __importDefault(require("./SignUp/GetStarted"));
const Register_1 = __importDefault(require("./SignUp/Register"));
const Confirm_1 = __importDefault(require("./SignUp/Confirm"));
const SignIn_1 = __importDefault(require("./SignIn/SignIn"));
const Verified_1 = __importDefault(require("./Verification/Verified"));
const Verifying_1 = __importDefault(require("./Verification/Verifying"));
const VerifiedError_1 = __importDefault(require("./Verification/VerifiedError"));
const Email_1 = __importDefault(require("./ResetPassword/Email"));
const Passwords_1 = __importDefault(require("./ResetPassword/Passwords"));
const Confirm_2 = __importDefault(require("./ResetPassword/Confirm"));
const Success_1 = __importDefault(require("./ResetPassword/Success"));
const Error_1 = __importDefault(require("./ResetPassword/Error"));
const Panel_1 = __importDefault(require("./Modals/Panel"));
const Simple_1 = __importDefault(require("./Modals/Simple"));
const defaults_1 = require("./defaults");
const useAsyncEffect_1 = __importDefault(require("../hooks/useAsyncEffect"));
const services_1 = require("../services");
const utils_1 = require("../utils");
const localData_1 = __importDefault(require("./localData"));
const services = __importStar(require("../services"));
const { useState, useEffect, createContext } = React;
exports.AppContext = createContext(defaults_1.defaultContext);
const Step = daggy_1.default.taggedSum('UI', {
    Start: [],
    Register: [],
    SignIn: [],
    Confirm: [],
    Verifying: [],
    Verified: [],
    VerifiedError: [{}],
    Reset: [],
    ResetConfirm: [],
    ResetOK: [],
    ResetError: [],
    ResetPasswordInput: [{}]
});
const App = ({ history, open }) => {
    const [step, setStep] = useState(Step.Start);
    const [loginError, setLoginError] = useState(false);
    const [credentials, setCredentials] = useState(defaults_1.defaultContext.credentials);
    const [referralCode, setRefCode] = useState('');
    useAsyncEffect_1.default(() => __awaiter(this, void 0, void 0, function* () {
        const { pathname } = history.location;
        if (pathname.includes('verify/token')) {
            const path = pathname.split('/');
            const token = path[path.length - 1];
            setStep(Step.Verifying);
            const verifying = yield utils_1.to(services_1.validateToken({
                token
            }));
            verifying.fold(() => setStep(Step.VerifiedError(token)), () => setStep(Step.Verified));
        }
        if (pathname.includes('password/reset')) {
            const path = pathname.split('/');
            const token = path[path.length - 1];
            setStep(Step.ResetPasswordInput(token));
        }
    }), [history]);
    const onSetStep = (step) => () => setStep(Step[step]);
    const onSetCredentials = (input, value) => setCredentials(Object.assign({}, credentials, { [input]: value }));
    const onSendCredentials = () => __awaiter(this, void 0, void 0, function* () {
        const signup = yield services.signUp(Object.assign({}, credentials, (!!referralCode ? { referrer_code: referralCode } : {})));
        signup.fold(() => console.log('something went wrong'), () => setStep(Step.Confirm));
    });
    const onResetPassword = (token, password) => __awaiter(this, void 0, void 0, function* () {
        const resetPassword = yield services.changePassword(token, password);
        resetPassword.fold(() => setStep(Step.ResetError), () => setStep(Step.ResetOK));
    });
    const onRecover = (email) => __awaiter(this, void 0, void 0, function* () {
        const request = yield services.recovery(email);
        request.fold(() => console.log('Something went wrong'), () => setStep(Step.ResetConfirm));
    });
    const onLogin = () => __awaiter(this, void 0, void 0, function* () {
        const request = yield services.signIn({
            email: credentials.email,
            password: credentials.password
        });
        request.fold(() => setLoginError(true), response => {
            const { data: { data: { JwtToken, user, user: { id, status, accounttype_id } } } } = response;
            localData_1.default.setObj('auth', {
                id,
                status,
                token: JwtToken,
                type: accounttype_id
            });
            localData_1.default.setObj('user', user);
            window.location.href = utils_1.getHost('APP');
        });
    });
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const refCode = query.get('referralCode');
        if (!!refCode && isUUID_1.default(refCode, 4)) {
            setRefCode(refCode);
        }
    }, []);
    const getStep = () => step.cata({
        Start: () => (React.createElement(Panel_1.default, null,
            React.createElement(GetStarted_1.default, null))),
        Register: () => (React.createElement(Panel_1.default, null,
            React.createElement(Register_1.default, null))),
        SignIn: () => (React.createElement(Simple_1.default, null,
            React.createElement(SignIn_1.default, null))),
        Confirm: () => (React.createElement(Simple_1.default, null,
            React.createElement(Confirm_1.default, null))),
        Verified: () => (React.createElement(Simple_1.default, null,
            React.createElement(Verified_1.default, null))),
        Verifying: () => (React.createElement(Simple_1.default, null,
            React.createElement(Verifying_1.default, null))),
        VerifiedError: token => (React.createElement(Simple_1.default, null,
            React.createElement(VerifiedError_1.default, { token: token }))),
        Reset: () => (React.createElement(Simple_1.default, null,
            React.createElement(Email_1.default, null))),
        ResetOK: () => (React.createElement(Simple_1.default, null,
            React.createElement(Success_1.default, null))),
        ResetError: () => (React.createElement(Simple_1.default, null,
            React.createElement(Error_1.default, null))),
        ResetConfirm: () => (React.createElement(Simple_1.default, null,
            React.createElement(Confirm_2.default, null))),
        ResetPasswordInput: token => (React.createElement(Simple_1.default, null,
            React.createElement(Passwords_1.default, { token: token })))
    });
    return (React.createElement(exports.AppContext.Provider, { value: {
            onSetStep,
            onSetCredentials,
            onSendCredentials,
            onResetPassword,
            onRecover,
            onLogin,
            credentials,
            referralCode,
            error: loginError
        } }, open && getStep()));
};
exports.default = App;
//# sourceMappingURL=App.js.map