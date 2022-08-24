import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tippy";
import EmptyProduct from "../../EmptyProduct/EmptyProduct";
import styles from "./resutaurant.module.css";
export default function RestaurantDetailComponent() {
  const [restaurants, setRestaurant] = useState([]);
  const { restaurantId } = useParams();
  useEffect(() => {
    getAllRestaurantDetail().then((dishs) => {
      setRestaurant([...dishs]);
    });
  }, []);
  const getAllRestaurantDetail = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_BACKEND_SITE}/dishes/${restaurantId}`
    );
    return result.data;
  };
  const showDishs = () => {
    if (restaurants.length > 0) {
      return restaurants[0].dishs.map((dish) => {
        return (
          <div key={dish?.id} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Tooltip
              title={`<div class="row ${styles.image_container}">
              ${dish.images
                .map((image) => {
                  return `<div class="${styles.image_tippy} col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <img
                      display="flex"
                      style="width: 100%; height: 100%; object-fit: cover"
                      src=${image.image_url}
                      alt="no image"
                    />
                  </div>`;
                })
                .join(" ")}
              
            </div>`}
              position="right"
              arrow="true"
              arrowSize="big"
            >
              <div className={`card ${styles.card}`}>
                <div className="card-header">
                  <h5 className="card-title">{dish.dishe_name}</h5>
                </div>

                <div className="card-body">
                  <img src={dish.images[0]?.image_url} />
                  {/* */}

                  <p className={`card-text ${styles.restaurant_description}`}>
                    {dish.dishe_description}
                  </p>
                </div>
                <div className="card-footer">
                  <h5 style={{ float: "right" }}>{`$ ${dish.dishe_price}`}</h5>
                </div>
              </div>
            </Tooltip>
          </div>
        );
      });
    }
  };
  if (restaurants[0]?.dishs.length > 0) {
    return (
      <div>
        <div className="restaurant_detail_container">
          <div>
            <div className={styles.restaurant_detail_header}>
              <h1>
                {`Enjoy it at ${restaurants[0]?.restaurant_name}` ||
                  "Loading name restaurant"}
              </h1>
              <div className={styles.restaurant_detail_header_option}>
                <button type="button" class="btn btn-success m-2">
                  Save
                </button>
                <button type="button" class="btn btn-warning">
                  RESERVE A TABLE
                </button>
              </div>
            </div>
            <div>
              <img
                className={styles.restaurant_detail_images}
                src={`${restaurants[0]?.image.image_url}`}
                alt=""
                sizes=""
              />
            </div>{" "}
            <div className="my-5">
              <h2>Why we curated this for you </h2>
              <ul>
                <li> Provides immune support</li>
                <li> Clear phlegm</li>
                <li>Stabilizes blood sugar</li>
                <li>Prevents liver damage</li>
              </ul>
            </div>
            <div className="restaurant_detail_description my-5">
              <h4>{`Discover a dining experience built on craft, service and ambience. Madame Fan offers Cantonese cuisine in a contemporary setting.`}</h4>
            </div>
          </div>
          <div className="wrapper">
            <div className="restautant_title">
              <h1 style={{ color: " #f8eee4", fontFamily: "Tenor Sans" }}>
                Food & drinks best suited for{" "}
              </h1>
            </div>
            <div className={`${styles.restaurant_container}`}>
              <div className="row">{showDishs()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <EmptyProduct name="Dish" />;
}
