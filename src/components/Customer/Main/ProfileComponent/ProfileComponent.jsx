import React, { useEffect, useState } from "react";
import { account as getAccount } from "../../../../helpers/account.helper";
import styles from "./profile.module.css";
import axios from "axios";
import { Tooltip } from "react-tippy";
import { Link } from "react-router-dom";
export default function ProfileComponent() {
  const [account, setAccount] = useState(null);
  const [recommend, setRecommend] = useState([]);
  const [recovery, setRecovery] = useState([]);
  const [recommendMain, setRecommendMain] = useState([]);
  const [value, setValue] = useState("restaurant");

  useEffect(() => {
    getAccount().then((account) => {
      setAccount(account);
    });
    axios
      .get(`${import.meta.env.VITE_BACKEND_SITE}/recommend/all`)
      .then((res) => res.data)
      .then((recommends) => {
        console.log(recommends);
        const { recommend, recovery } = recommends;
        setRecommend(recommend);
        setRecovery(recovery);
        setRecommendMain(recommend);
      });
  }, []);
  const handleFilterRecommend = (e) => {
    const { value } = e.target;
    const list = recommendMain.filter((recommend) => recommend.type === value);
    setValue(value);
    setRecommend(list);
  };
  const showRecommend = () => {
    if (recommend.length > 0) {
      const list = recommendMain.filter(
        (recommend) => recommend.type === value
      );
      const name = `${[value]}_name`;
      const description = `${[value]}_description`;
      return list.map((v) => {
        const images = `images${value}`;
        return (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className={`card ${styles.card}`}>
              <div className="card-header">
                <Link to={`#`}>
                  <h5 className="card-title">{v[value]?.[name]}</h5>
                </Link>
              </div>
              <div className="card-body">
                <img src={v[images][0].image_url} alt="" />
                <p className={`card-text ${styles.restaurant_description}`}>
                  {v[value]?.[description]}
                </p>
              </div>
            </div>{" "}
            {/* </Tooltip> */}
          </div>
        );
      });
    }
  };
  const showRecovery = () => {
    return recovery.map((recovery) => {
      if (recovery.recoverys) {
        console.log(recovery);
        return (
          <div
            key={recovery?.id}
            className={`col-xs-3 col-sm-3 col-md-3 col-lg-3`}
          >
            <Link to={`#`}>
              <div className={`card ${styles.card} my-3`}>
                <img
                  className="card-img-top"
                  src={recovery?.image?.image_url}
                  alt="Card image cap"
                />
                <h2>{recovery?.recoverys?.body_recovery_name}</h2>
                <p
                  className={`card-text ${styles.text}`}
                  style={{ color: "black", float: "right" }}
                >
                  Some quick
                </p>
              </div>
            </Link>
          </div>
        );
      }
    });
  };
  return (
    <div>
      <h1>Hello {account?.username}</h1>
      <span>
        Here you can access your past assessment results and save favorites
      </span>

      <div class="row">
        <div className={styles.cons}>
          <div className="name">
            <h3>Body Constitution</h3>
          </div>
          <p
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            VIEW RESULT
          </p>
        </div>
        <div class="collapse" id="collapseExample">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <select
              id="input"
              class="form-control"
              required="required"
              onChange={handleFilterRecommend}
              value={value}
            >
              <option value="restaurant">Restaurant</option>
              <option value="spa">Spa</option>
              <option value="gym">Gym</option>
            </select>
          </div>
          <div className="recommend">
            <div class="row">{showRecommend()}</div>
          </div>
        </div>
        <div className={styles.cons}>
          <div className="name">
            <h3>Body Recovery</h3>
          </div>
          <p
            data-toggle="collapse"
            href="#ss"
            role="button"
            aria-expanded="false"
            aria-controls="ss"
          >
            VIEW RESULT
          </p>
        </div>
        <div class="collapse" id="ss">
          <div class="row">{showRecovery()}</div>
        </div>
      </div>
    </div>
  );
}
