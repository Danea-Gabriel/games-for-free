import { useQuery } from "react-query";
import axios from "axios";

const fetchGameById = async id => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export const useGameById = id => {
  return useQuery(["game", id], () => fetchGameById(id));
};
