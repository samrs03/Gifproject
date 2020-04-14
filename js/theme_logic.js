menuThemeTrigger.addEventListener("click", showingMenu);
sailorDay.addEventListener("click", dayTheme);
sailorNight.addEventListener("click", darkTheme);
url = "https://api.giphy.com/v1/gifs/random?api_key=qsOjAmeDhQKoL3IW1Cnaty7Rayav17Ix&tag=&rating=G";
async function gettingInformation(url) {
  const testing = await fetch(url);
  return testing.json();
}
gettingInformation(url)
  .then((result) => {
    console.log(result.data);
    document.getElementById("nuevaprueba").setAttribute("src",result.data.images.preview_webp.url)
  })
  .catch((error) => {
    console.log("El error fue " + error);
  });
