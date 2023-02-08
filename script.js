///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateMovieDataOnBrowser(data) {
  // console.log(data);
  let movieResultData = data.results[0];
  document.getElementById("movieTitle").innerText =
    movieResultData.original_title;
  document.getElementById("movieOverview").innerText = movieResultData.overview;

  let imgBaseUrl = `https://www.themoviedb.org/t/p/original`;
  let imgMovieUrl = movieResultData.poster_path;
  let fullMoviePosterUrl = imgBaseUrl + imgMovieUrl;
  document.getElementById("moviePoster").src = fullMoviePosterUrl;
}

function updateMovieDataOnBrowser2(data) {
  // console.log(data);
  let movieResultData = data;
  // console.log(movieResultData);

  document.getElementById("movieTagLine").innerText = movieResultData.tagline;
  document.getElementById("movieReleaseData").innerText =
    movieResultData.release_date;
  document.getElementById("movieImdb").innerText = movieResultData.imdb_id;
  document.getElementById("moviePopularity").innerText =
    movieResultData.popularity;
  document.getElementById("movieVotingAvg").innerText =
    movieResultData.vote_average;

  //href of movie webpage
  let movieHref = movieResultData.homepage;
  if (movieHref === "") {
    document.getElementById("movieHomepageLink").innerHTML = `
      <h2 class="h2">
      This Movie does not have any website.
    </h2>
      `;
  } else {
    document.getElementById("movieHomepageLink").innerHTML = `
      <h2 class="h2">
      Explore More Details about this Movie in Movie's
      <a id="movieHomepage" href="${movieHref}">Website</a>
    </h2>    
  `;
  }
  let genrelist = document.getElementById("genrelist");
  let productioncompanies = document.getElementById("productioncompanies");

  //empty all children first
  while (genrelist.hasChildNodes()) {
    genrelist.removeChild(genrelist.firstChild);
  }

  //show genre list.
  for (var i = 0; i < movieResultData.genres.length; i++) {
    const node = document.createElement("li");
    node.className = "list-group-item";
    // const textnode = document.createTextNode("Water");
    const textnode = document.createTextNode(movieResultData.genres[i].name);
    node.appendChild(textnode);
    genrelist.appendChild(node);
  }

  //empty all children first
  while (productioncompanies.hasChildNodes()) {
    productioncompanies.removeChild(productioncompanies.firstChild);
  }

  //show production list
  for (var i = 0; i < movieResultData.production_companies.length; i++) {
    const node = document.createElement("li");
    node.className = "list-group-item";
    // const textnode = document.createTextNode("Water");
    const textnode = document.createTextNode(
      movieResultData.production_companies[i].name
    );
    node.appendChild(textnode);
    productioncompanies.appendChild(node);
  }
}

function updateMovieDataOnBrowser3(data) {
  // console.log(data);
  let backdrops = data.backdrops;
  let imageURLBase = `https://www.themoviedb.org/t/p/original`;
  //sliderimage1 sliderimage2
  document.getElementById("sliderimage1").src =
    imageURLBase + backdrops[0].file_path;
  document.getElementById("sliderimage2").src =
    imageURLBase + backdrops[1].file_path;
  // document.getElementById("cocoeenContainer").removeAttribute("hidden");


  let swiperwrappermain = document.getElementById(`swiperwrappermain`);

  //empty all children first
  while (swiperwrappermain.hasChildNodes()) {
    swiperwrappermain.removeChild(swiperwrappermain.firstChild);
  }

  let maxImgs = 11;
  for (let i = 2; i < backdrops.length && i <= maxImgs; i++) {
    // console.log(i);
    if(i === 2){
      const nodeDiv = document.createElement("div");
      nodeDiv.className = "carousel-item active";
      const nodeImage = document.createElement("img");
      nodeImage.className = "d-block w-100";
      nodeImage.src = imageURLBase + backdrops[i].file_path;
      nodeDiv.appendChild(nodeImage);
      swiperwrappermain.appendChild(nodeDiv);
    }
    else{
      const nodeDiv = document.createElement("div");
      nodeDiv.className = "carousel-item";
      const nodeImage = document.createElement("img");
      nodeImage.className = "d-block w-100";
      nodeImage.src = imageURLBase + backdrops[i].file_path;
      nodeDiv.appendChild(nodeImage);
      swiperwrappermain.appendChild(nodeDiv);
    }
  }
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function searchForMovie(movieName = "pathaan") {
  //build my full URI
  //base URL
  let baseURL = "https://api.themoviedb.org/3/";
  //endpoint
  let endpoint = "search/movie";
  //api key

  let extrathings = `&language=en-US&query=${movieName}&page=1&include_adult=false`;

  let fullURI = baseURL + endpoint + "?api_key=" + movieAPIkey + extrathings;

  //loading animation
  document.getElementById("moviePoster").src = "https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif";


  fetch(fullURI)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      updateMovieDataOnBrowser(data);
      movieDetails(data.results[0].id);
      movieImages(data.results[0].id);
    })
    .catch((error) => {
      console.log(error);
    });
}
function movieDetails(mId) {
  let movieId = mId;
  // console.log(movieId);
  //build my full URI
  //base URL
  let baseURL = "https://api.themoviedb.org/3/";
  //endpoint
  let endpoint = "movie/";
  //api key

  let extrathings = `&language=en-US`;

  let fullURI =
    baseURL + endpoint + movieId + "?api_key=" + movieAPIkey + extrathings;
  // console.log(fullURI);
  fetch(fullURI)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      updateMovieDataOnBrowser2(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function movieImages(mId) {
  let movieId = mId;
  //build my full URI
  //base URL
  let baseURL = "https://api.themoviedb.org/3/";
  //endpoint
  let endpoint = "movie/";

  let endpoint2 = "images";

  let fullURI =
    baseURL + endpoint + movieId + "/" + endpoint2 + "?api_key=" + movieAPIkey;
  // console.log(fullURI);
  fetch(fullURI)
    .then((res) => res.json())
    .then((data) => {
      updateMovieDataOnBrowser3(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function randomFunction() {
  // Returns a random integer from 0 to 9:

  let randomNumber = Math.floor(Math.random() * listOfRandomMovieStuff.length);

  let inputmoviequery = listOfRandomMovieStuff[randomNumber];
  searchForMovie(inputmoviequery);
}

function searchFormFunction() {
  let searchMovieName = document.getElementById("movieInput").value;
  if (searchMovieName === "") {
    randomFunction();
  } else {
    searchForMovie(searchMovieName);
  }
}

randomFunction();
