"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownIcon = void 0;
var react_1 = __importDefault(require("react"));
var DownIcon = function (props) {
    return (react_1.default.createElement("svg", __assign({}, props, { xmlns: 'http://www.w3.org/2000/svg', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', viewBox: '0 -150 1024 1024', width: '10', height: '10' }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: 'M236.544 461.568c-21.504-20.48-54.272-20.48-74.752 0-20.48 21.504-20.48 54.272 0 74.752l312.32 312.32c9.216 9.216 22.528 15.36 37.888 15.36 14.336 0 27.648-6.144 37.888-15.36l312.32-312.32c20.48-20.48 20.48-53.248 0-74.752-21.504-20.48-54.272-20.48-74.752 0l-223.232 224.256v-793.6c0-29.696-23.552-52.224-52.224-52.224-29.696 0-52.224 22.528-52.224 52.224v792.576l-223.232-223.232z' }))));
};
exports.DownIcon = DownIcon;
