import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
        <div className="search-bar">
          <input id="input" placeholder="search"></input>
          <button
            onClick={() => {
              let inputValue = document.getElementById("input").value;
              console.log(inputValue);
              const filteredRes = listOfRestaurant.filter((res) => {
                const restaurantName = res.info.name.toLowerCase();
                const inputLowerCase = inputValue.toLowerCase();

                // Check if the restaurant name contains the sequence of alphabets entered
                return restaurantName.includes(inputLowerCase);
              });

              setListOfRestaurant(filteredRes);
            }}
          >
            enter
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
