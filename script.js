///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateMovieDataOnBrowser(data) {
  // console.log(data);
  let movieResultData = data.results[0];
  console.log(movieResultData);
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
  document.getElementById("movieHomepage").href = movieResultData.homepage;
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

  fetch(fullURI)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      updateMovieDataOnBrowser(data);
      movieDetails(data.results[0].id);
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
  console.log(fullURI);
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
