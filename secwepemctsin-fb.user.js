// Secwepemc Facebook!
// version 0.1 BETA!
// 2010-08-25
// Copyright (c) 2010, Neskie Manuel
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Secwepemctsin Facebook", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Secwepemctsin Facebook
// @namespace     http://neskiemanuel.ath.cx/projects/greasemonkey/
// @description   script to change the Facebook
// @include       http://www.facebook.com/*
// ==/UserScript==

var es = new Array();
es["Home"] = "Tsitcw";
es["News Feed"] = "Lexeyem";
es["Friends"] = "Kweselkten";

var fbelem = document.getElementsByTagName('a');

for (var i = 0; i < fbelem.length; i++) {
    var thisElem = fbelem[i];
    if (thisElem.textContent in es) {
        thisElem.textContent = es[thisElem.textContent];
    }
}

var fbelem = document.getElementsByTagName('span');

for (var i = 0; i < fbelem.length; i++) {
    var thisElem = fbelem[i];
    if (thisElem.textContent in es) {
        thisElem.textContent = es[thisElem.textContent];
    }
}
