import RestaurantCard from "./RestaurantCard";
import SearchCard from "./SearchCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { REAL_SWIGGY_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REAL_SWIGGY_URL);
    const json = await data.json();
    // Optional Chaining '?'
    console.log('Body=', json);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  /*if(listOfRestaurants?.length === 0) {
    return <ShimmerUI />
  } */

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Look like you're offline..!! Please check your Internet once.</h1>

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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
