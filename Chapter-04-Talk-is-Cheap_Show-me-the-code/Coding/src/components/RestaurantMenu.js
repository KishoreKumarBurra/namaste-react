import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.47832353074318&lng=78.37417326449751&restaurantId=120129&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("json=", json);
    setResInfo(json.data);
   // setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
   console.log('cards==', json?.data?.cards[2]);
  };

  //const { itemCards } = resInfo?.cards[1].card?.card.itemCards;

  const { name, city, costForTwoMessage, cusinies, totalRatingsString } = resInfo?.cards[2]?.card?.card?.info;

  return resInfo === null ? <ShimmerUI/> :(
    <div className="Menu">
        <h1>{name}</h1>
        <h2>Menu</h2>
        <h3></h3>
    </div>
  );
};

export default RestaurantMenu;
