import { restaurantList } from "../constants";
import { useState } from "react";
import RestuarantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant.data.name.includes(searchInput);
  });
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search here..."
          className="search-bar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            //Need to filter restuarant data
            const data = filterData(searchInput, restaurants);
            //Update the restaurants - state
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {
          // Instead of using for loop - we use map function (map is the best way to do functional programming)
          restaurants.map((restaurant) => {
            return (
              <RestuarantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        }
      </div>
    </>
  );
};

export default Body;
