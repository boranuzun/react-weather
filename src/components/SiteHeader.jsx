import { WiDayCloudy } from "react-icons/wi";

const SiteHeader = () => {
  return (
    <>
      <header className="bg-weather-primary bg-opacity-30 shadow-lg">
        <nav className="max-w-7xl mx-auto p-6 flex flex-row items-center gap-4 text-white">
          <a href="/" className="flex items-center gap-3">
            <p className="text-3xl">
              <WiDayCloudy />
            </p>
            <p className="text-2xl font-semibold">React Weather</p>
          </a>
        </nav>
      </header>
    </>
  );
};

export default SiteHeader;
