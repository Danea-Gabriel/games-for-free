import { useParams } from "react-router-dom";
import { useGameById } from "../hooks/useGameById";
const GamePage = () => {
  const params = useParams();
  const { data: game, isLoading, isError } = useGameById(params.id);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching Game</div>;

  return (
    <div className="dark:bg-gray-900 h-screen flex justify-center items-center text-white">
      <div className="  rounded-lg shadow-2xl p-6 bg-[#32383e] max-w-[1140px]">
        <img
          className="mb-4 rounded-lg"
          src={game.thumbnail}
          alt={game.title}
        />
        <h1 className="text-2xl font-semibold mb-2">Call of Duty: Warzone</h1>
        <p className=" mb-4">{game.short_description}</p>
        <p className="mb-4">{game.status}</p>
        <h2 className="text-lg font-semibold mb-2">Description:</h2>
        <p className="mb-4">{game.description}</p>
        <a href="https://www.freetogame.com/open/call-of-duty-warzone">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Play Now
            </span>
          </button>
        </a>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">
            Minimum System Requirements:
          </h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>OS: {game.minimum_system_requirements.os}</li>
            <li>Processor: {game.minimum_system_requirements.processor}</li>
            <li>Memory: {game.minimum_system_requirements.memory}</li>
            <li>Graphics: {game.minimum_system_requirements.graphics}</li>
            <li>Storage: {game.minimum_system_requirements.storage}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Screenshots:</h2>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
