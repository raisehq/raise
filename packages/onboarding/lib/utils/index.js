"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HOSTS = {
    AUTH: process.env.REACT_APP_HOST_URL_AUTH,
    CORE: process.env.REACT_APP_HOST_URL_CORE,
    FILE: process.env.REACT_APP_HOST_URL_FILE,
    APP: process.env.REACT_APP_HOST_URL,
    THEGRAPH: process.env.REACT_APP_HOST_THEGRAPH
};
function getHost(name) {
    if (process.env.REACT_APP_MOCK_API === 'true') {
        return 'http://localhost:3000';
    }
    return HOSTS[name];
}
exports.getHost = getHost;
function getMimeType(base64) {
    const mime = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length) {
        return mime[1];
    }
    return '';
}
exports.getMimeType = getMimeType;
function isBrowser() {
    return typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]';
}
exports.isBrowser = isBrowser;
exports.Right = (x) => ({
    map: (f) => exports.Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
});
exports.Left = (x) => ({
    map: () => exports.Left(x),
    fold: (f) => f(x),
    inspect: () => `Left(${x})`
});
exports.Either = {
    either: (coor) => (coor ? exports.Right(true) : exports.Left(false))
};
exports.to = (promise) => {
    return promise
        .then((data) => {
        return exports.Right(data);
    })
        .catch((err) => {
        return exports.Left(err);
    });
};
//# sourceMappingURL=index.js.map