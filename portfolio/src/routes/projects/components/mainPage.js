import React from "react";
import styles from "./../styles/mainPage.scss";
import { Link } from "react-router-dom";

const MainPage = () => (
  <div className={styles}>
    <div className="project-container">
      <Link to="/drinkerator">
        <div className="project project-1"> drinkerator</div>
      </Link>
      <Link to="/gallery">
        {" "}
        <div className="project project-2"> gallery</div>
      </Link>

      <Link to="/workrelated">
        {" "}
        <div className="project project-3">workrelated</div>
      </Link>

      <Link to="/portfolio">
        <div className="project project-4"> portfolio</div>
      </Link>
    </div>
  </div>
);

export default MainPage;
