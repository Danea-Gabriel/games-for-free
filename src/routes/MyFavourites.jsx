import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import FavouriteCard from "../components/FavouriteCard";
const MyFavourites = () => {
  const [favouriteGames, setFavouriteGames] = useState([]);
  const user = useAuthUser(["user"], auth);
  useEffect(() => {
    if (user?.data?.email) {
      onSnapshot(doc(firestore, "users", `${user?.data?.email}`), doc => {
        setFavouriteGames(doc.data()?.favourites);
      });
    }
  }, [user?.data?.email]);
  return (
    <div className="dark:bg-gray-900 w-full overflow-auto min-h-screen">
      <div className=" mt-4 text-white dark:bg-gray-800 border-secondary rounded-2xl shadow-xl bg-primary px-2 max-w-[1140px] w-full mx-auto">
        <div className=" grid md:grid-cols-3 gap-4 ">
          {user &&
            user.data?.email &&
            favouriteGames?.map(game => (
              <FavouriteCard
                key={game.id}
                game={game}
                user={user}
                favouriteGames={favouriteGames}
              />
            ))}
          {/* Games Cards here */}
        </div>
      </div>
    </div>
  );
};

export default MyFavourites;
