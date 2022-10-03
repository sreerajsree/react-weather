import React, { useState } from "react";
import axios from "axios";

function App() {
  const API_KEY = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Bangalore</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 F</p>
          </div>
          <div className="humidity">
            <p>df</p>
          </div>
          <div className="wind">
            <p>60 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
