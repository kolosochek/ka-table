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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var DownIcon_1 = require("../../Icons/DownIcon");
var enums_1 = require("../../enums");
var UpIcon_1 = require("../../Icons/UpIcon");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var SortIcon = function (props) {
    var column = props.column, childComponents = props.childComponents;
    var _a = (0, ComponentUtils_1.getElementCustomization)({
        className: defaultOptions_1.default.css.iconSort,
    }, props, childComponents === null || childComponents === void 0 ? void 0 : childComponents.sortIcon), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("span", __assign({}, elementAttributes), content || (React.createElement(React.Fragment, null,
        column.sortDirection === enums_1.SortDirection.Ascend ? React.createElement(UpIcon_1.UpIcon, { className: defaultOptions_1.default.css.iconSortArrowUp }) : React.createElement(DownIcon_1.DownIcon, { className: defaultOptions_1.default.css.iconSortArrowDown }),
        React.createElement("span", null, column.sortIndex)))));
};
exports.default = SortIcon;
