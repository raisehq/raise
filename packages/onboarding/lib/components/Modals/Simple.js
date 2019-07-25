"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const styles_1 = require("../styles");
const SimpleModal = ({ children }) => (react_1.default.createElement(semantic_ui_react_1.Modal, { style: styles_1.OnePanelModal, open: true, dimmer: "blurring" },
    react_1.default.createElement(styles_1.OnboardingWrapper, null,
        react_1.default.createElement("div", { className: "process" }, children))));
exports.default = SimpleModal;
//# sourceMappingURL=Simple.js.map