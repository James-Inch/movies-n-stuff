var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/popular?api_key=aa7ab589539224ab4b6e6c3101db8e4a&language=en-US&page=1",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);

  for (var i = 0; i < 9; i++) {
    var results = response.results;

    //  variable to store image
    var posterLink = results[i].poster_path;

    var image = "http://image.tmdb.org/t/p/w185/" + posterLink;

    $("#card-" + i).attr("src", image);

    $("#card-" + i).css("background-image", "url(" + image + ")");

  }
});

// config firebase
var config = {
  apiKey: "AIzaSyA5KFzy1LdpI-YvaxhnIDzaeQoKr_SNqUE",
  authDomain: "movies-n-stuff-213423.firebaseapp.com",
  databaseURL: "https://movies-n-stuff-213423.firebaseio.com",
  projectId: "movies-n-stuff-213423",
  storageBucket: "",
  messagingSenderId: "504975234986"
};
firebase.initializeApp(config);
