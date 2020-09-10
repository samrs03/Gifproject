apiKey = 'api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix';
SuggestGifs =
	'https://api.giphy.com/v1/gifs/search?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&q=charlieBrown&limit=4&offset=0&rating=G&lang=en';
trendGifs = 'https://api.giphy.com/v1/gifs/trending?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=12&rating=G';
gettingInformation(SuggestGifs)
	.then((result) => {
		for (let i=0; i < suggestGifContainer.children.length; i++) {
			suggestGifContainer.children[i].children[1].children[0].setAttribute('src',result.data[i].images.preview_webp.url);
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
			trendGifContainer.children[i].setAttribute('src',result.data[i].images.preview_webp.url);
			trendGifContainer.children[i].style.width = '30%';
			trendGifContainer.children[i].style.marginBottom = '10px';
		};
	})
	.catch((error) => {
		console.log(error);
	});