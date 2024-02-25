import RestaurantCard from "./RestaurantCard";
import SearchCard from "./SearchCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { REAL_SWIGGY_URL } from "../../utils/constants";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.47832353074318&lng=78.37417326449751&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json==", json);
    // Optional Chaining '?'
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  /*if(listOfRestaurants?.length === 0) {
    return <ShimmerUI />
  } */

  // Conditional Rendering
  return listOfRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search">
        {/* <SearchCard /> */}
        <input
          type="text"
          name="search field"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("searchText==", searchText);
            const filteredResturants = listOfRestaurants.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );
            setFilteredRestaurants(filteredResturants);
          }}
        >
          Search
        </button>
      </div>
      <div
        className="top-rated-restaurant-btn"
        onClick={() => {
          const filteredRes = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setlistOfRestaurants(filteredRes);
        }}
      >
        <button className="tp-btn">Top Rated Restaurants</button>{" "}
        <span>Restaurants count: {listOfRestaurants?.length}</span>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
