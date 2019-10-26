



// var cityInput = $("#cityTyped").val();
var searchButton = $("#citySearch");

// event listener to launch renderCurrentWeather function
searchButton.on("click", function (event) {
    event.preventDefault();
    var cityInput = $("#cityTyped").val();
    renderCurrentWeather(cityInput);
});

// console.log(cityInput);
// console.log(searchButton);


// function to launch AJAX calls and dynamically render HTML page
function renderCurrentWeather(cityInput) {
    // gets values for URL based on count and type
    var cityName = cityInput;
    var openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=96572f2661bb3c833bf8894b537b2366";
    var currentWeather = $(".currentWeather");

    // console log my API URL to check that variables have a value assigned
    console.log(openWeatherURL);
    
    // first AJAX call to retrieve API data for city name
    $.ajax({
        url: openWeatherURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
        //   currentWeather.append("<p>City Name:" + response.name + "</p>");
        console.log(response.name);
        currentWeather.text("City Name:" + response.name);
        currentWeather.text("Weather Description: "+ response.weather[0].description); 
        currentWeather.append("<p>Temperature: " + response.main.temp + "</p>");
        currentWeather.append("<p>Humidity: " + response.main.humidity + "</p>");
        currentWeather.append("<p>Wind Speed: " + response.wind.speed + "</p>");
        
        // variables created for use in second URL call for UV data
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        // URL for second AJAX call to obtain UV data
        var dataUvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=96572f2661bb3c833bf8894b537b2366&lat=" + lat + "&lon=" + lon;

        // console log the variables for the second AJAX call to view the results
        console.log(lat);
        console.log(lon);
        console.log(dataUvURL)

        //   Second AJAX call to obtain UV data
        $.ajax({
            url: dataUvURL,
            method: "GET"
         }).then(function(responseTwo){
             console.log(responseTwo);
             currentWeather.append("<p>UV Index: " + responseTwo.value + "</p>");;
         });
        
        // additonal variable for third AJAX call
        var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon=" + lon;

        console.log(fiveDayForecastURL);

        $.ajax({
            url: fiveDayForecastURL,
            method: "GET"
        }).then(function(responseThree){
            console.log(responseThree);
        })



        
        }).catch(function(err){console.log(err)});

    
};

// function renderFiveDayForecast() {

//     var fiveDayForecastURL = ""
// };