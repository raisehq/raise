"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styles_1 = require("../styles");
const App_1 = require("../App");
const Verified = (props) => {
    const { onSetStep } = react_1.useContext(App_1.AppContext);
    return (react_1.default.createElement(styles_1.ConfirmWrapper, null,
        react_1.default.createElement(styles_1.MainImage, { src: "https://static.herodev.es/images/img_mailverify.png" }),
        react_1.default.createElement(styles_1.ConfirmHeader, null, "Account verified! "),
        react_1.default.createElement("p", null, "Login to Raise with your details to complete the sign up"),
        react_1.default.createElement(styles_1.OnboardButton, { onClick: onSetStep('SignIn') }, "Continue")));
};
exports.default = Verified;
//# sourceMappingURL=Verified.js.map