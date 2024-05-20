import React, { useState, useEffect } from "react";
const key = "f9eb269c3080314aa6bfbde4be5ee5ff";

const Weather = ({ cities }) => {
  const [weatherData, setWeatherData] = useState(null);

  const [city, setCity] = useState("Hyderabad");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }, [city]);

  return (
    <div>
      <h1>select City</h1>
      {cities && (
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          {cities?.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
      {loading || !weatherData ? (
        <p>loading...</p>
      ) : (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {(weatherData?.main.temp - 273.15)?.toFixed(2)} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
