//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://newsapi.org/docs/endpoints/top-headlines
//Example where News do not allow cors on developer license




//Exercise: 
// Create a simple hmtl page and javascript file that reads the weather forecast 
// for the next 5 days for a city of your choice using the OpenWeatherMap API (https://openweathermap.org/api). 
// Display the forecast including the date, temperature, and weather conditions.

// Hint: you did this in the C# advanced course in project A and well as Project B (Maui)
// Hint:
const _apiKey = "eee86395bdce14b3d962d5956193d800";
const city = "Stockholm";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${_apiKey}`;

async function fetchWeather() {

    try {
        const result = await fetch(url);

        if (result.ok) {
            const weatherData = await result.json();
            console.log(weatherData);
            return weatherData.list[0];
        }
    }
    catch (err) {
        console.log(`Failed to recieved data from server: ${err.message}`);
        alert(`Failed to recieved data from server: ${err.message}`);
    }
    
}

(async () => {
    const sthlm = await fetchWeather();

    document.querySelector('#date').textContent = `Date: ${sthlm.dt_txt}`;
    document.querySelector('#temp').textContent = `Temp: ${sthlm.main.temp} °C`;
    document.querySelector('#desc').textContent = 'Conditions: ' + sthlm.weather[0].description;

})();
