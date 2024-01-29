import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {id} = useParams();
  
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>,<p>{costForTwoMessage}</p>
      <h2>Menu</h2>,
      <ul>
        {itemCards.map((res) => ( 
          <li key={res.card.info.id}>
            {res.card.info.name} - Rs {res.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
