"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Splash = void 0;
/**
 *
 * Splash
 *
 */
var react_1 = require("react");
var macro_1 = require("styled-components/macro");
var react_i18next_1 = require("react-i18next");
var logo_large_png_1 = require("../../assets/images/logo-large.png");
var Pointness_1 = require("../dust/Pointness");
exports.Splash = react_1.memo(function (props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _a = react_i18next_1.useTranslation(), t = _a.t, i18n = _a.i18n;
    return (react_1["default"].createElement(Div, null,
        react_1["default"].createElement(Logo, { src: logo_large_png_1["default"] }),
        react_1["default"].createElement(Pointness_1.Pointness, null),
        t('Hello')));
});
var Div = macro_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 20%;\n"], ["\n  position: fixed;\n  top: 20%;\n"])));
var Logo = macro_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-width: 20%;\n  height: auto;\n"], ["\n  max-width: 20%;\n  height: auto;\n"])));
var templateObject_1, templateObject_2;
