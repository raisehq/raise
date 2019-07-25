"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocalData = {
    set: (name, data) => {
        window.localStorage.setItem(name, data);
    },
    setObj: (name, data) => {
        window.localStorage.setItem(name, JSON.stringify(data));
    },
    get: (name) => {
        return window.localStorage.getItem(name) || null;
    },
    getObj: (name) => {
        const data = window.localStorage.getItem(name);
        const jsonData = JSON.parse(data || '{}');
        return Object.keys(jsonData).length > 0 ? jsonData : null;
    },
    remove: (name) => {
        window.localStorage.removeItem(name);
    }
};
exports.default = LocalData;
//# sourceMappingURL=localData.js.map