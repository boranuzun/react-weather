import moment from 'moment';
import { WiCloud } from "react-icons/wi";

const WeatherCard = () => {
  const currentDate = moment().format("dddd D MMMM YYYY");

  const deleteCard = () => {
    // Function to delete the card
    console.log("Card deleted");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs relative">
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
          <div className="font-bold text-xl">Carouge</div>
          <div className="text-sm text-gray-500">{currentDate}</div>
          <WiCloud className="mt-6 text-9xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24" />
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">24°</div>
            <div className="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">28°C</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">20°C</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">9k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">68%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
