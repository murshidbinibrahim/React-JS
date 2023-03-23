import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import RestuarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    //Best place to make an API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    //Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //console.log("render()");

  if (!allRestaurants) return null;

  //  if (filteredRestaurants?.length === 0) return <h1>No Product Found!!!</h1>;

  //Conditional Rendering

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchInput, allRestaurants);
            //Update the restaurants - state
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {
          // Instead of using for loop - we use map function (map is the best way to do functional programming)
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant-menu/" + restaurant.data.id}
                key={restaurant.data.id}
                className="restaurant-item"
              >
                <RestuarantCard {...restaurant.data} />
              </Link>
            );
          })
        }
      </div>
    </>
  );
};

export default Body;
