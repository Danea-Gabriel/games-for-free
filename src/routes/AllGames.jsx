import AllGamesCard from "../components/AllGamesCard";
import { useGames } from "../hooks/useGames";
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import { useNavigate } from "react-router-dom";

const AllGames = () => {
  const { data: games, isLoading, isError } = useGames();
  const [searchTerm, setSearchTerm] = useState("");
  const [favouriteGames, setFavouriteGames] = useState([]);
  const user = useAuthUser(["user"], auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.data?.email) {
      onSnapshot(doc(firestore, "users", `${user?.data?.email}`), doc => {
        setFavouriteGames(doc.data()?.favourites);
      });
    } else {
      navigate("/signin");
    }
  }, [user?.data?.email]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching Games</div>;

  return (
    <div className="dark:bg-gray-900 w-full overflow-auto min-h-screen">
      <form className="max-w-[1140px] w-full mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-lg dark:text-gray-300 border  rounded-2xl   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500  !important dark:focus:border-gray-500 "
            placeholder="Search for games"
          />
        </div>
      </form>
      <div className=" mt-4 text-white dark:bg-gray-800 border-secondary rounded-2xl shadow-xl bg-primary px-2 max-w-[1140px] w-full mx-auto">
        <div className=" grid md:grid-cols-3 gap-4 ">
          {user?.data?.email &&
            games
              .filter(game => {
                if (searchTerm === "") {
                  return game;
                } else if (
                  game.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return game;
                }
              })
              .map(game => (
                <AllGamesCard
                  key={game.id}
                  game={game}
                  user={user}
                  favouriteGames={favouriteGames.length > 0 && favouriteGames}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default AllGames;
