import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import './App.css';

export default function App(props) {
  const[weatherData, setWeatherData] = useState({ready: false});
  const[city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: false,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    
  }

function handleSubmit(event) {
  event.preventDefault();
}


function handleCityChange(event){
setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className="App">
          <div className="container">
            <App defaultCity="New York"/>
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
        <WeatherInfo data={weatherData}/>
          </div>
      </div>
    );

  } else {
    const apiKey = "7a56de110c21e2a9b823cd23ef62bce1";
    let city = "London"
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse);
  }
return "Loading..."
}


