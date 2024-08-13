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
exports.GroupPanelCell = void 0;
var React = __importStar(require("react"));
var CrossIcon_1 = require("../../Icons/CrossIcon");
var HeadCellContent_1 = __importDefault(require("../HeadCellContent/HeadCellContent"));
var enums_1 = require("../../enums");
var defaultOptions_1 = __importDefault(require("../../defaultOptions"));
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var HeadRowUtils_1 = require("../../Utils/HeadRowUtils");
var actionCreators_1 = require("../../actionCreators");
var GroupPanelCell = function (props) {
    var column = props.column, dispatch = props.dispatch, _a = props.sortingMode, sortingMode = _a === void 0 ? enums_1.SortingMode.None : _a, _b = props.childComponents, childComponents = _b === void 0 ? {} : _b;
    var _c = (0, ComponentUtils_1.getElementCustomization)({
        className: "".concat(defaultOptions_1.default.css.groupPanelCell, " ").concat((0, HeadRowUtils_1.getHeadCellClassName)(sortingMode)),
    }, props, childComponents.groupPanelCell), elementAttributes = _c.elementAttributes, content = _c.content;
    return (React.createElement("div", __assign({}, elementAttributes), content || (React.createElement(React.Fragment, null,
        React.createElement(HeadCellContent_1.default, { column: column, sortingMode: sortingMode, dispatch: dispatch, childComponents: childComponents, areAllRowsSelected: false }),
        React.createElement("span", { className: defaultOptions_1.default.css.groupPanelCellRemove },
            React.createElement(CrossIcon_1.CrossIcon, { onClick: function () {
                    dispatch((0, actionCreators_1.ungroupColumn)(column.key));
                } }))))));
};
exports.GroupPanelCell = GroupPanelCell;
