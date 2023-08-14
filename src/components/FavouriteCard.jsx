/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FavouriteCard = ({ game }) => {
  return (
    <div className="max-w-md mx-auto bg-[#32383e] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ">
      <div className="relative h-48">
        <img
          className="object-cover w-full h-full "
          src={game.thumbnail}
          alt="Image"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <Link to={`/game/${game.id}`}>
            <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded transition-colors hover:bg-blue-400 ">
              See More...
            </button>
          </Link>
          <button className="p-1  rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z" />
            </svg>
          </button>
        </div>
        <h2 className="mt-2 text-lg font-semibold text-gray-200">
          {game.title}
        </h2>
        <p className="mt-1 text-md text-gray-300 line-clamp-2">
          {game.short_description}
        </p>
      </div>
    </div>
  );
};

export default FavouriteCard;
