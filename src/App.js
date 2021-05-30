import React, { useState } from "react";
import axios from 'axios';
import './App.css';

export default function App() {
  const[weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",    
      city: response.data.name,
      date: "Sunday 9:40pm"
    });
    
  }
  if (weatherData.ready) {
    return (
      <div className="App">
          <div className="container">
        <form>
          <input
            type="text"
            placeHolder="Enter City"
            autoFocus="on"
            size="50"
            px
          />
          <button type="submit" className="btn btn-info">
            🔎
          </button>
          <button type="button" class="btn btn-light">
            📍
          </button>
        </form>
        <h2>
        {weatherData.city}
        </h2>
        <h4>
          {weatherData.date}
        </h4>
         <h1 className="current-weather-data-here">
           {weatherData.iconUrl} {Math.round(weatherData.temperature)}°c
           <p className="current-weather-data-information"> 
               {weatherData.description}
           </p>
         </h1>
         <ul>
         <p className="humidity-tag"> 
         {(weatherData.humidity)} %
         </p>
           <li className="humidity"> 
           <img src="https://www.svgrepo.com/show/26690/humidity.svg" alt="weather icon"></img>
           </li>
           <li className="wind">
           <img src="https://www.svgrepo.com/show/87983/wind.svg" alt="weather icon"></img>
           <p className="wind-tag"> {(weatherData.wind)} MPH</p>
           </li>

         </ul>
         
         <img src="http://openweathermap.org/img/wn/01d@2x.png" className="img-thumbnail" alt="weather icon" ></img> 
         <img src="http://openweathermap.org/img/wn/02n@2x.png" className="img-thumbnail" alt="weather icon" ></img> 
         <img src="http://openweathermap.org/img/wn/10d@2x.png" className="img-thumbnail" alt="weather icon" ></img> 
        
         <br />
         <footer>
            This was coded by <a 
            href = "https://www.linkedin.com/in/amy-costall-a1ba46131/"
            rel="noreferrer"
            target="_blank"> 
            Amy Megan 
            </a>
            {" "} and is {" "}
          <a 
          href="https://github.com/AmyMegan"
          rel="noreferrer"
          target="_blank"> 
          open-sourced
          </a> 
          </footer>
          </div>
      </div>
    );

  } else {
    const apiKey = "7a56de110c21e2a9b823cd23ef62bce1";
    let city = "New York"
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse);
  }
return "Loading..."
}


