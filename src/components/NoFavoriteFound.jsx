import { Link } from "react-router-dom";

const NoFavoriteFound = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center px-6 py-24 sm:py-32 lg:px-8 h-[calc(100vh-145px)]">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            No favorite location found
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NoFavoriteFound;
