import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./../Restaurant/resutaurant.module.css";
import { Tooltip } from "react-tippy";
export default function GymDetailComponent() {
  const [workouts, setWorkouts] = useState([]);

  const { gymId } = useParams();
  useEffect(() => {
    getWorkouts().then((workouts) => {
      setWorkouts(workouts);
    });
  }, []);
  const getWorkouts = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/gyms/${gymId}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const showWorkouts = () => {
    if (workouts.length > 0) {
      return workouts[0].workouts.map((workout) => {
        return (
          <div
            key={workout?.id}
            className="col-xs-3 col-sm-3 col-md-3 col-lg-3"
          >
            <Tooltip
              title={`<div className="row ${styles.image_container}">
              ${workout.images
                .map((image) => {
                  return `<div className="${styles.image_tippy} col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
              position="top-start"
              arrow="true"
              arrowSize="big"
            >
              <div className={`card ${styles.card}`}>
                <div className="card-header">
                  <h5 className="card-title">{workout.workout_name}</h5>
                </div>

                <div className="card-body">
                  <img
                    src={`${workout.images[0]?.image_url}`}
                    alt=""
                    sizes=""
                  />
                  {/* */}
                  <p className="card-text ">{workout.workout_description}</p>
                </div>
                <div className="card-footer">
                  <h5
                    style={{ float: "right" }}
                  >{`$ ${workout.workout_price}`}</h5>
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
      <div>
        <div className="restaurant_detail_container">
          <div>
            <div className={styles.restaurant_detail_header}>
              <h1>{workouts[0]?.gym_name || "Loading name restaurant"}</h1>
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
                src={`${workouts[0]?.image.image_url}`}
                alt=""
                sizes=""
              />
            </div>{" "}
            <div className="">
              <h2>Why we curated this for you </h2>
              <ul>
                <li> Provides immune support</li>
                <li> Clear phlegm</li>
                <li>Stabilizes blood sugar</li>
                <li>Prevents liver damage</li>
              </ul>
            </div>
            <div className="restaurant_detail_description">
              <h4>{`Discover a dining experience built on craft, service and ambience. Madame Fan offers Cantonese cuisine in a contemporary setting.`}</h4>
            </div>
          </div>
          <div className="wrapper">
            <div className="restautant_title">
              <h1 style={{ color: " #f8eee4", fontFamily: "Tenor Sans" }}>
                Fitness & workouts best suited for {workouts[0]?.workout_name}
              </h1>
            </div>
            <div className={`${styles.restaurant_container}`}>
              <div className="row">{showWorkouts()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
