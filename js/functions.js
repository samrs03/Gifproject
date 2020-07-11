async function gettingInformation(url) {
	const testing = await fetch(url);
	return testing.json();
}
function showingMenu() {
	if (menuTheme.style.display == 'none') {
		menuTheme.style.display = 'flex';
	} else {
		menuTheme.style.display = 'none';
	}
}
function dayTheme() {
	sailorDay.style.background = '#FFF4FD';
	sailorNight.style.background = '#F0F0F0';
	sailorNightText.style.color = '#110038';
	body[0].style.background = '#FFF4FD';
	createGifosButton.style.background = '#F7C9F3';
	chooseThemeButton.style.background = '#F7C9F3';
	menuThemeTrigger.style.background = '#F7C9F3';
	createGifosText.style.color = '#110038';
	chooseThemeText.style.color = '#110038';
	myGifText.style.color = '#110038';
	gifosLogo.setAttribute('src','./asset/gifOf_logo.png');
}
function darkTheme() {
	sailorDay.style.background = '#F0F0F0';
	sailorNight.style.background = '#2E32FB';
	sailorNightText.style.color = '#FFFFFF';
	body[0].style.background = '#110038';
	createGifosButton.style.background = '#EE3EFE';
	chooseThemeButton.style.background = '#EE3EFE';
	menuThemeTrigger.style.background = '#EE3EFE';
	createGifosText.style.color = '#FFFFFF';
  chooseThemeText.style.color = '#FFFFFF';
  myGifText.style.color = '#FFFFFF';
  gifosLogo.setAttribute('src','./asset/gifOf_logo_dark.png');
}

function tryingit () {
	const suggestedTextURL = 'https://api.giphy.com/v1/gifs/search/tags?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=2&q=' + input_box.value;
	gettingInformation(suggestedTextURL).then(result => {
		first_search.innerText = input_box.value
		second_search.innerText = result.data[0].name
		third_search.innerText = result.data[1].name
		console.log(result.data)
	}).catch(e => {
		console.log(e)
	})
}