import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6b001d11e00d46d8530ddcc3aa5e9103`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  const tempData = ((data.main.temp.toFixed() - 32)*5/9);
  const feelsLike = ((data.main.feels_like.toFixed() - 32)*5/9);

  return (
    <div className="app">
      <div className="banner">
        Made with <a href="https://reactjs.org/">React JS</a> &{" "}
        <a href="https://openweathermap.org/api">OpenWeather Map API</a> by{" "}
        <a href="https://sreerajsree.vercel.app/">Sreeraj S</a>
      </div>
      <div className="container">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyPress={searchLocation}
          />
        </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{tempData.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            {data.weather ? (
              <span className="text-sm">{data.weather[0].description}</span>
            ) : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{feelsLike.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
              <p>Wind</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
