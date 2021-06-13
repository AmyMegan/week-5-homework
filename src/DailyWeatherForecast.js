import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function DailyWeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
     
    let apiKey: "7a56de110c21e2a9b823cd23ef62bce1";
    let longitude = props.coordinates.lon;
    let latitude =  props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=7a56de110c21e2a9b823cd23ef62bce1`;
     
    axios.get(apiURL).then(handleResponse);

   return (
       <div className="DailyWeatherForcast">
        <div className="row">
        <div className="col">
         <div className="Forcast-Day">Thursday</div>
         <WeatherIcon code="01d" size={150} />
         <div className="Forecast-Temps">
         <span className="Forecast-Max">20°C</span> {" "}
         <span className="Forecast-Min">10°C</span>
         </div>
        </div>
        </div>
       </div>
   ) 
}



