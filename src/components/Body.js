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
  //console.log(restaurants);

  //Empty Dependency Array - Once after render
  //Dependency Array [searchInput] - Once after initial render - everytime after render (searchInput changes)
  //Dependency Array [restaurants] - Once after initial render - everytime after render (restaurants changes - on BtnClick)

  useEffect(() => {
    //Best place to make an API Call
    console.log("useEffect()-initial + call this when dependency change");
  }, []);

  console.log("render()- initial + call every state and props change");

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
