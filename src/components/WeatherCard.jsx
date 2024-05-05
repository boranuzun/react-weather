/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import moment from "moment";
import { WiCloud } from "react-icons/wi";

const WeatherCard = ({ location, onDelete }) => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);

  // Get the OpenWeatherMap API key from the environment variables
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  // Fetch weather data when component mounts or location changes
  useEffect(() => {
    if (!apiKey) {
      console.error("OpenWeatherMap API key not found!");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      });
  }, [apiKey, location.latitude, location.longitude]);

  // Function to handle card deletion
  const deleteCard = () => {
    onDelete(location);
  };

  // Render the WeatherCard component
  return (
    <>
      <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs relative shadow-lg">
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
        <div className="font-bold text-xl">Name</div>
        <div className="text-sm text-gray-500">
          {moment().format("dddd, D MMMM YYYY")}
        </div>
        <div className="flex items-center justify-center mt-2">
          <WiCloud className="text-indigo-400 h-16 w-16" />
          {weatherData && (
            <div className="ml-4">
              <div className="font-medium text-3xl">
                {weatherData.current.temp}°C
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
