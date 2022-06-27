import React from "react";
import { useState } from "react";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
// import styles from "./Authenticate.module.css";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [currStepNo, setCurrStepNo] = useState(1);
  const CurrComponent = steps[currStepNo];

  const onNext = () => {
    setCurrStepNo(currStepNo + 1);
  };
  return <CurrComponent onNext={onNext} />;
};

export default Authenticate;
