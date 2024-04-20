import "./App.css";
import Index from "./components/Index";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-col min-h-screen">
        <div className="mx-auto sm:px-6 lg:px-8 grow items-start w-full max-w-5xl">
          <Index />
          <WeatherCard />
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

export default App;
