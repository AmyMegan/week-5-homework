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
        <WeatherIcon code={props.data.icon} size={90} />
        </div>
         <h1 className="current-weather-data-here">
          {Math.round(props.data.temperature)}°c
           <p className="current-weather-data-information"> 
           {props.data.description}
           </p>
         </h1>
         <ul>
           <li className="humidity"> 
           <img src="https://www.svgrepo.com/show/26690/humidity.svg" alt="weather icon"></img>
           </li>
           <p className="humidity-tag"> 
         {(props.data.humidity)} %
         </p>
           <li className="wind">
           <img src="https://www.svgrepo.com/show/87983/wind.svg" alt="weather icon"></img>
           <p className="wind-tag"> {(props.data.wind)} MPH</p>
           </li>

         </ul>
        
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
        )};