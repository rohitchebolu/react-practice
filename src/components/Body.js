import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  return filterOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          id="input"
          placeholder="search"
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
      <div className="filter-btn">
        <button
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
      <div className="res-container">
        {filterOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
