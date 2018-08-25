$(document).ready(function () {
    // Input validation...
    $("#falseEmail").hide();
    $("#noName").hide();

    $("#email").focusout(function () {
        checkEmail();
    });
    $("#userName").focusout(function () {
        checkUserName();
    });

    function checkEmail() {
        var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        var email = $("#email").val();
        // var movieTitle = $("#movieTitle").val();
        // var userReview = $("#userReview").val();

        if (pattern.test(email) && email !== "") {
            $("#falseEmail").hide();
            return true;
        } else {
            $("#falseEmail").show();
            return false;

        }

    };

    function checkUserName(){
        var pattern = /^[a-zA-Z]{2,}$/;
        var userName = $("#userName").val();
        
        if (pattern.test(userName) && userName !== ""){
            $("#noName").hide();
            return true;
        } else {
            $("#noName").show();    
            return false;
        }
    };

    
 
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
        if (checkEmail() && checkUserName()) {

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
        }

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

    $("#emoji_palette_button").on("click", function (event) {
        event.preventDefault();
        $("#emoji_palette_button").emojidexPalette();
        $("body").emojidexReplace();
    });

});

