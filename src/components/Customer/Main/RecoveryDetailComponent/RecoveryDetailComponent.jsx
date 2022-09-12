import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BodyRecoveryComponentCustomer from "../BodyRecoveryComponentCustomer/BodyRecoveryComponentCustomer";
import SaveRecommentComponent from "../SaveRecommentComponent/SaveRecommentComponent";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setRecommendList } from "../../../../features/recommend/recommend";
import LoadingComponent from "../../../Loading/LoadingComponent";
import AuthenComponent from "../../../../HOCs/AuthenComponent";
function RecoveryDetailComponent() {
  const [recovery, setRecovery] = useState(null);
  const [recoveryList, setRecoveryList] = useState([]);
  const { recoveryId } = useParams();
  const recommend = useSelector((state) => state.recommend);
  const dispatch = useDispatch();
  useEffect(() => {
    getRecovery().then((recover) => {
      setRecovery({ ...recover });
    });
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/recommend`)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setRecommendList(data));
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
      console.log("error", error);
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
            src={recovery?.video?.video_url}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.main}>
          <div className={styles.description}>
            <div className="main_header d-flex justify-content-between my-5">
              <h1>{recovery?.body_recovery_name}</h1>
              <SaveRecommentComponent
                type="recovery"
                id={recoveryId}
                handleUpdate={null}
                recommend={recommend}
                data={[{ id: recoveryId }]}
                isShow={false}
              />
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
  return (
    <h1>
      <LoadingComponent />
    </h1>
  );
}
export default AuthenComponent(RecoveryDetailComponent);
