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

    let date=document.getElementById('date');
    let todaydate =new Date();
    date.innerText = dateManage(todaydate);

    if(weatherType.textContent=='Clear') {
        document.body.style.backgroundImage="url('/home/akshat/weather-app/clear.jpg')"
    }
    else if(weatherType.textContent=='Haze') {
        document.body.style.backgroundImage="url(/home/akshat/weather-app/haze.jpg)"
    }
    else if(weatherType.textContent=='Rain') {
        document.body.style.backgroundImage="url('/home/akshat/weather-app/rain.jpeg')"
    }
    else if(weatherType.textContent=='Clouds') {
        document.body.style.backgroundImage="url('/home/akshat/weather-app/clouds.jpeg')"
    }
    else if(weatherType.textContent=='Thunderstorm') {
        document.body.style.backgroundImage="url('/home/akshat/weather-app/thunderstorm.jpeg')"
    }
    else if(weatherType.textContent=='Snow') {
        document.body.style.backgroundImage="url('/home/akshat/weather-app/snow.jpeg')"
    }
    else if(weatherType.textContent=='Mist') {
        document.body.style.backgroundImage="url('/home/akshat/weather-app/mist.jpeg')"
    }
    
}
//date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}



