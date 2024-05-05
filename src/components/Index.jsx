import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&language=en&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
          setSearchError(false);
          console.log("fetchGeocodes: ", data);
        })
        .catch((error) => {
          setSearchResults(null);
          setSearchError(true);
          console.warn("Error - fetchGeocodes: ", error);
        });
    } else {
      setSearchResults(null);
      setSearchError(false);
    }
  }, [searchQuery]);

  return (
    <form className="mt-20 mx-2">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for a city or state"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="bg-weather-primary bg-opacity-70 text-white w-full rounded-md shadow-md top-[66px] my-2">
        {searchError && (
          <p className="py-2">Sorry, something went wrong, please try again.</p>
        )}
        {!searchError && searchResults && searchResults.length === 0 && (
          <p className="py-2">
            No results match your query, try a different term.
          </p>
        )}
        {!searchError &&
          searchResults &&
          searchResults.length > 0 &&
          searchResults.map((searchResult) => (
            <Link
              key={searchResult.id}
              to={{
                pathname: `/weather/${searchResult.id}`,
                search: `?city=${searchResult.name}&lat=${searchResult.latitude}&lon=${searchResult.longitude}`
              }}
            >
              <li className="py-3 px-4 cursor-pointer hover:bg-weather-secondary active:text-purple-300 active:ease-in-out active:duration-150 rounded-md">
                {searchResult.admin1 ? (
                  <span>
                    {searchResult.name}, {searchResult.admin1},{" "}
                    {searchResult.country}
                  </span>
                ) : (
                  <span>
                    {searchResult.name}, {searchResult.country}
                  </span>
                )}
              </li>
            </Link>
          ))}
      </ul>
    </form>
  );
};

export default Index;
