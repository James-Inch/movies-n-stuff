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

var database = firebase.database();

$("#reviewSubmit").on("click", function (event) {
  event.preventDefault();

  var email = $("#email").val().trim();
  var name = $("#userName").val().trim();
  var title = $("#movieTitle").val().trim();
  var review = $("#userReview").val().trim();

  var reviewObj = {
    email: email,
    name: name,
    title: title,
    review: review
  }

  database.ref().push(reviewObj);

  $("#email").val("");
  $("#userName").val("");
  $("#movieTitle").val("");
  $("#userReview").val("");


});

database.ref().on("child_added", function (childSnapshot) {

  var name = childSnapshot.val().name;
  var title = childSnapshot.val().title;
  var review = childSnapshot.val().review;

  var reviewDiv = $("<div class='jumbotron' style='padding: 32px; border-radius: 50px; color: rgb(63, 231, 253)'>");

  var movieReviewed = $("<h1>").text(title);

  var p = $("<p>").text(review);

  var whosReview = $("<h5>").text("- " + name);
  
  reviewDiv.append(movieReviewed);

  reviewDiv.append(p);
  reviewDiv.append(whosReview);

  $("#reviews-go-here").append(reviewDiv);
});


