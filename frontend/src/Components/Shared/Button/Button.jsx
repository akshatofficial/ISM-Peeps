import React from "react";
import styles from "./Button.module.css";

const Button = ({text, onClick, isDisabled = false}) => {
  return (
    <button className={`${styles.button}`} onClick={onClick} disabled={isDisabled}>
      <span>{text}</span>
      <img className={styles.arrow} src="/images/arrow-forward.png" alt="arrow" />
    </button>
  );
};

export default Button;
