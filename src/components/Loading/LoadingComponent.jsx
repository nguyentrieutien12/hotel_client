import React, { memo } from "react";
import "./loading.css";
function LoadingComponent() {
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
export default memo(LoadingComponent);
