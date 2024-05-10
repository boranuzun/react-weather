import { Link } from "react-router-dom";
import { WiDayCloudy } from "react-icons/wi";

const SiteHeader = () => {
  return (
    <>
      <header className="bg-weather-primary bg-opacity-30 shadow-lg text-white py-4 px-6">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <WiDayCloudy className="text-3xl mr-2" />
              <h1 className="text-2xl font-bold">Weather App</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/favorites"
                className="text-base inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Favorites
              </Link>
              <Link
                to="/settings"
                className="text-base inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Settings
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
