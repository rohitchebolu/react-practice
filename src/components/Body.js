import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterOfRestaurant, setFilterOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //console.log(listOfRestaurant);
  const{logedInUser, setUserName}=useContext(UserContext);
  const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);

  const statusMessage = useOnlineStatus();
  if (statusMessage === false)
    return <h1>You're Offline Please Check Your Network !!!</h1>;
  //conditional rendering
  return filterOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between items-center">
        <div className="search m-2 p-2 ">
          <input
            id="input"
            className="border border-solid border-orange-300 w-80 placeholder-black"
            placeholder="     Find your favourite"
            onInput={(event) => {
              let inputValue = event.target.value;
              console.log(inputValue);
              const filteredRes = listOfRestaurant.filter((res) => {
                const restaurantName = res.info.name.toLowerCase();
                const inputLowerCase = inputValue.toLowerCase();

                // Check if the restaurant name contains the sequence of alphabets entered
                return restaurantName.includes(inputLowerCase);
              });

              setFilterOfRestaurant(filteredRes);
            }}
          />
        </div>
        <div className="m-2 p-2 flex">
          <button
            className="py-2 px-4 bg-orange-300 rounded-lg font-bold"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilterOfRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="m-2 p-2 flex">
          <label>UserName    </label>
          <input className="border border-solid border-orange-300 p-1" value={logedInUser} onInput={(e)=>{setUserName(e.target.value)}}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithDiscount resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
