import React from "react";
import DateFormatted from "./DateFormatted";


export default function WeatherInfo(props) {
    return ( <div className="Weather-Info"> 
    <h2>
        {props.data.city}
        </h2>
        <h4>
          <DateFormatted date={props.data.date} />
        </h4>
        
         <h1 className="current-weather-data-here">
           {props.data.iconUrl} {Math.round(props.data.temperature)}°c
           <p className="current-weather-data-information"> 
             {props.data.description}
           </p>
         </h1>
         <ul>
         <p className="humidity-tag"> 
         {(props.data.humidity)} %
         </p>
           <li className="humidity"> 
           <img src="https://www.svgrepo.com/show/26690/humidity.svg" alt="weather icon"></img>
           </li>
           <li className="wind">
           <img src="https://www.svgrepo.com/show/87983/wind.svg" alt="weather icon"></img>
           <p className="wind-tag"> {(props.data.wind)} MPH</p>
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
        )};