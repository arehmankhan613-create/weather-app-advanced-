const apiKey = "3d12bfd7c67376c39b298450c321d916";


function getLocation(){

    navigator.geolocation.getCurrentPosition(getWeather);

}



async function getWeather(position){

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;


    let url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


    let response = await fetch(url);

    let data = await response.json();


    showWeather(data);

    getForecast(data.name);

}




async function searchCity(){

    let city = document.getElementById("cityInput").value;


    if(city==""){

        alert("Enter city name");
        return;

    }


    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    let response = await fetch(url);

    let data = await response.json();


    if(data.cod=="404"){

        alert("City not found");
        return;

    }


    showWeather(data);

    getForecast(data.name);

}




function showWeather(data){


    document.getElementById("city").innerHTML =
    data.name + ", " + data.sys.country;


    document.getElementById("temp").innerHTML =
    data.main.temp + " °C";


    document.getElementById("condition").innerHTML =
    data.weather[0].description;


    document.getElementById("icon").src =
    "https://openweathermap.org/img/wn/"
    + data.weather[0].icon + "@2x.png";


    document.getElementById("humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";


    document.getElementById("wind").innerHTML =
    "Wind: " + data.wind.speed + " km/h";


}





async function getForecast(city){


    let url =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;


    let response = await fetch(url);

    let data = await response.json();


    let box = document.getElementById("forecast");

    box.innerHTML = "";


    for(let i=0;i<5;i++){


        let item = data.list[i*8];


        box.innerHTML += `

        <div class="card">

        <p>${item.dt_txt.split(" ")[0]}</p>

        <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png">

        <p>${item.main.temp}°C</p>

        </div>

        `;

    }


}
alert("JavaScript Connected");