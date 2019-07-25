"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../styles");
const services_1 = require("../../services");
const VerifiedError = ({ token }) => {
    const onUpdateToken = () => services_1.updateToken({ token });
    return (react_1.default.createElement(styles_1.ConfirmWrapper, null,
        react_1.default.createElement(styles_1.MainImage, { src: "https://static.herodev.es/images/img_tokenerror.png" }),
        react_1.default.createElement(styles_1.ConfirmHeader, null, "This link has expired"),
        react_1.default.createElement("p", null, "Request a new link that will be sent to your inbox"),
        react_1.default.createElement(styles_1.OnboardButton, { onClick: onUpdateToken }, "Get a new link")));
};
exports.default = VerifiedError;
//# sourceMappingURL=VerifiedError.js.map