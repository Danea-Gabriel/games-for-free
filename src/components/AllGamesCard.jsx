/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const AllGamesCard = ({ game, user, favouriteGames }) => {
  // Gave up on trying to get this to work with react-query-firebase
  const ref = doc(firestore, "users", user?.data?.email);
  const handleFavourite = async () => {
    if (
      favouriteGames &&
      favouriteGames.some(favGame => favGame.id === game.id)
    ) {
      console.log("Already in favourites");
      return null;
    }
    await updateDoc(ref, {
      favourites: arrayUnion({
        id: game.id,
        title: game.title,
        thumbnail: game.thumbnail,
        short_description: game.short_description,
        game_url: game.game_url,
      }),
    });
  };
  return (
    <div className="max-w-md mx-auto bg-[#32383e] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ">
      <div className="relative h-48">
        <img
          className="object-cover w-full h-full "
          src={game.thumbnail}
          alt="Image"
        />

        <div className="absolute bottom-2 left-2">
          <button className="p-1 " onClick={handleFavourite}>
            {favouriteGames &&
            favouriteGames.some(favGame => favGame.id === game.id) ? (
              <FiHeart size={25} style={{ fill: "red" }} />
            ) : (
              <FiHeart size={25} />
            )}
          </button>
        </div>
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

export default AllGamesCard;
