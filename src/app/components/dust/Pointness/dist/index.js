"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Pointness = void 0;
/**
 *
 * Pointness
 *
 */
var react_1 = require("react");
var macro_1 = require("styled-components/macro");
exports.Pointness = react_1.memo(function (props) {
    return (react_1["default"].createElement(Container, null,
        "Point",
        react_1["default"].createElement(Span, null, "ness")));
});
var Container = macro_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-style: italic;\n  font-weight: bold;\n"], ["\n  font-style: italic;\n  font-weight: bold;\n"])));
var Span = macro_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: lighter;\n"], ["\n  font-weight: lighter;\n"])));
var templateObject_1, templateObject_2;
