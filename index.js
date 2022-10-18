async function getLatLong(){
    let name = "bicester"
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${name}}&limit={limit}&appid={f7555cc5afd733fa2e73dee02f9ca7b2}`,{mode:"cors"})
    const locationData = await response.json();
    console.log(locationData) 

async function getWeatherInfo(){

    const locationInfo = getLatLong()
    const lat = locationInfo.lat;
    const lon = locationInfo.lon;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={f7555cc5afd733fa2e73dee02f9ca7b2}`)
    const weatherData = await response.json();
    console.log(weatherData);
}

getWeatherInfo(); //need to wait for api key to activate