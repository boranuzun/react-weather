export const fetchWeatherData = async (latitude, longitude, apiKey) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      return null;
    }
  };
  