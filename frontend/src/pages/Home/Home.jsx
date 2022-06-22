import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../Components/Shared/Button/Button";
import Card from "../../Components/Shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const history = useHistory();
  const startRegister = () => {
    history.push("/register");
  };
  return (
    <div className={styles.cradWrapper}>
      <Card title={"Welcome to ISM Peeps!"} icon={"logo"}>
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button text={"Get your username"} onClick={startRegister} />
        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
