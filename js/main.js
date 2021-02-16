// Declaring Variables
const menuThemeTrigger = document.getElementById("down-arrow");
const sailorDay = document.getElementById("theme-day");
const sailorNight = document.getElementById("theme-night");
const menuTheme = document.getElementById("theme-option");
const createGifosButton = document.getElementById("create-gifos-box");
const chooseThemeButton = document.getElementById("choose-theme-box");
const myGifText = document.getElementById("mygif-text");
const gifosLogo = document.getElementById("logo");
const suggestGifContainer = document.getElementById("suggest-container");
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
const suggestSection = document.getElementById("suggest-section");
const trendBox = document.getElementById("trend-box");
const divHistoryContainer = document.getElementById('history-div-container')
const trendGifs =
  "https://api.giphy.com/v1/gifs/trending?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=12&rating=G";
const stylesTag = document.getElementById("styles-tag");
let darkIndicator = false;

window.onload = function () {
  let myVariable = localStorage.getItem("trueorfalse");
  if (myVariable == "true") {
    darkTheme();
  } else {
    dayTheme();
  }
};

// declaring Functions

const gettingInformation = async (url) => {
  const informationRetrieved = await fetch(url);
  return informationRetrieved.json();
};
const showingMenu = () => {
  if (menuTheme.style.display == "none") {
    menuTheme.style.display = "flex";
  } else {
    menuTheme.style.display = "none";
  }
};
const dayTheme = () => {
  stylesTag.setAttribute("href", "./styles/light/styles.css");
  searchButton.children[0].setAttribute("src", "./asset/lupa_inactive.svg");
  gifosLogo.setAttribute("src", "./asset/gifOF_logo.png");
  darkIndicator = false;
  localStorage.setItem("trueorfalse", darkIndicator);
};
const darkTheme = () => {
  stylesTag.setAttribute("href", "./styles/dark/styles.css");
  searchButton.children[0].setAttribute("src", "./asset/combined_shape.svg");
  gifosLogo.setAttribute("src", "./asset/gifOF_logo_dark.png");
  darkIndicator = true;
  localStorage.setItem("trueorfalse", darkIndicator);
};
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};
const SuggestOptions = [
  "charlie+brown",
  "phoebe+buffay",
  "rachel+green",
  "monica+geller",
  "ross+geller",
  "joey+tribbiani",
  "chandler+bing",
  "the+killers",
  "RHCP",
  "blink+182",
  "rammstein",
];
const suggestion = getRandomIndex(SuggestOptions);
SuggestGifs = `https://api.giphy.com/v1/gifs/search?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&q='${SuggestOptions[suggestion]}'&limit=4&offset=0&rating=G&lang=en`;
gettingInformation(SuggestGifs)
  .then((result) => {
    for (let i = 0; i < suggestGifContainer.children.length; i++) {
      if (result.data[i].title == "") {
        suggestGifContainer.children[i].children[0].innerText =
          result.data[i].slug;
      } else {
        suggestGifContainer.children[i].children[0].innerText =
          result.data[i].title;
      }
      suggestGifContainer.children[i].children[1].children[0].setAttribute(
        "src",
        result.data[i].images.original.url
      );
      suggestGifContainer.children[i].children[1].children[0].style.width =
        "100%";
      suggestGifContainer.children[i].children[1].children[0].style.height =
        "299px";
    }
  })
  .catch((error) => {
    console.log(error);
  });
gettingInformation(trendGifs)
  .then((result) => {
    result.data.forEach((element, index) => {
      let bigDiv = document.createElement("div");
      bigDiv.setAttribute("id", index);
      bigDiv.style.width = "30%";
      bigDiv.style.margin = " 0 0 15px 3%";

      let divForImages = document.createElement("div");

      let divForText = document.createElement("div");
      divForText.setAttribute("class", "auxiliar-class-hidden");

      let imagesFromGiphy = document.createElement("img");
      imagesFromGiphy.setAttribute("src", element.images.original.url);
      imagesFromGiphy.style.width = "100%";

      let textTag = document.createElement("p");
      let textToShow;
      if (element.title.length > 0) {
        let aux = element.title.split(" ");
        textToShow = "";
        for (words in aux) {
          textToShow += `#${aux[words]} `;
        }
      } else {
        textToShow = "#Custom";
      }
      textTag.innerText = `${textToShow}`;

      divForImages.appendChild(imagesFromGiphy);
      divForText.appendChild(textTag);

      bigDiv.appendChild(divForImages);
      bigDiv.appendChild(divForText);

      trendGifContainer.appendChild(bigDiv);
    });
  })
  .catch((error) => {
    console.log(error);
  });
const gettingSuggestions = () => {
  const suggestedTextURL = `https://api.giphy.com/v1/gifs/search/tags?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=2&q=${input_box.value}`;
  gettingInformation(suggestedTextURL)
    .then((result) => {
      if (result.data.length > 1) {
        first_search.innerText = input_box.value;
        second_search.innerText = result.data[0].name;
        third_search.innerText = result.data[1].name;
      } else {
        first_search.innerText = input_box.value;
        second_search.innerText = "No suggestions to show";
        third_search.innerText = "No suggestions to show";
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const checkingifEmptyInput = () => {
  if (input_box.value.length == 0) {
    searchSuggestContainer.style.display = "none";
    if (darkIndicator == false) {
      dayTheme();
    } else {
      darkTheme();
    }
  } else {
    searchSuggestContainer.style.display = "flex";
    if (darkIndicator == false) {
      searchButton.style.background = "#F7C9F3";
      searchButton.children[0].setAttribute("src", "./asset/lupa.svg");
      searchButton.children[1].style.color = "#110038";
    } else {
      searchButton.style.background = "#EE3EFE";
      searchButton.children[0].setAttribute("src", "./asset/lupa_light.svg");
      searchButton.children[1].style.color = "#FFFFFF";
      searchSuggestContainer.style.background = "#B4B4B4";
      var searchSuggestContainerChildren = Array.from(
        searchSuggestContainer.children
      );
      searchSuggestContainerChildren.forEach((element) => {
        element.style.background = "#B4B4B4";
      });
    }
  }
};

const selectingAnOption = (eventObj) => {
  input_box.value = eventObj.target.innerText;
};

const creatingHistory = (word) => {
  let textHistory = document.createElement('p');
  textHistory.innerText = `# ${word}`
  textHistory.setAttribute('class','children-text')
  let divHistory = document.createElement('div');
  divHistory.setAttribute('class','children');
  divHistory.appendChild(textHistory);
  divHistoryContainer.appendChild(divHistory);
}

const searchingGifs = (eventObj) => {
  eventObj.preventDefault();
  let textToShow;
  const searchQuery = `https://api.giphy.com/v1/gifs/search?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=12&q=${input_box.value}`;
  gettingInformation(searchQuery)
    .then((result) => {
      creatingHistory(input_box.value)
      suggestSection.style.display = "none";
      trendBox.children[0].innerText = `Resultados de búsqueda para: ${input_box.value}`
      result.data.forEach((element, index) => {
      if (element.title.length > 0) {
        let aux = element.title.split(" ");
        textToShow = "";
        for (words in aux) {
          textToShow += `#${aux[words]} `;
        }
      } else {
        textToShow = "#Custom";
      }
        trendGifContainer.children[index].children[1].children[0].innerText = textToShow
        trendGifContainer.children[
          index
        ].firstElementChild.firstElementChild.setAttribute(
          "src",
          element.images.original.url
        );
      });

      if (searchSuggestContainer.style.display != "none") {
        searchSuggestContainer.style.display = "none";
      }
      if (darkIndicator == false) {
        searchButton.style.background = "#e6e6e6";
        searchButton.children[0].setAttribute(
          "src",
          "./asset/lupa_inactive.svg"
        );
        searchButton.children[1].style.color = "#8F8F8F";
      } else {
        searchButton.style.background = "#B4B4B4";
        searchButton.children[0].setAttribute(
          "src",
          "./asset/combined_shape.svg"
        );
        searchButton.children[1].style.color = "#8F8F8F";
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const gettingAndRenderingGifsFromLocalStorage = () => {
  var listOfGifs = [];
  keys = Object.keys(localStorage);
  i = keys.length;
  while (i--) {
    if (keys[i].startsWith("gif-")) {
      listOfGifs.push(localStorage.getItem(keys[i]));
    }
  }
  while (trendGifContainer.firstChild) {
    trendGifContainer.removeChild(trendGifContainer.firstChild);
  }
  i = listOfGifs.length;
  while (i--) {
    let newChild = document.createElement("img");
    newChild.setAttribute("src", JSON.parse(listOfGifs[i]).images.original.url);
    newChild.style.margin = "0 0 15px 3%";
    trendGifContainer.appendChild(newChild);
  }
};
const myGifos = () => {
  suggestSection.style.display = "none";
  trendBox.children[0].innerText = "Mis guifos";
  gettingAndRenderingGifsFromLocalStorage();
};
const showingHover = (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.nextElementSibling.setAttribute(
      "class",
      "auxiliar-class"
    );
  }
};
const hidingHover = (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.nextElementSibling.setAttribute(
      "class",
      "auxiliar-class-hidden"
    );
  }
};

// Listeners
menuThemeTrigger.addEventListener("click", showingMenu);
sailorDay.addEventListener("click", dayTheme);
sailorNight.addEventListener("click", darkTheme);
input_box.addEventListener("keyup", gettingSuggestions);
input_box.addEventListener("keyup", checkingifEmptyInput);
input_box.addEventListener("click", checkingifEmptyInput);
first_search_div.addEventListener("click", selectingAnOption);
second_search_div.addEventListener("click", selectingAnOption);
third_search_div.addEventListener("click", selectingAnOption);
searchButton.addEventListener("click", searchingGifs);
myGifText.addEventListener("click", myGifos);
trendGifContainer.addEventListener("mouseover", showingHover);
trendGifContainer.addEventListener("mouseout",hidingHover);