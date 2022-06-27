import React from "react";
import { Bars } from "react-loader-spinner";
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loadingWrapper}>
      <Bars
        heigth="60"
        width="60"
        color="#0077FF"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
