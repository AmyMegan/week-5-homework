import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import DailyWeatherForecast from "./DailyWeatherForecast";
import weatherIcon from "./WeatherIcon"
import "./App.css";
export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon, 
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    
  }
function search() {
  const apiKey = "7a56de110c21e2a9b823cd23ef62bce1";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeHolder="Enter City"
              autoFocus="on"
              size="50"
              px
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-info">
              🔎
            </button>
            <button type="button" class="btn btn-light">
              📍
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <DailyWeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    
  }
  search();
  return "Loading...";
}
