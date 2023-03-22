import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // Destructure by same name provided in App.js - appRouter (other name not allowed)
  // create a dynamic URL Params
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  //const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2783102&lng=75.77313889999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
    // console.log(json);
    // console.log(json.data.cards[0].card.card.info);
    // console.log(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards);
    // setRestaurant(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards);
  }

  return Object.keys(restaurant)?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>{restaurant.name}</h1>
        <h2>Restaurant ID : {restaurant.id}</h2>
        <h3>{restaurant.cuisines?.join(", ")}</h3>
        <h3>
          {restaurant.areaName} - {restaurant.city}
        </h3>
        <h4>{restaurant.avgRating} stars</h4>
      </div>
      {/* <div className="menu-items">
        <h1>Menu</h1>
        <ul>
          {restaurantMenu.map((item, index) => (
            <li key={index}>{item.card.card.title}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
