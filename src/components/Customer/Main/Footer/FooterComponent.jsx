import React from "react";

export default function FooterComponent() {
  return (
    <div>
      <div class="row" style={{ background: "#523922" }}>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <div className="accsio d-flex">
            <h4>Facebook</h4>
            <h4>Zalo</h4>
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <p>©2022 Copyright all reserved by Kanpobliss</p>
        </div>
      </div>
    </div>
  );
}
