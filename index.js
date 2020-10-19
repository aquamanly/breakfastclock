// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Baby Sloth Clock</h1>`;

const image = document.getElementById("head-img");
let defaultImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gv6AGGE9APKqPGJ9Wv_JHgHaD5%26pid%3DApi&f=1";
let breakfastImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.A3dSLNuc3Scgahv7zx-tiQHaE8%26pid%3DApi&f=1";
let lunchImage = "https://ychef.files.bbci.co.uk/624x351/p028ncr2.jpg";
let dinnerImage =
  "https://i.insider.com/57436986308309191e8b487c?width=1136&format=jpeg";

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let stateChanged = false;

  //create a switch for the time for lunch
  //create if then statement for if things are selected or on time

  let breakfastTime = document.getElementById("breakfast-meal").selectedIndex;
  let lunchTime = document.getElementById("lunch-meal").selectedIndex;
  let dinnerTime = document.getElementById("dinner-meal").selectedIndex;

  //value to display is to show string in regards to
  //whether or not the number of seconds is even or odd considering the
  //options selected
  let valueToDisplay;
  //another value to display for breakfast
  let breakfastMessage = "";
  let lunchMessage = "";
  let dinnerMessage = "";

  switch (breakfastTime) {
    case 0:
      if (hours == 0 && hours <= 4) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    case 1:
      if (hours >= 4 && hours <= 8) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    case 2:
      if (hours >= 8 && hours <= 12) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    case 3:
      if (hours >= 12 && hours <= 16) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      }
      break;
    case 4:
      if (hours >= 16 && hours <= 20) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    case 5:
      if (hours >= 20 || hours == 0) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    default:
      image.src = defaultImage;
      breakfastMessage = "";
      break;
  }

  switch (lunchTime) {
    case 0:
      if (hours == 0 && hours <= 4) {
        lunchMessage = "It's time for Lunch";
        image.src = lunchImage;
        stateChanged = true;
      }
      break;
    case 1:
      if (hours >= 4 && hours <= 8) {
        lunchMessage = "It's time for Lunch";
        image.src = lunchImage;
        stateChanged = true;
      }
      break;
    case 2:
      if (hours >= 8 && hours <= 12) {
        lunchMessage = "It's time for Lunch";
        image.src = lunchImage;
        stateChanged = true;
      }
      break;
    case 3:
      if (hours >= 12 && hours <= 16) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      }
      break;
    case 4:
      if (hours >= 16 && hours <= 20) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    case 5:
      if (hours >= 20 || hours == 0) {
        lunchMessage = "It's time for Lunch";
        image.src = lunchImage;
        stateChanged = true;
      }
      break;
    default:
      image.src = defaultImage;
      breakfastMessage = "";
      break;
  }

  switch (dinnerTime) {
    case 0:
      if (hours == 0 && hours <= 4) {
        dinnerMessage = "It's time for dinner";
        image.src = dinnerImage;
        stateChanged = true;
      }
      break;
    case 1:
      if (hours >= 4 && hours <= 8) {
        dinnerMessage = "It's time for dinner";
        image.src = dinnerImage;
        stateChanged = true;
      }
      break;
    case 2:
      if (hours >= 8 && hours <= 12) {
        dinnerMessage = "It's time for dinner";
        image.src = dinnerImage;
        stateChanged = true;
      }
      break;
    case 3:
      if (hours >= 12 && hours <= 16) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
      }
      break;
    case 4:
      if (hours >= 16 && hours <= 20) {
        breakfastMessage = "It's time for breakfast";
        image.src = breakfastImage;
        stateChanged = true;
      }
      break;
    case 5:
      if (hours >= 20 || hours == 0) {
        dinnerMessage = "It's time for dinner";
        image.src = dinnerImage;
        stateChanged = true;
      }
      break;
    default:
      image.src = defaultImage;
      breakfastMessage = "";
      break;
  }

  if (!stateChanged) {
    image.src = "";
    breakfastMessage = "";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let timeDiv = document.getElementById("time");

  timeDiv.innerHTML =
    "<h1>" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    breakfastMessage +
    lunchMessage +
    dinnerMessage;
  ("</h1>");

  setTimeout(updateClock, 1000);
}
updateClock();
