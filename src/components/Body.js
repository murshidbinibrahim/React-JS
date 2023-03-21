import { restaurantList } from "../constants";
import RestuarantCard from "./RestaurantCard";

const Body = () => {
  return (
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
  );
};

export default Body;
