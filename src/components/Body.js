import { restaurantList } from "../constants";
import { useState } from "react";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  //searchTxt is a local state variable
  const [searchInput, setSearchInput] = useState(""); //To create state variable

  const [btnClicked, setBtnClicked] = useState("true");

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
            if (btnClicked === "true") {
              setBtnClicked("false");
            } else {
              setBtnClicked("true");
            }
          }}
        >
          Search
        </button>
        <h1>{btnClicked}</h1>
      </div>
      <div className="restaurant-list">
        {
          // Instead of using for loop - we use map function (map is the best way to do functional programming)
          restaurantList.map((restaurant) => {
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
