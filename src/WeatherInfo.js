import React from "react";
import DateFormatted from './dateFormatted';
import WeatherIcon from './WeatherIcon';


export default function WeatherInfo(props) {
    return ( <div className="Weather-Info"> 
    <h2>
        {props.data.city}
        </h2>
        <h4>
          <DateFormatted date={props.data.date} />
        </h4>
        <div className="float-left">
        <WeatherIcon code={props.data.icon} size={290} />
        </div>
         <h1 className="current-weather-data-here">
          {Math.round(props.data.temperature)}°c
           <p className="current-weather-data-information"> 
           {props.data.description}
           </p>
         </h1>
           <p className="humidity-tag"> 
           Humidity: {(props.data.humidity)} %
         </p>
           <p className="wind-tag"> 
           Wind: {(props.data.wind)} MPH 
           </p>
        
         <br />
         <br />
          </div>
        )};