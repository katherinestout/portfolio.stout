import React from "react";
import styles from "./../styles/mainPage.scss";
import { Link } from "react-router-dom";
import ccGraphic from "./../../../svg/crewCuts/crewcutssq.png";

const MainPage = () => (
  <div className={styles}>
    <div className="project-container">
      <Link to="/crewCuts">
        <div className="project project-1">
          {" "}
          crewcuts
          <img src={ccGraphic} alt="ccGraphic" className="ccGraphic" />
        </div>
      </Link>
      <Link to="/mpp">
        {" "}
        <div className="project project-2"> mpp</div>
      </Link>

      <Link to="/artGallery">
        {" "}
        <div className="project project-3">artGallery</div>
      </Link>

      <Link to="/portfolio">
        <div className="project project-4"> portfolio</div>
      </Link>
    </div>
  </div>
);

export default MainPage;
