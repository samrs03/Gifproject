window.onload = function () {
    let myVariable = localStorage.getItem('trueorfalse');
    if( myVariable == 'true') {
        darkTheme();
    } else {
        dayTheme();
    }
};

const menuThemeTrigger = document.getElementById("down-arrow");
const menuTheme = document.getElementById("theme-option");
const sailorDay = document.getElementById("theme-day");
const sailorNight = document.getElementById("theme-night");
const createGifosButton = document.getElementById("create-gifos-box");
const chooseThemeButton = document.getElementById("choose-theme-box");
const myGifText = document.getElementById("mygif-text");
const gifosLogo = document.getElementById("logo");
const suggestGifContainer = document.getElementById('suggest-container');
const trendGifContainer = document.getElementById("trends-gifs");
const input_box = document.getElementById("input-search");
const first_search = document.getElementById("first-search-p-tag");
const second_search = document.getElementById("second-search-p-tag");
const third_search = document.getElementById("third-search-p-tag");
const searchSuggestContainer = document.getElementById("search-suggest-text");
const first_search_div = document.getElementById("first-search-div");
const second_search_div = document.getElementById("second-search-div");
const third_search_div = document.getElementById("third-search-div");
const searchButton = document.getElementById("search-button");
const suggestSection = document.getElementById('suggest-section');
const trendBox = document.getElementById('trend-box');
const stylesTag = document.getElementById('styles-tag');

let darkIndicator = false ;