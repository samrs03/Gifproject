const menuThemeTrigger = document.getElementById("down-arrow");
const menuTheme = document.getElementById("theme-option");
const sailorDay = document.getElementById("theme-day");
const sailorNight = document.getElementById("theme-night");
const sailorDayText = document.getElementById("day-text");
const sailorNightText = document.getElementById("night-text");
const body = document.getElementsByTagName("body");
function showingMenu() {
  if (menuTheme.style.display == "none") {
    menuTheme.style.display = "flex";
  } else {
    menuTheme.style.display = "none";
  }
}
function dayTheme() {
  sailorDay.style.background = "#FFF4FD";
  sailorNight.style.background = "#F0F0F0";
  sailorNightText.style.color = "#110038";
  body[0].style.background = "white";
}
function darkTheme() {
  sailorDay.style.background = "#F0F0F0";
  sailorNight.style.background = "#2E32FB";
  sailorNightText.style.color = "#FFFFFF";
  body[0].style.background = "black";
}
