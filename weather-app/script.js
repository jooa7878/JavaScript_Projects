const APIURL = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

const searchEl = document.getElementById('search');
const formEl = document.getElementById('form');
const mainEl = document.getElementById('main');

formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const location = searchEl.value;

    if(location){
        getWeatherByLocation(location);
    }
    searchEl.value = '';
})


/*
    현재온도 : (respData.main.temp- 273.15) 
    현재습도 : respData.main.humidity
    날씨 : respData.weather[0].main 
    상세날씨설명 : respData.weather[0].description 
    날씨 이미지 : respData.weather[0].icon 
    바람   : respData.wind.speed 
    나라   : respData.sys.country 
    도시이름  : respData.name 
    구름  : (respData.clouds.all) +"%"                 
*/


async function getWeatherByLocation(location) {
    const resp = await fetch(APIURL(location), {origin : "cors"});
    const respData = await resp.json();
    
    addWeatherToPage(respData);
}

function addWeatherToPage(data){

    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
        <h1>${data.name}</h1>
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${Math.floor((data.main.temp- 273.15)) }℃</h2>
        <small>${data.weather[0].main}</small>
        
    `
    mainEl.innerHTML= '';
    mainEl.appendChild(weather);
}
