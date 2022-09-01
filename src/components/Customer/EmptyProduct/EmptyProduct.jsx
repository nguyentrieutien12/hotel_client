import React from "react";
import styles from "./empty.module.css";
export default function EmptyProduct({ name }) {
  return (
    <div className={styles.empty_container}>
      <h1 className="text-center">
        The hotel does not have {name} services, see you soon
      </h1>
    </div>
  );
}
