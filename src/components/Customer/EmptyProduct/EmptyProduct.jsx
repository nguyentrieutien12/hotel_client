import React from "react";
import { memo } from "react";
import styles from "./empty.module.css";
function EmptyProduct({ name }) {
  return (
    <div className={styles.empty_container}>
      <h1 style={{ color: "white" }} className="text-center">
        The hotel does not have {name} services, see you soon
      </h1>
    </div>
  );
}
export default memo(EmptyProduct);
