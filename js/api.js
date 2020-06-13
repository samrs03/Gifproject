apiKey = 'api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix';
SuggestGifs =
	'https://api.giphy.com/v1/gifs/search?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&q=charlieBrown&limit=4&offset=0&rating=G&lang=en';
trendGifs = 'https://api.giphy.com/v1/gifs/trending?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&limit=12&rating=G';
async function gettingInformation(url) {
	const testing = await fetch(url);
	return testing.json();
}
gettingInformation(SuggestGifs)
	.then((result) => {
		suggestGif1.setAttribute('src', result.data[0].images.preview_webp.url);
		suggestGif1.style.width = '100%';
		suggestGif1.style.height = '299px';
		suggestGif2.setAttribute('src', result.data[1].images.preview_webp.url);
		suggestGif2.style.width = '100%';
		suggestGif2.style.height = '299px';
		suggestGif3.setAttribute('src', result.data[2].images.preview_webp.url);
		suggestGif3.style.width = '100%';
		suggestGif3.style.height = '299px';
		suggestGif4.setAttribute('src', result.data[3].images.preview_webp.url);
		suggestGif4.style.width = '100%';
		suggestGif4.style.height = '299px';
	})
	.catch((error) => {
		console.log(error);
	});
gettingInformation(trendGifs)
	.then((result) => {
		trendGif1.setAttribute('src', result.data[0].images.preview_webp.url);
		trendGif2.setAttribute('src', result.data[1].images.preview_webp.url);
		trendGif3.setAttribute('src', result.data[2].images.preview_webp.url)
		trendGif4.setAttribute('src', result.data[3].images.preview_webp.url)
		trendGif5.setAttribute('src', result.data[4].images.preview_webp.url)
		trendGif6.setAttribute('src', result.data[5].images.preview_webp.url)
		trendGif7.setAttribute('src', result.data[6].images.preview_webp.url)
		trendGif8.setAttribute('src', result.data[7].images.preview_webp.url)
		trendGif9.setAttribute('src', result.data[8].images.preview_webp.url)
		trendGif10.setAttribute('src', result.data[9].images.preview_webp.url)
		trendGif11.setAttribute('src', result.data[10].images.preview_webp.url)
		trendGif12.setAttribute('src', result.data[11].images.preview_webp.url)
		trendGif1.style.width ='30%';
		
		trendGif2.style.width ='30%';
		
		trendGif3.style.width ='30%';
		
		trendGif4.style.width ='30%';
		trendGif5.style.width ='30%';
		trendGif6.style.width ='30%';
		trendGif7.style.width ='30%';
		trendGif8.style.width ='30%';
		trendGif9.style.width ='30%';
		trendGif10.style.width ='30%';
		trendGif11.style.width ='30%';
		trendGif12.style.width ='30%';
		trendGif1.style.marginBottom = '10px'
		trendGif2.style.marginBottom = '10px'
		trendGif3.style.marginBottom = '10px'
		trendGif4.style.marginBottom = '10px'
		trendGif5.style.marginBottom = '10px'
		trendGif6.style.marginBottom = '10px'
		trendGif7.style.marginBottom = '10px'
		trendGif8.style.marginBottom = '10px'
		trendGif9.style.marginBottom = '10px'

	})
	.catch((error) => {
		console.log(error);
	});
