import { useQuery } from "react-query";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

const fetchGames = async () => {
  const response = await axios.request(options);
  const data = await response.data;
  return data;
};

export const useGames = () => {
  return useQuery("games", fetchGames);
};
