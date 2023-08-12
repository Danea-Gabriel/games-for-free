import { useQuery } from "react-query";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": "3d1af37892mshf71149fdfd099b6p17c69ajsn20ae0a63dcec",
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
