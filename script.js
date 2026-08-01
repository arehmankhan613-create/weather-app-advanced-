function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showWeather);

}
else{

alert("Location not supported");

}

}


function showWeather(position){


let lat = position.coords.latitude;
let lon = position.coords.longitude;


// Demo weather data

document.getElementById("city").innerHTML="Your Location";

document.getElementById("temp").innerHTML="28 °C";

document.getElementById("condition").innerHTML="Cloudy 🌥️";

document.getElementById("humidity").innerHTML="Humidity: 70%";

document.getElementById("wind").innerHTML="Wind: 10 km/h";


}