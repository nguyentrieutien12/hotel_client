import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BodyRecoveryComponentCustomer from "../BodyRecoveryComponentCustomer/BodyRecoveryComponentCustomer";
import styles from "./styles.module.css";
export default function RecoveryDetailComponent() {
  const [recovery, setRecovery] = useState(null);
  const [recoveryList, setRecoveryList] = useState([]);

  const { recoveryId } = useParams();
  useEffect(() => {
    getRecovery().then((recover) => {
      setRecovery({ ...recover });
    });
  }, [recoveryId]);

  useEffect(() => {
    getBodyRecovery().then((bodyRecovery) => {
      const numberOne = Math.floor(Math.random() * bodyRecovery.length);
      const numberTwo = Math.floor(Math.random() * bodyRecovery.length);
      delete bodyRecovery[numberOne];
      delete bodyRecovery[numberTwo];
      setRecoveryList(bodyRecovery);
    });
  }, []);
  const getBodyRecovery = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/body-recovery`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getRecovery = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_SITE}/body-recovery/${recoveryId}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  };
  if (recovery) {
    return (
      <div className={styles.video_container}>
        <div className="video">
          <iframe
            className={styles.video}
            allow="autoplay; encrypted-media"
            src={recovery.video.video_url}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.main}>
          <div className={styles.description}>
            <div className="main_header d-flex justify-content-between my-5">
              <h1>{recovery?.body_recovery_name}</h1>
              <i
                style={{ fontSize: "30px", cursor: "pointer" }}
                class="fa-solid fa-heart"
              ></i>
            </div>
            <h5 className="my-5">{recovery?.body_recovery_description}</h5>
          </div>
        </div>

        <div class={`row ${styles.recover}`}>
          <h5>Other guided practices by Re:Qi</h5>
          <BodyRecoveryComponentCustomer
            bodyRecovery={recoveryList}
            newRecovery={[]}
            isMain={false}
            col1={12}
            col2={3}
          />
        </div>
      </div>
    );
  }
  return <h1>LOADING DATA . . .</h1>;
}
