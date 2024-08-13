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
exports.TableControlled = exports.TablePropsContext = void 0;
var React = __importStar(require("react"));
var enums_1 = require("../../enums");
var GroupPanel_1 = require("../GroupPanel/GroupPanel");
var Loading_1 = __importDefault(require("../Loading/Loading"));
var HeaderFilterPopup_1 = __importDefault(require("../HeaderFilterPopup/HeaderFilterPopup"));
var TablePaging_1 = require("../TablePaging/TablePaging");
var TableWrapper_1 = require("../TableWrapper/TableWrapper");
var actionCreators_1 = require("../../actionCreators");
var ComponentUtils_1 = require("../../Utils/ComponentUtils");
var PagingUtils_1 = require("../../Utils/PagingUtils");
exports.TablePropsContext = React.createContext({});
var TableControlled = function (props) {
    var childComponents = props.childComponents, columns = props.columns, dispatch = props.dispatch, data = props.data, format = props.format, groupPanel = props.groupPanel, height = props.height, loading = props.loading, width = props.width, paging = props.paging, singleAction = props.singleAction;
    var isLoadingActive = loading && loading.enabled;
    var kaCss = isLoadingActive ? 'ka ka-loading-active' : 'ka';
    var _a = (0, ComponentUtils_1.getElementCustomization)({
        className: kaCss
    }, props, childComponents === null || childComponents === void 0 ? void 0 : childComponents.rootDiv), elementAttributes = _a.elementAttributes, rootDivContent = _a.content;
    elementAttributes.style = __assign({ width: width, height: height }, elementAttributes.style);
    React.useEffect(function () {
        dispatch({ type: enums_1.ActionType.ComponentDidMount });
    }, []);
    React.useEffect(function () {
        if (singleAction) {
            dispatch(singleAction);
            dispatch((0, actionCreators_1.clearSingleAction)());
        }
    });
    return (React.createElement(exports.TablePropsContext.Provider, { value: props },
        React.createElement("div", __assign({}, elementAttributes), rootDivContent || (React.createElement(React.Fragment, null,
            (groupPanel === null || groupPanel === void 0 ? void 0 : groupPanel.enabled) && React.createElement(GroupPanel_1.GroupPanel, __assign({}, props, { groupPanel: groupPanel })),
            (0, PagingUtils_1.isPagingShown)(enums_1.PagingPosition.Top, paging) && React.createElement(TablePaging_1.TablePaging, __assign({}, props)),
            React.createElement(TableWrapper_1.TableWrapper, __assign({}, props)),
            (0, PagingUtils_1.isPagingShown)(enums_1.PagingPosition.Bottom, paging) && React.createElement(TablePaging_1.TablePaging, __assign({}, props)),
            React.createElement(Loading_1.default, __assign({}, loading, { childComponents: childComponents })),
            columns.map(function (column) {
                return column.isHeaderFilterPopupShown
                    && (React.createElement(HeaderFilterPopup_1.default, { key: column.key, column: column, childComponents: childComponents, data: data, dispatch: dispatch, format: format }));
            }))))));
};
exports.TableControlled = TableControlled;
