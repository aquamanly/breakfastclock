// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const decisisions = document.getElementById("app");
decisisions.innerHTML = "<p>The time is now</p>";

const image = document.getElementById("head-img");
let defaultImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gv6AGGE9APKqPGJ9Wv_JHgHaD5%26pid%3DApi&f=1";
let breakfastImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.A3dSLNuc3Scgahv7zx-tiQHaE8%26pid%3DApi&f=1";
let lunchImage = "";

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let breakfastManage = document.getElementById("breakfast-manager").childNodes;

  let breakfastTime = document.getElementById("breakfast-meal").selectedIndex;

  //value to display is to show string in regards to
  //whether or not the number of seconds is even or odd considering the
  //options selected
  let valueToDisplay;
  //another value to display for breakfast
  let breakfastMessage;

  switch (breakfastTime) {
    case 0:
      if (hours == 0 && hours <= 4) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      } else {
        image.src = defaultImage;
        breakfastMessage = "";
      }

      break;

    case 1:
      if (hours >= 4 && hours <= 8) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      } else {
        img.src = defaultImage;
        breakfastMessage = "";
      }
      break;
    case 2:
      if (hours >= 8 && hours <= 12) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      } else {
        image.src = defaultImage;
        breakfastMessage = "";
      }
      break;
    case 3:
      if (hours >= 12 && hours <= 16) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      } else {
        image.src = defaultImage;
        breakfastMessage = "";
      }
      break;
    case 4:
      if (hours >= 16 && hours <= 20) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      } else {
        image.src = defaultImage;
        breakfastMessage = "";
      }
      break;
    case 5:
      if (hours >= 20 || hours == 0) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      } else {
        image.src = defaultImage;
        breakfastMessage = "";
      }
      break;
    default:
      image.src = defaultImage;
      breakfastMessage = "";
      break;
  }

  let timeDiv = document.getElementById("time");

  timeDiv.innerHTML =
    "<h1>" + hours + ":" + minutes + ":" + seconds + breakfastMessage;
  ("</h1>");

  setTimeout(updateClock, 1000);
}
updateClock();
