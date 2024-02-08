import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showIndex, SetShowIndex] = useState(null);
  //console.log(showIndex);
  if (resInfo === null) return <Shimmer />;
  //console.log(resInfo);
  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  //console.log(itemCards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="mx-auto w-6/12 items-center ">
      <div className="flex justify-between py-2 border-b-2 border-gray-300 pb-2">
        <div>
          <h1 className="font-bold text-lg">{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p className="mb-2">{areaName}</p>
          <h3 className="font-bold py-2">{costForTwoMessage}</h3>
        </div>
        <div>
          <h3 className="font-bold text-lg">❇️ {avgRating}</h3>
          <p className="font-thin text-xs">{totalRatingsString}</p>
        </div>
      </div>
      {categories.map((res, index) => (
        <RestaurantCategory
          resMenu={res?.card?.card}
          key={res?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => SetShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
