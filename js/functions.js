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
