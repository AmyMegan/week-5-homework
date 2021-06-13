import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°C`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°C`;
    }

    function day() {
        let date = new Date(props.date.dt * 1000);
        let day = date.getDay();

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        return day;
    }

    return (
        <div> 
        <div className="Forcast-Day"> {day} </div>
          <div className="Forecast-Temps"></div>
          <WeatherIcon code={props.data.weather[0].icon} size={80} />
          <div className="Forecast-Max">{maxTemperature()}</div>
          <div className="Forecast-Min">{minTemperature()}</div>
          
          </div>
    )
}