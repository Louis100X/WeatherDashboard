



// var cityInput = $("#cityTyped").val();
var searchButton = $("#citySearch");


searchButton.on("click", function (event) {
    event.preventDefault();
    var cityInput = $("#cityTyped").val();
    renderCurrentWeather(cityInput);
});

// console.log(cityInput);
// console.log(searchButton);

function renderCurrentWeather(cityInput) {
    // gets values for URL based on count and type
    var cityName = cityInput
    var openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=96572f2661bb3c833bf8894b537b2366";
    var currentWeather = $(".currentWeather");

    console.log(openWeatherURL);

    $.ajax({
        url: openWeatherURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
        //   currentWeather.append("<p>City Name:" + response.name + "</p>");
        console.log(response.name);
        currentWeather.text("Weather Description: "+ response.weather[0].description); 
        currentWeather.append("<p>Temperature: " + response.main.temp + "</p>");
        currentWeather.append("<p>Humidity: " + response.main.humidity + "</p>");
        currentWeather.append("<p>Wind Speed: " + response.wind.speed + "</p>");
      }).catch(function(err){console.log(err)});

    
};

