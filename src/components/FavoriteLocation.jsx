/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import NoFavoriteFound from "./NoFavoriteFound";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaFilter } from "react-icons/fa6";

const FavoriteLocations = () => {
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  const [sortOrder, setSortOrder] = useState("added");

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

  const sortByName = () => {
    const sortedLocations = [...favoriteLocations].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFavoriteLocations(sortedLocations);
    setSortOrder("name");
  };

  const sortByAddedOrder = () => {
    const storedFavoriteLocations =
      JSON.parse(localStorage.getItem("favoriteLocations")) || [];
    setFavoriteLocations(storedFavoriteLocations);
    setSortOrder("added");
  };

  return (
    <>
      <div className="flex mt-6 justify-end z-10">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 outline-dashed">
            <FaFilter className="hover:text-teal-500" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="mt-2 w-52 origin-top-right rounded-xl border bg-gray-200 p-1 text-sm/6 text-black shadow-xl"
            >
              <MenuItem>
                <button
                  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80"
                  onClick={sortByName}
                >
                  Name
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/80"
                  onClick={sortByAddedOrder}
                >
                  Added Order
                </button>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      {favoriteLocations.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteLocations.map((favorite, index) => (
            <WeatherCard
              key={index}
              location={favorite}
              onDelete={handleDeleteLocation}
              className="z-0"
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
