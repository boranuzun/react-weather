import "./App.css";
import Index from "./components/Index";
import WeatherDetail from "./components/WeatherDetail";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { Routes, Route, useLocation } from "react-router-dom";
import WeatherCard from "./components/WeatherCard";

function App() {
  const location = useLocation();
  const isWeatherDetailPage = location.pathname.includes("/weather/");

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <div className="mx-auto sm:px-6 lg:px-8 grow items-start w-full max-w-5xl">
          <>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/weather/:id" element={<WeatherDetail />} />
            </Routes>
          </>
        </div>
        {!isWeatherDetailPage && <WeatherCard />}
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
