import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Tooltip } from "react-tippy";
import { Link, useParams } from "react-router-dom";
import styles from "./../Restaurant/resutaurant.module.css";
export default function GymComponent() {
  const [spas, setSpa] = useState([]);
  const { hotelId } = useParams();
  useEffect(() => {
    getSpas().then((gyms) => {
      setSpa(gyms);
    });
  }, []);
  const getSpas = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/hotels/spa/${hotelId}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const showSpas = () => {
    if (spas.length > 0) {
      return spas[0].spas.map((spa) => {
        return (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Tooltip
              title={`<img style="width: 200px; height: 200px; object-fit: cover" src=${spa.images[0]?.image_url} />`}
              position="right-start"
              arrow="true"
              arrowSize="big"
            >
              <div className={`card ${styles.card}`}>
                <div className="card-header">
                  <Link to={`${spa?.id}`}>
                    <h5 className="card-title">{spa.spa_name}</h5>
                  </Link>
                </div>

                <div className="card-body">
                  <img src={spa.images[0]?.image_url} />
                  {/* */}
                  <p className="card-text ">{spa.spa_description}</p>
                </div>
              </div>
            </Tooltip>
          </div>
        );
      });
    }
  };
  return (
    <div>
      {" "}
      <div className="wrapper">
        <div className="restautant_title">
          <h1 style={{ color: " #f8eee4", fontFamily: "Tenor Sans" }}>
            Fitness & workouts best suited for
          </h1>
        </div>
        <div className={`${styles.restaurant_container}`}>
          <div className="row">{showSpas()}</div>
        </div>
      </div>
    </div>
  );
}
