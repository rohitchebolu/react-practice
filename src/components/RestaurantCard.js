import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
  } = resData?.info;

  return (
    <div className="m-2 p-6 w-[230] bg-orange-200 hover:bg-orange-300">
      <img
        className="w-[200] h-[180] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const {header,subHeader} = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative flex flex-col items-center">
        <label className="absolute font-bold text-center py-2">{header + " " +subHeader}</label>        
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;
