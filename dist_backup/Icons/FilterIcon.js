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
exports.FilterIcon = void 0;
var react_1 = __importDefault(require("react"));
var FilterIcon = function (props) {
    return (react_1.default.createElement("svg", __assign({ style: { transform: 'rotate(180deg) scale(-1, 1)' } }, props, { xmlns: 'http://www.w3.org/2000/svg', version: '1.1', id: 'Capa_1', x: '0px', y: '0px', viewBox: '0 -150 1024 1024', width: '16', height: '17' }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: 'M369.038 393.615l-288.173 405.989c-10.622 12.862-12.926 30.783-5.825 45.949 6.977 15.617 22.527 25.535 39.486 25.214h782.57c16.958 0.321 32.509-9.536 39.486-25.214 7.425-14.91 5.759-32.767-4.415-45.949l-283.821-405.989c-8.126-13.374-12.222-28.798-11.711-44.415v-457.826c-0.511-15.358-8.769-29.373-21.95-37.053-7.744-5.374-17.022-7.936-26.365-7.422-6.015-0.511-12.032 0.575-17.535 2.944l-157.943 62.267c-16.32 6.015-26.621 22.525-24.831 39.997v397.030c-1.537 16.51-8.192 32.061-19.006 44.415zM417.291 429.139c17.343-23.166 27.52-51.004 29.246-79.994v-385.191l131.639-51.837v437.027c-1.281 28.094 6.974 55.867 23.421 78.524l267.695 383.656h-726.939l274.991-382.247z' }))));
};
exports.FilterIcon = FilterIcon;
