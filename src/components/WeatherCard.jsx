/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";

import { fetchWeatherData } from "../utils/weatherAPI.js";

const WeatherCard = ({ location, onDelete }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState("");
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("OpenWeatherMap API key not found!");
      return;
    }

    const favoriteLocations =
      JSON.parse(localStorage.getItem("favoriteLocations")) || [];
    const storedLocation = favoriteLocations.find(
      (loc) =>
        loc.latitude === location.latitude &&
        loc.longitude === location.longitude
    );
    if (storedLocation) {
      setLocationName(storedLocation.name);
    }

    fetchWeatherData(location.latitude, location.longitude, apiKey).then(
      (data) => {
        setWeatherData(data);
      }
    );
  }, [apiKey, location.latitude, location.longitude]);

  const deleteCard = () => {
    onDelete(location);
  };

  return (
    <>
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-md relative shadow-lg">
        <Link
          to={`/weather/${locationName}?lat=${location.latitude}&lon=${location.longitude}`}
          className="absolute top-0 left-0 right-0 bottom-0"
        ></Link>
        <button
          onClick={deleteCard}
          className="absolute top-0 right-0 p-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="font-bold text-xl">{locationName}</div>
        <div className="text-sm text-gray-500">
          {weatherData &&
            moment()
              .tz(weatherData.timezone)
              .format("dddd, D MMMM YYYY, HH:mm")}
        </div>
        <div className="flex items-center justify-center mt-2">
          {weatherData && (
            <img
              className="h-32 w-32 fill-current"
              src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
              alt=""
            />
          )}
          {weatherData && (
            <div className="ml-4">
              <div className="font-medium text-3xl">
                {Math.round(weatherData.current.temp)}°C
              </div>
              <div className="text-sm text-gray-500">
                {weatherData.current.weather[0].description}
              </div>
            </div>
          )}
        </div>
        {weatherData && (
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">High</div>
              <div className="text-sm text-gray-500">
                {weatherData.daily[0].temp.max}°C
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Low</div>
              <div className="text-sm text-gray-500">
                {weatherData.daily[0].temp.min}°C
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">
                {weatherData.current.wind_speed} km/h
              </div>
            </div>
          </div>
        )}
        {weatherData && (
          <div className="flex justify-between mt-2">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">
                {weatherData.current.humidity}%
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">
                {weatherData.current.visibility} km
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
