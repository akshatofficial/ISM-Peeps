import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const logoStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
  };
  return (
    <div>
      <nav className={`${styles.navbar} container`}>
        <Link to={"/"} style={logoStyle}>
          <p>👋 ISM Peeps</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
