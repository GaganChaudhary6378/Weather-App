const searchEl=document.getElementById("search-el");
const buttonEl=document.getElementById("bt-el");
let weatherCityEl=document.getElementById("weather-city");

buttonEl.addEventListener('click',function(){
    let valueEl=searchEl.value;
    let str=`Weather of ${valueEl}`
    weatherCityEl.textContent=str;
})

fetch('https://api.weatherapi.com/v1/current.json?key=91e5f2cc26f041a492f145215230101&q=Bharatpur&aqi=no')
  .then((response) => response.json())
  .then((data) => console.log(data));
