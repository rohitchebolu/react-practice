import ItemsList from "./ItemsList.js";

const RestaurantCategory = ({ resMenu, showItems, setShowIndex }) => {
  //console.log(resMenu);
  //const itemsList = resMenu?.itemCards;
  const handleInput = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="flex justify-between p-4 m-2 bg-gray-50 shadow-lg cursor-pointer"
        onClick={() => {
          handleInput();
        }}
      >
        <h1 className="font-bold">
          {resMenu.title} ({resMenu.itemCards.length})
        </h1>
        <p>🔽</p>
      </div>
      {showItems && <ItemsList resList={resMenu.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
