"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const isLength_1 = __importDefault(require("validator/lib/isLength"));
const utils_1 = require("../utils");
exports.default = {
    isEmail: value => utils_1.Either.either(isEmail_1.default(value)),
    password: value => utils_1.Either.either(isLength_1.default(value, { min: 8 }))
};
//# sourceMappingURL=validations.js.map