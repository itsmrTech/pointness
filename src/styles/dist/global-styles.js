"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GlobalStyle = void 0;
var styled_components_1 = require("styled-components");
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @font-face {\n        font-family: 'latin';\n        src: url(", ") format(\"truetype\");\n        font-weight: normal;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: 'latin';\n        src: url(", ") format(\"truetype\");\n        font-weight: normal;\n        font-style: italic;\n      }\n      @font-face {\n        font-family: 'latin';\n        src: url(", ") format(\"truetype\");\n        font-weight: lighter;\n        font-style: italic;\n      }\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: latin;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n"], ["\n    @font-face {\n        font-family: 'latin';\n        src: url(",
    ") format(\"truetype\");\n        font-weight: normal;\n        font-style: normal;\n    }\n    @font-face {\n        font-family: 'latin';\n        src: url(", ") format(\"truetype\");\n        font-weight: normal;\n        font-style: italic;\n      }\n      @font-face {\n        font-family: 'latin';\n        src: url(",
    ") format(\"truetype\");\n        font-weight: lighter;\n        font-style: italic;\n      }\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: latin;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n"])), function (props) {
    return props.theme.fonts.latin.regular;
}, function (props) { return props.theme.fonts.latin.italic; }, function (props) {
    return props.theme.fonts.latin.lightItalic;
});
var templateObject_1;
