// ==UserScript==
// @name         2.0 Colors
// @version      1.0
// @description  Adding 2.0 block colors to Scratch 3.0. Made by infinitytec in 2018. Under the MIT license.
// @author       You
// @match        https://scratch.mit.edu/projects/*
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/2.0-Colors/raw/master/2Colors.user.js
// ==/UserScript==

(function() {
    'use strict';
    //Procedures
    GM_addStyle(" path.blocklyBlockBackground[stroke='#FF3355'], .blocklyBlockBackground[stroke='#FF3355']{fill:#6d30a4 !important; stroke: #8a55d7 !important; stroke-width: 1px;}");
    //Motion
    GM_addStyle("g[data-category=motion] > path.blocklyBlockBackground{fill:#4a6cd4;}.blocklyDropDownDiv[data-category=motion]{background:#4a6cd4 !important;}");
    //Looks
    GM_addStyle("g[data-category=looks] > path.blocklyBlockBackground{fill:#8a55d7;}.blocklyDropDownDiv[data-category=looks]{background:#8a55d7 !important;}");
    //Sound & Music
    GM_addStyle("g[data-category=sounds] > path.blocklyBlockBackground,g[data-category=Music] > path.blocklyBlockBackground{fill:#bb42c3; stroke:#99489e;}.blocklyDropDownDiv[data-category=sounds], .blocklyDropDownDiv[data-category=Music]{background:#bb42c3 !important; border-color: #99489e !important;} line[stroke='#0DA57A'] {stroke: white !important;} path[stroke='#0B8E69']{stroke: #99489e !important;}");
    //Events
    GM_addStyle("g[data-category=events] > path.blocklyBlockBackground, .blocklyPath[fill='#FFBF00']{fill:#c88330;}.blocklyDropDownDiv[data-category=events], .blocklyPath[fill='#FFBF00'].blocklyDropDownDiv[data-category=events],.blocklyDropDownDiv[data-category=null]{background:#c88330 !important;}");
    //Control
    GM_addStyle("g[data-category=control] > path.blocklyBlockBackground{fill:#e1a91a;}.blocklyDropDownDiv[data-category=control]{background:#e1a91a !important;}");
    //Sensing
    GM_addStyle("g[data-category=sensing] > path.blocklyBlockBackground, path.blocklyBlockBackground[stroke=#2E8EB8]{fill:#2ca5e2;}.blocklyDropDownDiv[data-category=sensing]{background:#2ca5e2 !important;}");
    //Operators
    GM_addStyle("g[data-category=operators] > path.blocklyBlockBackground{fill:#5cb712;}.blocklyDropDownDiv[data-category=operators]{background:#5cb712 !important;}");
    //Pen
    GM_addStyle("g[data-category=Pen] > path.blocklyBlockBackground{fill:#00a375; stroke: #009365}.blocklyDropDownDiv[data-category=Pen]{background:#00a375 !important;}");
    //Data
    GM_addStyle("g[data-category=data] > path.blocklyBlockBackground{fill:#ee7d16;}.blocklyDropDownDiv[data-category=data]{background:#ee7d16 !important;}");
    //Lists
    GM_addStyle("g[data-category=data-lists] > path.blocklyBlockBackground{fill:#d36518;}.blocklyDropDownDiv[data-category=data-lists]{background:#d36518 !important;}");
    //Text Inputs
    GM_addStyle("g[data-shapes='argument round']path.blocklyBlockBackground, path[fill='#ffffff']{fill: white; stroke-width: 1px;}");
    //Make dropdowns stand out
    GM_addStyle("g[data-argument-type='dropdown'] path.blocklyBlockBackground, g[data-argument-type='variable'] path.blocklyBlockBackground, rect.blocklyBlockBackground{fill: #55555555;}");
    //Make color previews continue to work
    GM_addStyle("g[data-argument-type='colour']path.blocklyBlockBackground{fill: initial;}");
    //Make category colors match the block colors
    GM_addStyle("");
    GM_addStyle("");
    GM_addStyle("");
    GM_addStyle("");
    GM_addStyle("");
    GM_addStyle(".blocklyWidgetDiv .fieldTextInput {border-color: #55555555;} g[data-shapes='argument round'] > .blocklyPath[stroke='#FF3355']{fill: white !important;}");
})();
