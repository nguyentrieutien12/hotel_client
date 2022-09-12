import React from "react";
import "./loading.css";
export default function LoadingComponent() {
  return (
    <div>
      <div className="load-wrapp">
        <div className="load-9">
          <div className="spinner">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
            <div className="bubble-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
