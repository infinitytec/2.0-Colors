// ==UserScript==
// @name         2.0 Colors
// @version      0.1
// @description  Adding 2.0 block colors to Scratch 3.0. Made by infinitytec in 2018. Under the MIT license.
// @author       You
// @match        https://scratch.mit.edu/projects/*
// @grant        GM_addStyle
// @updateURL    
// ==/UserScript==

(function() {
    'use strict';
    //Procedures
    GM_addStyle("g[data-shapes=stack] path.blocklyBlockBackground{fill:green;}.blocklyDropDownDiv[data-category=motion]{background:#4a6cd4 !important;}");
    //Motion
    GM_addStyle("g[data-category=motion] path.blocklyBlockBackground{fill:#4a6cd4;}.blocklyDropDownDiv[data-category=motion]{background:#4a6cd4 !important;}");
    //Looks
    GM_addStyle("g[data-category=looks] path.blocklyBlockBackground{fill:#8a55d7;}.blocklyDropDownDiv[data-category=looks]{background:#8a55d7 !important;}");
    //Sound
    GM_addStyle("g[data-category=sounds] path.blocklyBlockBackground{fill:#bb42c3;}.blocklyDropDownDiv[data-category=sounds]{background:#bb42c3 !important;}");
    //Events
    GM_addStyle("g[data-category=events] path.blocklyBlockBackground{fill:#c88330;}.blocklyDropDownDiv[data-category=events]{background:#c88330 !important;}");
    //Control
    GM_addStyle("g[data-category=control] path.blocklyBlockBackground{fill:#e1a91a;}.blocklyDropDownDiv[data-category=control]{background:#e1a91a !important;}");
    //Sensing
    GM_addStyle("g[data-category=sensing] path.blocklyBlockBackground{fill:#2ca5e2;}.blocklyDropDownDiv[data-category=sensing]{background:#2ca5e2 !important;}");
    //Operators
    GM_addStyle("g[data-category=operators] path.blocklyBlockBackground{fill:#5cb712;}.blocklyDropDownDiv[data-category=operators]{background:#5cb712 !important;}");
    //Data
    GM_addStyle("g[data-category=data] path.blocklyBlockBackground{fill:#ee7d16;}.blocklyDropDownDiv[data-category=data]{background:#ee7d16 !important;}");
    //Lists
    GM_addStyle("g[data-category=data-lists] path.blocklyBlockBackground{fill:#d36518;}.blocklyDropDownDiv[data-category=data-lists]{background:#d36518 !important;}");
    //Text Inputs
    GM_addStyle("g[data-shapes='argument round'] path.blocklyBlockBackground{fill: white;}");
    //Make dropdowns stand out
    GM_addStyle("g[data-argument-type='dropdown'] path.blocklyBlockBackground{fill: #55555555;}");
})();
