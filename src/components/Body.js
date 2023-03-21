import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render()");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search here..."
          className="search-text"
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
