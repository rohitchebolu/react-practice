import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL  + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>
        {avgRating}* {resData.info.sla.deliveryTime}mins
      </p>
    </div>
  );
};

export default RestaurantCard;
