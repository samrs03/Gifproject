async function gettingInformation(url) {
  const testing = await fetch(url);
  return testing.json();
}
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
  body[0].style.background = "#FFF4FD";
  formBox.style.background = '#E6E6E6';
  searchButton.style.background = '#E6E6E6';
  searchButton.children[0].setAttribute('src','./asset/lupa_inactive.svg');
  searchButton.children[1].style.color = "#B4B4B4";
  createGifosButton.style.background = "#F7C9F3";
  chooseThemeButton.style.background = "#F7C9F3";
  menuThemeTrigger.style.background = "#F7C9F3";
  createGifosText.style.color = "#110038";
  chooseThemeText.style.color = "#110038";
  myGifText.style.color = "#110038";
  gifosLogo.setAttribute("src", "./asset/gifOF_logo.png");
  darkIndicator = false;
}
function darkTheme() {
  sailorDay.style.background = "#F0F0F0";
  sailorNight.style.background = "#2E32FB";
  sailorNightText.style.color = "#FFFFFF";
  body[0].style.background = "#110038";
  formBox.style.background = "#B4B4B4";
  searchButton.style.background = "#B4B4B4";
  searchButton.children[0].setAttribute('src','./asset/combined_shape.svg');
  searchButton.children[1].style.color = "#8F8F8F";
  createGifosButton.style.background = "#EE3EFE";
  chooseThemeButton.style.background = "#EE3EFE";
  menuThemeTrigger.style.background = "#EE3EFE";
  createGifosText.style.color = "#FFFFFF";
  chooseThemeText.style.color = "#FFFFFF";
  myGifText.style.color = "#FFFFFF";
  gifosLogo.setAttribute("src", "./asset/gifOF_logo_dark.png");
  darkIndicator = true;
}

function gettingSuggestions() {
  const suggestedTextURL =
"https://api.giphy.com/v1/gifs/search/tags?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=2&q=" +
input_box.value;
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
}
const checkingifEmptyInput = () => {
  if (input_box.value.length == 0) {
    searchSuggestContainer.style.display = "none";
    if (darkIndicator == false ) {
      dayTheme();
    } else {
      darkTheme();
    };
  } else {
    searchSuggestContainer.style.display = "flex";
    if (darkIndicator == false ) {
      searchButton.style.background = '#F7C9F3';
      searchButton.children[0].setAttribute('src','./asset/lupa.svg');
      searchButton.children[1].style.color = '#110038';
    } else {
      searchButton.style.background = '#EE3EFE';
      searchButton.children[0].setAttribute('src','./asset/lupa_light.svg');
      searchButton.children[1].style.color = '#FFFFFF';
      searchSuggestContainer.style.background = '#B4B4B4';
      var searchSuggestContainerChildren = Array.from(searchSuggestContainer.children);
      searchSuggestContainerChildren.forEach(element => {
        element.style.background = '#B4B4B4';
      });
    };
  };
};

const selectingAnOption = (eventObj) => {
  input_box.value = eventObj.target.innerText;
};

const searchingGifs = (eventObj) => {
  eventObj.preventDefault();
  const searchQuery = "https://api.giphy.com/v1/gifs/search?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=12&q=" +
  input_box.value;
  gettingInformation(searchQuery).then( (result)=> {
    suggestSection.style.display = 'none';
    for (let i = 0; i < trendGifContainer.children.length; i++){
      trendGifContainer.children[i].setAttribute('src', result.data[i].images.preview_webp.url);
      // trendGifContainer.children[i].style.width = '30%';
      // trendGifContainer.children[i].style.marginBottom = '10px';
    };  
  }).catch( (e)=> {
    console.log(e);
  });
};


const myGifos = () => {
  suggestSection.style.display = 'none';
  trendBox.children[0].innerText = 'Mis guifos';
  console.log(trendBox.children[0].innerText)
};