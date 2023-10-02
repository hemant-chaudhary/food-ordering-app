import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo/100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default ResCard;
