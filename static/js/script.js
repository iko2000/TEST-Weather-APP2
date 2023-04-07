"use strict";

const cityName = document.querySelector("#city-d");
const temperature = document.querySelector("#temp-d");
const windSpeed = document.querySelector("#wind-d");
const citySearch = document.querySelector("#city-input");
const searchButton = document.querySelector("#btn");
const description = document.querySelector("#des-d");
const windDiv = document.querySelector(".wind");
const desDiv = document.querySelector(".des");
const tempDiv = document.querySelector(".temp");
const cityDiv = document.querySelector(".city");

const getWeatherData = function (city) {
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then(function (data) {
      console.log(data);
      cityName.textContent = city;
      temperature.textContent = `Temperature: ${data.temperature}`;
      windSpeed.textContent = `Wind Speed: ${data.wind}`;
      description.textContent = data.description;

      console.log(data.temperature);
      const tempString = data.temperature;
      const tempNum = data.temperature.slice(0, -3);
      console.log(data.temperature);
      console.log(tempNum);

      if (tempNum > 10) {
        if (tempDiv.className === "cold" || "temp") {
          tempDiv.classList.remove("cold");
          tempDiv.classList.add("sunny");
        }
        console.log("sunny");
        console.log(tempDiv.className);
      } else {
        if (tempDiv.classList === "sunny" || "temp") {
          tempDiv.classList.remove("sunny");
          tempDiv.classList.add("cold");
        }
        console.log("cold");
        console.log(tempDiv.className);
      }
    })
    .catch((error) => alert(error.message));
};

searchButton.addEventListener("click", function () {
  getWeatherData(`${citySearch.value}`);

  console.log(citySearch.value);

  windDiv.classList.add("visible");
  desDiv.classList.add("visible");
  cityDiv.classList.add("visible");
});
