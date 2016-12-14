// ==UserScript==
// @name         Webkit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campus.concordia.ca/*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
function myFunc() {
    if(document.getElementsByClassName("PSHYPERLINK PTCOLLAPSE_ARROW")[0].getAttribute("title")=="Collapse section Class Grades - Fall 2016")
    {
        document.getElementById("DERIVED_SSS_HST_DESCRSHORT$0").innerHTML="A";
        document.getElementById("STDNT_ENRL_SSV1_GRADE_POINTS$0").innerHTML="9.000";
        
        document.getElementById("DERIVED_SSS_HST_DESCRSHORT$1").innerHTML="B+";
        document.getElementById("STDNT_ENRL_SSV1_GRADE_POINTS$1").innerHTML="12.000";
        
        document.getElementById("DERIVED_SSS_HST_DESCRSHORT$2").innerHTML="B-";
        document.getElementById("STDNT_ENRL_SSV1_GRADE_POINTS$2").innerHTML="8.100";
        
        document.getElementById("DERIVED_SSS_HST_DESCRSHORT$3").innerHTML="A-";
        document.getElementById("STDNT_ENRL_SSV1_GRADE_POINTS$3").innerHTML="12.950";
       
    }
    else if(document.getElementsByClassName("PSHYPERLINK PTCOLLAPSE_ARROW")[0].getAttribute("title")=="Collapse section Class Grades - Winter 2016")
    {
        document.getElementById("DERIVED_SSS_HST_DESCRSHORT$1").innerHTML="B-";
        document.getElementById("STDNT_ENRL_SSV1_GRADE_POINTS$1").innerHTML="9.000";
    }
}
    
    setInterval(myFunc, 10);
})();
