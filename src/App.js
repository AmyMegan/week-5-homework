import React from "react";
import axios from "axios";
import './App.css';

export default function App() {
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
        Location Here
      </h2>
      <h4>
        Time Here (GMT)
      </h4>
       <h1 className="current-weather-data-here">
         Current Weather Here
       </h1>
       <ul>
         <li className="humidity">
         <img src="https://www.svgrepo.com/show/26690/humidity.svg" alt="weather icon"></img> 
         </li>
         <p className="wind-tag"> 12</p>
         <li className="wind">
         <img src="https://www.svgrepo.com/show/87983/wind.svg" alt="weather icon"></img> 
         </li>
         <p className="humidity-tag"> 3 </p>
       </ul>
       
       <img src="/" className="img-thumbnail" alt="weather icon" ></img> 
       <img src="/" className="img-thumbnail" alt="weather icon" ></img> 
       <img src="/" className="img-thumbnail" alt="weather icon" ></img> 
      
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
}


