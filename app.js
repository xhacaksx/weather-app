const weatherApi = {
    key:"091113070ce67f69eba7fbebb6c02e22",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
//q={city name}&appid={API key}


//Event Listener Function on keypress
const searchInputBox=document.getElementById('input-box');
searchInputBox.addEventListener('keypress',event => {
    if(event.keyCode==13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
        
});


//Get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
//show weather report
function showWeatherReport(weather) {
    console.log(weather)
    let city=document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;
    

    let temperature=document.getElementById('temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minMax=document.getElementById('min-max');
    minMax.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
}
//date manage

