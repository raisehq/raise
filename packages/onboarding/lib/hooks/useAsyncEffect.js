"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useEffectAsync(effect, inputs) {
    react_1.useEffect(() => {
        effect();
    }, inputs);
}
exports.default = useEffectAsync;
//# sourceMappingURL=useAsyncEffect.js.map