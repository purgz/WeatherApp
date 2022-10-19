let localLat;
let localLon;

async function getWeatherInfo(location){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f7555cc5afd733fa2e73dee02f9ca7b2`,
    {
        mode:"cors"
    })
    const weatherData = await response.json();
    console.log(weatherData);
}

function getPosPromise(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
        )
    })
}

async function getLocation(){
    return await getPosPromise();
}

async function getCityName(){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${localLat}&lon=${localLon}&appid=f7555cc5afd733fa2e73dee02f9ca7b2`)
    const locationData = await response.json();
    return locationData[0].name;
}


getWeatherInfo("bicester");


const localWeatherBtn = document.querySelector("#use-local");
const locationInput = document.querySelector("#enter-location");
const locationForm = document.querySelector("#location-form")

localWeatherBtn.addEventListener("click",async e=>{

    let location = await getLocation();
    localLat = location.coords.latitude;
    localLon = location.coords.longitude;
    
    getWeatherInfo(await getCityName())
})

locationForm.addEventListener("submit",async e=>{
    e.preventDefault();
    let location = e.target[0].value
    await getWeatherInfo(location);
})