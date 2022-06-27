import React, { useState } from "react";
import Button from "../../../Components/Shared/Button/Button.jsx";
import Card from "../../../Components/Shared/Card/Card.jsx";
import TextInput from "../../../Components/Shared/TextInput/TextInput.jsx";
import styles from "./StepOtp.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as api from "../../../api/index";
import { ERROR, SUCCESS } from "../../../Components/Shared/toast/types.js";
import { showToast } from "../../../Components/Shared/toast/toast.js";
import Loader from "../../../Components/Shared/Loader/Loader.js";
import { setAuth } from "../../../store/authSlice.js";

const StepOtp = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otpData);
  const onSubmitOtp = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.verifyOtp({
        otp,
        phone,
        hash,
      });
      // console.log(data);
      dispatch(setAuth(data));
      showToast(SUCCESS, "Otp is verified successfully.");
    } catch (e) {
      const message = e?.response?.data?.message || "Error in verifying otp!";
      showToast(ERROR, message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card
          title={"Enter the otp that we have just sent you"}
          icon={"lock-emoji"}
        >
          <TextInput
            value={otp}
            onChange={(e) =>
              isNaN(e.target.value) ? setOtp(otp) : setOtp(e.target.value)
            }
          />
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className={styles.actionBtnWrapper}>
                <Button text={"Next"} onClick={onSubmitOtp} />
              </div>
            )}
            <p className={styles.bottomParagraph}>
              By entering your number, you're agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
