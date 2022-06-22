import React from "react";
import styles from "./StepUsername.jsx";
const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>This is username step</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUsername;
