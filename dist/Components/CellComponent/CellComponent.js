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
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var CellEditor_1 = __importDefault(require("../CellEditor/CellEditor"));
var CellText_1 = __importDefault(require("../CellText/CellText"));
var CellComponent = function (props) {
    var treeDeep = props.treeDeep, treeArrowElement = props.treeArrowElement, childComponents = props.childComponents, style = props.column.style, isEditableCell = props.isEditableCell;
    var _a = (0, ComponentUtils_1.getElementCustomization)({
        className: "".concat(defaultOptions_1.default.css.cell, " ").concat(treeDeep != null ? defaultOptions_1.default.css.treeCell : ''),
        style: style
    }, props, childComponents.cell), elementAttributes = _a.elementAttributes, content = _a.content;
    return (React.createElement("td", __assign({}, elementAttributes),
        treeDeep ? Array(treeDeep).fill(undefined).map(function (_, index) { return React.createElement("div", { key: index, className: defaultOptions_1.default.css.treeCellEmptySpace }); }) : null,
        content ||
            (React.createElement(React.Fragment, null,
                treeArrowElement,
                isEditableCell ?
                    (React.createElement(CellEditor_1.default, __assign({}, props)))
                    :
                        (React.createElement(CellText_1.default, __assign({}, props)))))));
};
exports.default = CellComponent;
