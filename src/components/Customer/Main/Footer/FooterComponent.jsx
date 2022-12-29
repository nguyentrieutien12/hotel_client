import React from "react";
import styles from "./footer.module.css";
export default function FooterComponent() {
  return (
    <div>
      <div
        className={`row ${styles.footer_container}`}
        style={{ background: "#B99173", borderTop: "1px solid white" }}
      >
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <div className={`accsio d-flex ${styles.accsio}`}>
            <h4>
              <i className="fa-brands fa-facebook"></i>
            </h4>
            <h4 className="mx-5">
              <i className="fa-brands fa-twitter"></i>
            </h4>
            <h4>
              <i className="fa-brands fa-instagram"></i>
            </h4>
          </div>

          <div className="trick_true" style={{ fontSize: "18px" }}>
            <span>Terms and Conditions Privacy</span>
            <span className="mx-5"> Privacy Policy </span>
            <span> Disclaimer</span>
          </div>
        </div>
        <div
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4 d-flex"
          style={{ fontSize: "18px", justifyContent: "center" }}
        >
          <div className="info_one" style={{ marginRight: "14px" }}>
            <p>Body Constitution</p>
            <p>Body Recovery</p>
            <p>Guided Practices</p>
          </div>
          <div className="info_two">
            <p>My Profile</p>
            <p>About Us</p>
            <p>Feedback</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter Email"
            />
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Subscribe
          </button>
        </div>{" "}
        <div className="row ">
          <span className="my-2 text-center" style={{ fontSize: "18px" }}>
            ©2022 Coyright all reserved by 9 Group
          </span>
        </div>
      </div>
    </div>
  );
}
