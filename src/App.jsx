import "./App.css";
import Index from "./components/Index";
import WeatherDetail from "./components/WeatherDetail";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import FavoriteLocation from "./components/FavoriteLocation"; // Corrected import
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <div className="mx-auto sm:px-6 lg:px-8 grow items-start w-full max-w-5xl">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/weather/:id" element={<WeatherDetail />} />
          <Route path="/favorites" element={<FavoriteLocation />} /> {/* Added route for FavoriteLocations */}
        </Routes>
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;
