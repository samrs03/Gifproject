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
  stylesTag.setAttribute('href','./styles/light/styles.css');
  searchButton.children[0].setAttribute('src','./asset/lupa_inactive.svg');
  gifosLogo.setAttribute("src", "./asset/gifOF_logo.png");
  darkIndicator = false;
};
function darkTheme() {
  stylesTag.setAttribute("href","./styles/dark/styles.css")
  searchButton.children[0].setAttribute('src','./asset/combined_shape.svg');
  gifosLogo.setAttribute("src", "./asset/gifOF_logo_dark.png");
  darkIndicator = true;
};

SuggestGifs =
	'https://api.giphy.com/v1/gifs/search?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&q=charlieBrown&limit=4&offset=0&rating=G&lang=en';
trendGifs = 'https://api.giphy.com/v1/gifs/trending?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=12&rating=G';
gettingInformation(SuggestGifs)
	.then((result) => {
		for (let i=0; i < suggestGifContainer.children.length; i++) {
			suggestGifContainer.children[i].children[1].children[0].setAttribute('src',result.data[i].images.fixed_width.url);
			suggestGifContainer.children[i].children[1].children[0].style.width = '100%';
			suggestGifContainer.children[i].children[1].children[0].style.height = '299px';
		};
	})
	.catch((error) => {
		console.log(error);
	});
gettingInformation(trendGifs)
	.then((result) => {
		for (let i=0; i < trendGifContainer.children.length; i ++) {
			trendGifContainer.children[i].setAttribute('src',result.data[i].images.fixed_width.url);
			trendGifContainer.children[i].style.width = '30%';
			trendGifContainer.children[i].style.marginBottom = '10px';
		};
	})
	.catch((error) => {
		console.log(error);
	});

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
      trendGifContainer.children[i].setAttribute('src', result.data[i].images.fixed_width.url);
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