import React from "react";
import styles from "./home.module.css";
import "./home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { style } from "@mui/system";
export default function HomeComponentCus() {
  return (
    <div className={styles.home_container}>
      <Carousel className={styles.carousel} fade controls={false}>
        <Carousel.Item className={styles.item}>
          <img
            className={`d-block w-100 h-400 `}
            src="anh1.png"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carousel_caption}>
            <h1>
              Expand your <br></br> journey towards <br></br>holistic wellbeing
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img className={`d-block w-100`} src="anh2.png" alt="Second slide" />
          <Carousel.Caption className={styles.carousel_caption}>
            <h1>
              Discover your body's <br></br>unique needs with our <br></br>TCM
              wellness assessments
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img className={`d-block w-100`} src="anh3.png" alt="Third slide" />

          <Carousel.Caption className={styles.carousel_caption}>
            <h1>
              Explore dining, spa, <br></br>fitness & self-care rituals,{" "}
              <br></br> curated for your needs & goals!
            </h1>
            <Link
              to="main"
              style={{ color: "white" }}
              title="Click To Answer Question"
            >
              <i className="fa-solid fa-angle-right"> </i>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
