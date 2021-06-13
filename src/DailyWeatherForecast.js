import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function DailyWeatherForecast() {
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



