import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

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
    </div>
  );
};

export default RestaurantMenu;
