import React, { useState } from "react";
import Button from "../../Shared/Button/Button";
import Card from "../../Shared/Card/Card";
import TextInput from "../../Shared/TextInput/TextInput";
import styles from "../../../pages/Steps/StepPhoneEmail/StepPhoneEmail.module.css";
import * as api from "../../../api/index";
import { showToast } from "../../Shared/toast/toast";
import { ERROR, SUCCESS } from "../../Shared/toast/types";
import Loader from "../../Shared/Loader/Loader";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/authSlice";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmitPhone = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.sendOtp({
        phone: phoneNumber,
      });
      console.log(data);
      showToast(SUCCESS, "Otp sent successfully!");
      dispatch(
        setOtp({
          phone: data.phone,
          hash: data.hash,
        })
      );
      onNext();
    } catch (e) {
      const message = e?.response?.data?.message || "Error in sending otp!";
      showToast(ERROR, message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Card title={"Enter your phone number"} icon={"phone-white"}>
        <TextInput
          value={phoneNumber}
          onChange={(e) =>
            isNaN(e.target.value)
              ? setPhoneNumber(phoneNumber)
              : setPhoneNumber(e.target.value)
          }
        />
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className={styles.actionBtnWrapper}>
                <Button text={"Next"} onClick={onSubmitPhone} />
              </div>
            </>
          )}
          <p className={styles.bottomParagraph}>
            By entering your number, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
    </>
  );
};

export default Phone;
