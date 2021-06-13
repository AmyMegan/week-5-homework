import React, { useState } from "react";

import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyWeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecasteData, setForecaste] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecaste(response.data.daily);
        setLoaded(true);
    }
     
    if (loaded) {
        return (
        <div className="DailyWeatherForcast">
         <div className="row">
         <div className="col">
          <WeatherForecastDay data={forecasteData[0]}/>
         </div>
         </div>
        </div>
        );
    } else { 
    let apiKey: "7a56de110c21e2a9b823cd23ef62bce1";
    let longitude = props.coordinates.lon;
    let latitude =  props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=7a56de110c21e2a9b823cd23ef62bce1`;

    axios.get(apiURL).then(handleResponse);
    return null
}

}