const ItemsList = ({ resList }) => {
  return (
    <div>
      {resList.map((items) => (
        <div
          className="p-6 m-2 flex justify-between border-b-2 border-gray-300 pb-2"
          key={items.card?.info?.id}
        >
          <div>
            <h3 className="font-medium">{items.card?.info?.name}</h3>
            <p>
              ₹
              {items.card?.info?.price
                ? items.card?.info?.price / 100
                : items.card?.info?.defaultPrice / 100}
            </p>
          </div>
          <div>
            <button className="text-green-500 relative border border-gray-300 shadow-md rounded-md px-6 py-1 font-semibold">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
