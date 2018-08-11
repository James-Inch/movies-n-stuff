var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/latest?api_key=aa7ab589539224ab4b6e6c3101db8e4a&language=en-US&include_adult=false",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });   