import React, { useEffect, useState } from "react";
import styles from "./resutaurant.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

export default function RestaurantComponent() {
  const [restaurants, setRestaurant] = useState([]);
  const { hotelId } = useParams();
  useEffect(() => {
    restaurantsByHotelId().then((restaurants) => {
      setRestaurant(restaurants);
    });
  }, []);
  const showRestaurants = () => {
    if (restaurants.length > 0) {
      return restaurants[0].restaurants.map((restaurant) => {
        return (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Tooltip
              title={`<img style="width: 200px; height: 200px; object-fit: cover" src=${restaurant.images[0]?.image_url} />`}
              position="right-start"
              arrow="true"
              arrowSize="big"
            >
              <div className={`card ${styles.card}`}>
                <div className="card-header">
                  <h5 className="card-title">{restaurant.restaurant_name}</h5>
                </div>
                <div className="card-body">
                  {/* */}
                  <p className="card-text ">
                    {restaurant.restaurant_description}
                  </p>
                </div>
              </div>
            </Tooltip>
          </div>
        );
      });
    }
  };
  const restaurantsByHotelId = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/hotels/restaurant/${hotelId}`
    );
    return result.data;
  };
  return (
    <div className="wrapper">
      <div className="restautant_title">
        <h1 style={{ color: " #f8eee4", fontFamily: "Tenor Sans" }}>
          Food & drinks best suited for{" "}
        </h1>
      </div>
      <div className="restaurant_container">
        <div className="row">{showRestaurants()}</div>
      </div>
    </div>
  );
}
