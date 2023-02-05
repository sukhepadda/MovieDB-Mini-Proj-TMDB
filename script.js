const apiKey = "2950f935c91571f9066f42ad4a94dda7";
let movieName = "pathaan";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=1&include_adult=true`
// console.log(url);
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let searchMovieId = data.results[0].id;
    console.log(searchMovieId);
  });
  
