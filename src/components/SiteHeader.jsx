import { Link } from "react-router-dom";
import { WiDayCloudy } from "react-icons/wi";

const SiteHeader = () => {
  return (
    <header className="bg-weather-primary bg-opacity-30 shadow-lg">
      <nav className="max-w-7xl mx-auto p-6 flex flex-row items-center justify-between text-white">
        <Link to="/" className="flex items-center gap-3">
          <p className="text-3xl">
            <WiDayCloudy />
          </p>
          <p className="text-2xl font-semibold">React Weather</p>
        </Link>
        <Link
          to="/favorites"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default SiteHeader;
