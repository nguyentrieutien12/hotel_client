import React from "react";
import styles from "./footer.module.css";
export default function FooterComponent() {
  return (
    <div>
      <div
        class={`row ${styles.footer_container}`}
        style={{ background: "#523922" }}
      >
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <div className="accsio d-flex">
            <h4>Facebook</h4>
            <h4 className="mx-5">Zalo</h4>
            <h4>Email</h4>
          </div>

          <div className="trick_true">
            <span>Terms and Conditions Privacy Policy Disclaimer</span>
            <span> Privacy Policy </span>
            <span> Disclaimer</span>
          </div>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 d-flex">
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
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Enter Email"
            />
          </div>
          <button type="submit" class="btn btn-primary my-2">
            Subscribe
          </button>
        </div>{" "}
        <div class="row my-5">
          <span className="my-2 text-center">
            ©2022 Coyright all reserved by Kanpobliss
          </span>
        </div>
      </div>
    </div>
  );
}
