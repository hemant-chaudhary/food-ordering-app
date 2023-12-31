import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { RES_DATA_URL } from "../utils/constants";
const Body = () => {
  // local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JS function
  let listOfRestaurants1 = [
    {
      data: {
        id: 1,
        name: "McDonald's",
        cloudinaryImageId: "0e8f93a56b93e43d7627c2c21bc1106c",
        cuisines: ["Burgers", "Beverages", "Cafe"],
        costForTwo: 40000,
        avgRating: "4.2",
      },
    },
    {
      data: {
        id: 2,
        name: "KFC",
        cloudinaryImageId: "0e8f93a56b93e43d7627c2c21bc1106c",
        cuisines: ["Burgers", "Beverages", "Cafe"],
        costForTwo: 40000,
        avgRating: "3.5",
      },
    },
    {
      data: {
        id: 3,
        name: "MCD",
        cloudinaryImageId: "0e8f93a56b93e43d7627c2c21bc1106c",
        cuisines: ["Burgers", "Beverages", "Cafe"],
        costForTwo: 40000,
        avgRating: "4.5",
      },
    },
  ];

  useEffect(() => {
    console.log("useEffect called");
    getRestaurants();
  }, []);

  getRestaurants = async () => {
    const data = await fetch(RES_DATA_URL);
    const json_data = await data.json();

    console.log(json_data);
    setListOfRestaurants(json_data.data.cards)
  };

  console.log("rendered");

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="top-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-conatiner">
        {listOfRestaurants.map((restaurant) => {
          return <ResCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
