import React from "react";
import styles from "./StepPhoneEmail.jsx";
const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <div>Phone or Email</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepPhoneEmail;
