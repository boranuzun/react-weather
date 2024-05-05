/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import NoFavoriteFound from "./NoFavoriteFound";

const FavoriteLocations = () => {
  const [favoriteLocations, setFavoriteLocations] = useState([]);

  useEffect(() => {
    const storedFavoriteLocations =
      JSON.parse(localStorage.getItem("favoriteLocations")) || [];
    setFavoriteLocations(storedFavoriteLocations);
  }, []);

  const handleDeleteLocation = (locationToDelete) => {
    const updatedLocations = favoriteLocations.filter(
      (location) => location !== locationToDelete
    );
    setFavoriteLocations(updatedLocations);
    localStorage.setItem("favoriteLocations", JSON.stringify(updatedLocations));
  };

  return (
    <>
      {favoriteLocations.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteLocations.map((favorite, index) => (
            <WeatherCard
              key={index}
              location={favorite}
              onDelete={handleDeleteLocation}
            />
          ))}
        </div>
      ) : (
        <NoFavoriteFound />
      )}
    </>
  );
};

export default FavoriteLocations;
