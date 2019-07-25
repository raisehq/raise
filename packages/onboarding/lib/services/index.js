"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../utils/index");
const COMMON_HEADERS = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};
const URL = {
    REGISTER: `${index_1.getHost('CORE')}/users/register`,
    RECOVERY: `${index_1.getHost('AUTH')}/users/password/reset`,
    CHANGE_PASSWORD: `${index_1.getHost('AUTH')}/users/password/change`,
    AUTHENTICATE: `${index_1.getHost('AUTH')}/jwt/authenticate`,
    EMAIL: `${index_1.getHost('CORE')}/users/email/token/validate/:id`,
    CREATE_EMAIL: `${index_1.getHost('CORE')}/users/email/token/send/:id`,
    USER: `${index_1.getHost('CORE')}/users`,
    REFRESH: `${index_1.getHost('AUTH')}/jwt/refresh`,
    CHECK_USERNAME: `${index_1.getHost('AUTH')}/users/username/exists?username=`,
    CHECK_EMAIL: `${index_1.getHost('AUTH')}/users/email/exists`
};
exports.signUp = (data) => __awaiter(this, void 0, void 0, function* () {
    const config = Object.assign({ url: URL.REGISTER, method: 'POST' }, COMMON_HEADERS, { data });
    return yield index_1.to(axios_1.default(config));
});
exports.signIn = (data) => __awaiter(this, void 0, void 0, function* () {
    const config = Object.assign({ url: URL.AUTHENTICATE, method: 'POST' }, COMMON_HEADERS, { data });
    return yield index_1.to(axios_1.default(config));
});
exports.recovery = (email) => __awaiter(this, void 0, void 0, function* () {
    const config = Object.assign({ url: `${URL.RECOVERY}/${email}`, method: 'GET' }, COMMON_HEADERS);
    return yield index_1.to(axios_1.default(config));
});
exports.changePassword = (token, password) => __awaiter(this, void 0, void 0, function* () {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return yield index_1.to(axios_1.default.put(`${URL.CHANGE_PASSWORD}`, { token, password: password }, config));
});
exports.validateToken = (token) => __awaiter(this, void 0, void 0, function* () {
    const config = Object.assign({ url: URL.EMAIL.replace(':id', token), method: 'GET' }, COMMON_HEADERS);
    return yield index_1.to(axios_1.default(config));
});
exports.updateToken = (token) => __awaiter(this, void 0, void 0, function* () {
    const config = Object.assign({ url: URL.CREATE_EMAIL.replace(':id', token), method: 'GET' }, COMMON_HEADERS);
    return yield index_1.to(axios_1.default(config));
});
exports.checkUsername = (username) => __awaiter(this, void 0, void 0, function* () {
    const config = {
        url: `${URL.CHECK_USERNAME}${username}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const request = yield index_1.to(axios_1.default(config));
    return request.fold(() => index_1.Left(null), request => index_1.Either.either(request.data.exist === 0));
});
exports.checkEmail = (email) => __awaiter(this, void 0, void 0, function* () {
    const config = {
        url: `${URL.CHECK_EMAIL}/${email}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const request = yield index_1.to(axios_1.default(config));
    return request.fold(() => index_1.Right('Not Exist'), () => index_1.Left('Exist'));
});
//# sourceMappingURL=index.js.map