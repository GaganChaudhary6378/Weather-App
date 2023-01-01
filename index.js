const searchEl=document.getElementById("search-el");
const buttonEl=document.getElementById("bt-el");
let weatherDescEl=document.getElementById("weather-desc");
let weatherCityEl=document.getElementById("weather-city");

buttonEl.addEventListener('click',function(){
    let valueEl=searchEl.value;
    let str=`Weather of ${valueEl}`
    weatherCityEl.textContent=str;

fetch(`https://api.weatherapi.com/v1/current.json?key=91e5f2cc26f041a492f145215230101&q=${valueEl}&aqi=no1`)
  .then((response) => response.json())
  .then((data) => {
        renderWeather(data);
  });
    searchEl.value="";
})

function renderWeather(data){
    let html='';
    html=`
    <div class="icon">
                <img class="type" src="${data.current.condition.icon}">
    </div>
    <div class="remData">   
        <h2 class="condition">Weather Condition:&nbsp;${data.current.condition.text}</h2>
        <h2 class="humidity">Humidity:&nbsp;${data.current.humidity}</h2>
        <h2 class="celcius">Temperature in Celcius:&nbsp;${data.current.temp_c} C(in deg)</h2>
        <h2 class="fah">Temperature in Fahrenheit:&nbsp;${data.current.temp_f} F</h2>
        <h2 class="speed">Wind Speed:&nbsp;${data.current.wind_kph}(in kmph)</h2>
    </div>
    `;
    weatherDescEl.innerHTML=html;

}


