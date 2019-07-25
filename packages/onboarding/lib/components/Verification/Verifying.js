"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../styles");
const Verifying = () => (react_1.default.createElement(styles_1.ConfirmWrapper, null,
    react_1.default.createElement(styles_1.MainImage, { src: "https://static.herodev.es/images/img_mailverify.png" }),
    react_1.default.createElement(styles_1.ConfirmHeader, null, "WAIT A MOMENT")));
exports.default = Verifying;
//# sourceMappingURL=Verifying.js.map