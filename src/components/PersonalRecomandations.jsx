import PersonalCard from "./PersonalCard";
import { useGames } from "../hooks/useGames";
import RecentlyAddedCard from "./RecentlyAddedCard";
const PersonalRecomandations = () => {
  const { data: games, isLoading, isError } = useGames();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching Recomandations</div>;
  return (
    <div className=" dark:bg-gray-900 w-full overflow-auto">
      <div className=" mt-4 text-white dark:bg-gray-800 border-secondary rounded-2xl shadow-xl bg-primary px-2 max-w-[1140px] w-full mx-auto">
        <h2 className="text-4xl font-bold dark:text-gray-400">
          Personalized Recomandations
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {games.slice(0, 3).map(game => (
            <PersonalCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      <div className=" mt-4 text-white dark:bg-gray-800 border-secondary rounded-2xl shadow-xl bg-primary px-2 max-w-[1140px] w-full mx-auto flex">
        <div className="text-white dark:bg-gray-800 border-secondary rounded-2xl  bg-primary px-2 max-w-[1140px] w-full mx-auto ">
          <h2 className="text-4xl my-4 font-bold dark:text-gray-400">
            Recently Added
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {games.slice(0, 14).map(game => (
              <RecentlyAddedCard key={game.id} game={game} />
            ))}
          </div>
          <button
            type="button"
            className="my-4  text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            More Games
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalRecomandations;
