import React from "react";
import Hotels from "../../pages/Hotels/Hotels";
import styles from "../styles.module.css";

const ResultHotels = ({ city }) => {
  return (
    <div>
      <h2 className={styles.secondTitle}>
        Hotels in <span>{city}</span>
      </h2>
      <Hotels city={city} />
    </div>
  );
};

export default ResultHotels;
