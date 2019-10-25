



var cityInput = $("#cityTyped").value();
var searchButton = $("#citySearch");


searchButton.on("click", function (event) {
    event.preventDefault();
    renderCurrentWeather();
});

console.log(cityInput);
console.log(searchButton);

function renderCurrentWeather() {
    // gets values for URL based on count and type
    var cityName = cityInput
    var openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=96572f2661bb3c833bf8894b537b2366";

    console.log(openWeatherURL);

    $.ajax({
        url: openWeatherURL,
        method: "GET"
      }).then(function(response) {
        $(".currentWeather").text(response.weather);
      });

    
};
renderCurrentWeather();
