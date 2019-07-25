"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("../styles");
const Confirm = () => (react_1.default.createElement(styles_1.ConfirmWrapper, null,
    react_1.default.createElement("div", null,
        react_1.default.createElement(styles_1.MainImage, { src: "https://static.herodev.es/images/img_mail.png" })),
    react_1.default.createElement(styles_1.ConfirmHeader, null, "Check your inbox!"),
    react_1.default.createElement("p", null, "We've sent a confirmation to your inbox to verify your email and instructions for the next steps.")));
exports.default = Confirm;
//# sourceMappingURL=Confirm.js.map