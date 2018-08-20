// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "baseUrl": "https://api.themoviedb.org/3/movie/popular?api_key=aa7ab589539224ab4b6e6c3101db8e4a&language=en-US&page=1",
//   "method": "GET",
//   "headers": {},
//   "data": "{}"
// }


// video link for background
// var video = document.getElementById("myVideo");


// API KEY FOR MOVIE SITE
var apiBaseURL = 'https://api.themoviedb.org/3/';
var imageBaseUrl = 'https://image.tmdb.org/t/p/';
var apiKey = "aa7ab589539224ab4b6e6c3101db8e4a";
const popularURL = apiBaseURL + 'movie/popular?api_key=' + apiKey + '&language=en-US&page=1';
const upcomingURL = apiBaseURL + 'movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1';
const topRatedURL = apiBaseURL + 'movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1';
function getPopularMovies() {
    $.getJSON(popularURL, function (popularMoviesData) {
        for (let i = 0; i < popularMoviesData.results.length; i++) {
            //get movie id
            var mid = popularMoviesData.results[i].id;
            var thisMovieUrl = apiBaseURL + 'movie/' + mid + '/videos?api_key=' + apiKey

            $.getJSON(thisMovieUrl, function (movieKey) {
                var poster = imageBaseUrl + 'w300' + popularMoviesData.results[i].poster_path;
                $("#card-" + i).attr("src", poster);

                $("#card-" + i).css("background-image", "url(" + poster + ")");

                // card info
                var title =  popularMoviesData.results[i].original_title;
                var titleDiv = $('<p>').html(title)
                $("#hover" + i).append(titleDiv);
                console.log(title)
            })

        }
        console.log(popularMoviesData.results);
    })

}

function getUpcomingMovies() {
    $.getJSON(upcomingURL, function (upcomingMoviesData) {
        for (let i = 0; i < upcomingMoviesData.results.length; i++) {
            //get movie id
            var mid = upcomingMoviesData.results[i].id;
            var thisMovieUrl = apiBaseURL + 'movie/' + mid + '/videos?api_key=' + apiKey

            $.getJSON(thisMovieUrl, function (movieKey) {
                var poster = imageBaseUrl + 'w300' + upcomingMoviesData.results[i].poster_path;
                $("#card-" + i).attr("src", poster);

                $("#card-" + i).css("background-image", "url(" + poster + ")");
            })

        }
    })
}
function getHighestReviewedMovies() {
    $.getJSON(topRatedURL, function (topRatedMoviesData) {
        for (let i = 0; i < topRatedMoviesData.results.length; i++) {
            //get movie id
            var mid = topRatedMoviesData.results[i].id;
            var thisMovieUrl = apiBaseURL + 'movie/' + mid + '/videos?api_key=' + apiKey

            $.getJSON(thisMovieUrl, function (movieKey) {
                var poster = imageBaseUrl + 'w300' + topRatedMoviesData.results[i].poster_path;
                $("#card-" + i).attr("src", poster);

                $("#card-" + i).css("background-image", "url(" + poster + ")");

                
            })

        }

    })
}
getPopularMovies()
$('.newReleases').click(function () {
    $('#card-').empty();
    getPopularMovies();
})
$('.upcomingReleases').click(function () {
    $('#card-').empty();
    getUpcomingMovies();
})
$('.highestReviewed').click(function () {
    $('#card-').empty();
    getHighestReviewedMovies();
})


