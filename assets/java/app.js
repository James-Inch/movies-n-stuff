var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/popular?api_key=aa7ab589539224ab4b6e6c3101db8e4a&language=en-US&page=1",
  "method": "GET",
  "headers": {},
  "data": "{page:1}"
}

$.ajax(settings).done(function (response) {

  var results = response.results
  console.log(results);

  for( var i = 0; i < 5; i++){
    // console.log(results[i].title);

    var title = results[i].title
    console.log(title + 0);

    


  };

});
