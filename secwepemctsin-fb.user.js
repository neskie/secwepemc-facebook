// Secwepemc Facebook! example user script
// version 0.1 BETA!
// 2005-04-25
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
// select "Secwepemctsin Google", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Secwepemctsin Facebook
// @namespace     http://neskiemanuel.ath.cx/projects/greasemonkey/
// @description   script to change the Facebook
// @include       http://www.facebook.com/*
// ==/UserScript==

var gbarlinks = document.getElementsByTagName('a');


for (var i=0; i < gbarlinks.length; i++){
  var thisElem = gbarlinks[i];
 if (thisElem.textContent =="Home"){
	  thisElem.textContent = 'Tsitcw';
 }
}
var gbarlinks = document.getElementsByTagName('span');


for (var i=0; i < gbarlinks.length; i++){
  var thisElem = gbarlinks[i];
 if (thisElem.textContent =="News Feed"){
	  thisElem.textContent = 'Lexeyem';
 }
 if (thisElem.textContent =="Friends"){
	  thisElem.textContent = 'Kweséltken';
 }
}
