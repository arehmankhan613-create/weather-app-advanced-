const apiKey = "3d12bfd7c67376c39b298450c321d916";


function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(getWeather);

    }
    else{
        alert("Location not supported");
    }

}


async function getWeather(position){

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;


    let url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


    let response = await fetch(url);

let data = await response.json();

console.log(data);


    document.getElementById("city").innerHTML =
data.name + " " + data.sys.country;


    document.getElementById("temp").innerHTML =
    data.main.temp + " °C";


    document.getElementById("condition").innerHTML =
    data.weather[0].description;


    document.getElementById("humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";


    document.getElementById("wind").innerHTML =
    "Wind: " + data.wind.speed + " km/h";


}