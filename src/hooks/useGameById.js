import { useQuery } from "react-query";
import axios from "axios";

const fetchGameById = async id => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id },
    headers: {
      "X-RapidAPI-Key": "3d1af37892mshf71149fdfd099b6p17c69ajsn20ae0a63dcec",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export const useGameById = id => {
  return useQuery(["game", id], () => fetchGameById(id));
};
