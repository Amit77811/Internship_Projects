const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const reset_btn = document.querySelector(".reset-btn");
const location_not_found = document.querySelector(".location-not-found");
const welcome = document.querySelector(".welcome-message");
const weather_body = document.querySelector(".weather-body");
//new
const Get_Weather = async (city) => {
  const api_key = "fd78751a8f701bb096f5af9cfabcd9b6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  console.log("run");
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "/images/cloud.png";
      break;
    case "Clear":
      weather_img.src = "/images/clear.png";
      break;
    case "overcast clouds":
      weather_img.src = "/images/rain.png";
      break;
    case "Mist":
      weather_img.src = "/images/mist.png";
      break;
    case "Snow":
      weather_img.src = "/images/snow.png";
      break;
  }

  console.log(weather_data);
};

searchBtn.addEventListener("click", () => {
  Get_Weather(inputBox.value);
  welcome.style.display = "none";
});

const reset_fxn = () => {
  reset_btn = window.location.reload();
};
