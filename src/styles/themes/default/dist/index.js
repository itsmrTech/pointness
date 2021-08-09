"use strict";
exports.__esModule = true;
var Quicksand_Regular_ttf_1 = require("../app/assets/fonts/Quicksand-Regular.ttf");
var Quicksand_LightItalic_ttf_1 = require("../app/assets/fonts/Quicksand-LightItalic.ttf");
var Quicksand_Italic_ttf_1 = require("../app/assets/fonts/Quicksand-Italic.ttf");
var theme = {
    colors: {
        content: '#707070',
        disabled_content: '#cbcbcb',
        disabled_gradient: ['#E3E3E3', '#CBCBCB'],
        neutral_dark: '#AAAAAA',
        neutral_light: '#fafafa',
        light: '#fff',
        dark: '#444'
    },
    fonts: {
        latin: {
            regular: Quicksand_Regular_ttf_1["default"],
            italic: Quicksand_Italic_ttf_1["default"],
            lightItalic: Quicksand_LightItalic_ttf_1["default"]
        }
    }
};
exports["default"] = theme;
