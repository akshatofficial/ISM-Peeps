import React, { useState } from "react";
import Button from "../../Shared/Button/Button";
import Card from "../../Shared/Card/Card";
import TextInput from "../../Shared/TextInput/TextInput";
import styles from "../../../pages/Steps/StepPhoneEmail/StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <Card title={"Enter your email address"} icon={"mail-white"}>
        <TextInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <div className={styles.actionBtnWrapper}>
            <Button text={"Next"} onClick={onNext} />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your email, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </>
  );
};

export default Email;
