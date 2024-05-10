export const fetchWeatherData = async (latitude, longitude, apiKey) => {
  try {
    const response = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      if (
        response.status === 401 || // Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."
        response.status === 404 || // Not found. Please see https://openweathermap.org/faq#error404 for more info."
        response.status === 429 // Your account is temporary blocked due to exceeding of requests limitation of your subscription type. Please choose the proper subscription http://openweathermap.org/price"
      ) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      } else {
        throw new Error("Failed to fetch weather data");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    console.error("API key: ", apiKey);
    return null;
  }
};
