# React Weather App

This project is a weather application built with React and Vite. It uses the OpenWeatherMap API to fetch weather data and Open-Meteo's Geocoding API. The application displays information for various cities and includes additional features such as the ability to add cities to favorites and configure application settings.

> **Note:** Make sure to configure your API keys properly in the `.env` file to ensure the application works correctly.

## Project Structure

The project is structured as follows:

- `App.jsx`: The root component of the application. It defines the routes for the different pages of the application.
- `components/`: This folder contains all the React components used in the application.
  - `Index.jsx`: The home page of the application.
  - `WeatherDetail.jsx`: The weather detail page for a specific city.
  - `SiteFooter.jsx`: The footer of the application.
  - `SiteHeader.jsx`: The header of the application.
  - `FavoriteLocation.jsx`: The page that displays the user's favorite cities.
  - `Settings.jsx`: The settings page of the application.

## Configuration

To configure the application, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install` in the project directory.
3. Create a `.env` file at the root of the project and add your OpenWeatherMap API key as follows:

```bash
VITE_OPENWEATHERMAP_API_KEY=your_api_key
```

4. Start the application by running `npm run dev`. The application should now be accessible at `http://localhost:5173`.

