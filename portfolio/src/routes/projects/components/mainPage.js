import React from "react";
import styles from "./../styles/mainPage.scss";
import { Link } from "react-router-dom";
import ccGraphic from "./../../../svg/crewCuts/crewcutssq.png";

const MainPage = () => (
  <div className={styles}>
    <div className="project-container">
      <Link to="/crewCuts">
        <div className="project project-1">
          <div className = "div1">
          <div>
            <span className = "project-title">
            Crewcuts </span>
            <br/>
            <span className = "project-content">skhkahsdfklhaksfdh jkshfdkashdflk ksjdhfkaj</span>
            </div>
           
            
          </div>
          <div>
          <img src={ccGraphic} alt="ccGraphic" className="front-graphic" />
          </div>
        </div>
      </Link>

      <Link to="/mpp">
        <div className="project project-2">
        <div className = "div1">
        <div>
            <span className = "project-title">
            MPP </span>
            <br/>
            <span className = "project-content">skhkahsdfklhaksfdh jkshfdkashdflk ksjdhfkaj</span>
            </div>
           
            
          </div>
          <div>
          <img src={ccGraphic} alt="ccGraphic" className="front-graphic" />
          </div>
        </div>
      </Link>

      <Link to="/artGallery">
        <div className="project project-3">
        <div className = "div1">
        <div>
            <span className = "project-title">
            Art Gallery App </span>
            <br/>
            <span className = "project-content">skhkahsdfklhaksfdh jkshfdkashdflk ksjdhfkaj</span>
            </div>
            
            
          </div>
          <div>
          <img src={ccGraphic} alt="ccGraphic" className="front-graphic" />
          </div>
        </div>
      </Link>

      <Link to="/portfolio">
        <div className="project project-4">
        <div className = "div1">
            <div>
            <span className = "project-title">Portfolio</span>
            <br/>
            <span className = "project-content">skhkahsdfklhaksfdh jkshfdkashdflk ksjdhfkaj</span>
            </div>
           
            
          </div>
          <div>
          <img src={ccGraphic} alt="ccGraphic" className="front-graphic" />
          </div>
        </div>
      </Link>


    </div>
  </div>
);

export default MainPage;
