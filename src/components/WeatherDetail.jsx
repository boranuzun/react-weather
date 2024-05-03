import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const WeatherDetail = () => {
  // Get the OpenWeatherMap API key from the environment variables
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  const [weatherData, setWeatherData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get("lat");
  const longitude = queryParams.get("lon");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("weatherData: ", data);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      });
  }, [apiKey, latitude, longitude]);

  return (
    <>
      <h1>Weather Detail for ID: {id}</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>

      {weatherData && (
        <div>
          <p>Current Temperature: {weatherData.current.temp}°C</p>
          {/* Display other weather information as needed */}
        </div>
      )}
    </>
  );
};

export default WeatherDetail;
