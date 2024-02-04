const input=document.querySelector('.inputLocation');
const search=document.querySelector('.loc-button');
const weather=document.querySelector('.weather-temp');
const place=document.querySelector('.spann');
const dayList=document.querySelector('.day-list');
const wind=document.querySelector('.wind');
const humid=document.querySelector('.humid');

search.addEventListener('click',()=>{
  const APIKey = 'a7d719ba418f51741a72eda4f18847e9';
  const city = input.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
  .then(response=>response.json())
  .then(json => {
       console.log(json);
       weather.innerHTML=`${parseInt(json.main.temp)}`;
       place.innerHTML=`${json.name}`;
       dayList.style.display='none';
       wind.innerHTML=`${parseInt(json.wind.speed)} km/h`;
       humid.innerHTML=`${json.main.humidity}%`;
  })
})