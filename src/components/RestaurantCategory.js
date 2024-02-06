import { useState } from "react";
import ItemsList from "./ItemsList.js";

const RestaurantCategory = ({ resMenu }) => {
  const [showItems, setShowItems] = useState(false);
  //console.log(resMenu);
  //const itemsList = resMenu?.itemCards;
  const handleInput = ()=>{
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="flex justify-between p-4 m-2 bg-gray-50 shadow-lg">
        <h1 className="font-bold cursor-pointer"  onClick={()=>{handleInput()}}>
          {resMenu.title} ({resMenu.itemCards.length})
        </h1>
        <p>🔽</p>
      </div>
      {showItems && <ItemsList resList={resMenu.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
