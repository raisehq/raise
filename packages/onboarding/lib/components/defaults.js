"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultContext = {
    onSetStep: () => () => null,
    onSetCredentials: () => null,
    onSendCredentials: () => null,
    onResetPassword: () => null,
    onLogin: () => null,
    error: false,
    referralCode: null,
    onRecover: () => null,
    credentials: {
        email: '',
        password: '',
        username: '',
        country_id: ''
    }
};
//# sourceMappingURL=defaults.js.map