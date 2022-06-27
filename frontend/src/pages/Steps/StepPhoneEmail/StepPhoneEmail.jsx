import React, { useState } from "react";
import Email from "../../../Components/StepPhoneEmail/Email/Email.jsx";
import Phone from "../../../Components/StepPhoneEmail/Phone/Phone.jsx";
import styles from "./StepPhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.btnWrapper}>
            <button
              className={`${styles.toggleBtn} ${
                type == "phone" ? styles.active : ""
              }`}
              onClick={() => setType("phone")}
            >
              <img src="/images/phone-white.png" alt="Phone" />
            </button>
            <button
              className={`${styles.toggleBtn} ${
                type == "email" ? styles.active : ""
              }`}
              onClick={() => setType("email")}
            >
              <img src="/images/mail-white.png" alt="Mail" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
